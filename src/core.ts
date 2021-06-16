import dictionary from './dictionary/main';

const LANGS = {
    js: 0,
    ys: 1,
  };

// module.exports = {
//     compile,
//     dictionary,
// };

function escapeRegExp(str: string) {
    str = str.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');

    if (/^\w+$/.test(str)) {
        str = '\\b' + str + '\\b';
    }

    return str;
}

function yoptReplaceAll(str: string, search: string, replacement: string) {
    const re = new RegExp(escapeRegExp(search), 'g');
    return str.replace(re, replacement);
}

export function compile(text: string, lang: 'js'|'ys'):string {
    /* text - текст для реплейса
     * lang - язык текста ('ys' or 'js')
     */
    interface Literals {
        [key: string]: string;
    }
    const commentRegExp = /((?:\/\*(?:[^*]|(?:\*+[^*\/]))*\*+\/)|(?:\/\/.*))/g;
    const tmpToken = 'ys_' + (new Date()).getTime() + '_';
    const rStringLiterals: Literals = {};
    text = text.replace(/\"(?:\\.|[^\"\\])*\"|\'(?:\\.|[^\'\\])*\'/g, function (val, pos) {
        const needKey = tmpToken + pos;
        rStringLiterals[needKey] = val;
        return needKey;
    });
    const commentsArray = text.match(commentRegExp) || [];
    text = iterateText(text, lang);
    // comeback comments
    text = text.replace(commentRegExp, () => commentsArray.shift() || '');
    // comeback strings
    for (const key in rStringLiterals) {
        text = text.replace(key, rStringLiterals[key]);
    }
    // text = yoptTransliterateFunctionsNames(text);
    return text;
}

/**
 * @param text текст, по которому следует пройтись
 * @param to язык текста ('ys' or 'js')
 */
function iterateText(text: string, to: 'js'|'ys' = 'js') {
    const lang = LANGS[to];

    dictionary
        .sort((a, b) => {
            const al = a[lang].length;
            const bl = b[lang].length;
            return bl - al;
        })
        .forEach(pair => text = yoptReplaceAll(text, pair[lang], pair[+!lang]));

    return text;
}

export default compile;