const
  dictionary = require('./dictionary/main');

const
  LANGS = {
    js: 0,
    ys: 1,
  };

module.exports = {
    compile,
    dictionary,
};

function escapeRegExp(str) {
    str = str.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');

    if (/^\w+$/.test(str)) {
        str = '\\b' + str + '\\b';
    }

    return str;
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


/**
 * @param text текст, по которому следует пройтись
 * @param to язык текста ('ys' or 'js')
 */
function iterateText(text, to = 'js') {
    let
      lang = LANGS[to];

    dictionary
        .sort((a, b) => {
            a = a[lang].length;
            b = b[lang].length;
            return b - a;
        })
        .forEach(pair => text = yoptReplaceAll(text, pair[lang], pair[+!lang]));

    return text;
}
