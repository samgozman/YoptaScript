import polyfill from 'globalthis';
import dictionary from './dictionary/sortedYopta.json';

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

/**
 * @param text текст, по которому следует пройтись
 * @param to язык текста ('ys' or 'js')
 */
function iterateText(text: string, to: 'js' | 'ys' = 'ys') {
    const langCol = to === 'ys' ? 1 : 0;
    const dick = dictionary;
    dick.sort((a, b) => b[langCol].length - a[langCol].length).forEach(
        (pair) => {
            text = yoptReplaceAll(text, pair[langCol], pair[+!langCol]);
        }
    );
    return text;
}

/**
 * Переводит YoptaScript в JavaScript и обратно
 * @param text Строка для перевода
 * @param lang Язык строки (ys/js)
 * @returns {string} Переведённый текст
 */
export function compile(text: string, lang: 'js' | 'ys' = 'ys'): string {
    /* text - текст для реплейса
     * lang - язык текста ('ys' or 'js')
     */
    interface Literals {
        [key: string]: string;
    }
    const rJsxTextLiterals: Literals = {};
    text = text.replace(
        /(<[A-Za-z][^>]*>)([\s\S]+?)(?=<\/[A-Za-z])/g,
        (_, openTag, content, offset) => {
            const key = tmpToken + 'jsx_' + offset;
            rJsxTextLiterals[key] = content;
            return openTag + key;
        }
    );

    const commentRegExp = /((?:\/\*(?:[^*]|(?:\*+[^*\/]))*\*+\/)|(?:\/\/.*))/g;
    const tmpToken = 'ys_' + new Date().getTime() + '_';

    const rStringLiterals: Literals = {};
    text = text.replace(
        /\"(?:\\.|[^\"\\])*\"|\'(?:\\.|[^\'\\])*\'/g,
        (val, pos) => {
            const needKey = tmpToken + pos;
            rStringLiterals[needKey] = val;
            return needKey;
        }
    );

    const commentsArray = text.match(commentRegExp) || [];

    text = iterateText(text, lang);

    // comeback comments
    text = text.replace(commentRegExp, () => commentsArray.shift() || '');

    // comeback strings
    for (const key in rStringLiterals) {
        text = text.replace(key, rStringLiterals[key]);
    }

    // comeback jsx
    for (const key in rJsxTextLiterals) {
        text = text.replace(key, rJsxTextLiterals[key]);
    }

    return text;
}

// YoptaScript to globals
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const globalThis = polyfill() as any;
globalThis.yopta = compile;
