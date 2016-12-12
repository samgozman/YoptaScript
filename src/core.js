const dictionary = require('./dictionary/main');
module.exports = {
    compile,
    dictionary,
};

function escapeRegExp(str) {
    return str.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
}

function yoptReplaceAll(str, search, replacement) {
    var re = new RegExp(escapeRegExp(search), 'g');
    return str.replace(re, replacement);
}

function compile(text, lang) {
    /* text - текст для реплейса
     * lang - язык текста ('ys' or 'js')
     */
    var commentRegExp = /((?:\/\*(?:[^*]|(?:\*+[^*\/]))*\*+\/)|(?:\/\/.*))/g;
    var tmpToken = 'ys_' + (new Date()).getTime() + '_';
    var rStringLiterals = {};
    text = text.replace(/\"(?:\\.|[^\"\\])*\"|\'(?:\\.|[^\'\\])*\'/g, function (val, pos) {
        var needKey = tmpToken + pos;
        rStringLiterals[needKey] = val;
        return needKey;
    });
    var commentsArray = text.match(commentRegExp) || [];
    text = iterateText(text, lang);
    // comeback comments
    text = text.replace(commentRegExp, function () {
        return commentsArray.shift();
    });
    // comeback strings
    for (tmpToken in rStringLiterals) {
        text = text.replace(tmpToken, rStringLiterals[tmpToken]);
    }
    // text = yoptTransliterateFunctionsNames(text);
    return text;
}

function iterateText(text, lang) {
    /* text - текст, по которому следует пройтись
     * lang - язык текста ('ys' or 'js')
     */
    lang = (lang == "ys") ? 1 : 0;
    for (var i = 0; i < dictionary.length; i++) {
        text = yoptReplaceAll(text, dictionary[i][lang], dictionary[i][+!lang]);
    }
    return text;
}