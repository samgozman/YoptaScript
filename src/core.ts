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

export function compile(text: string, lang: 'js' | 'ys' = 'ys'): string {
    interface Literals {
        [key: string]: string;
    }

    const commentRegExp = /((?:\/\*(?:[^*]|(?:\*+[^*\/]))*\*+\/)|(?:\/\/.*))/g;
    const tmpToken = 'ys_' + new Date().getTime() + '_';

    // 1) Extract and stash out real string literals
    const rStringLiterals: Literals = {};
    text = text.replace(
        /\"(?:\\.|[^\"\\])*\"|\'(?:\\.|[^\'\\])*\'/g,
        (val, pos) => {
            const key = tmpToken + pos;
            rStringLiterals[key] = val;
            return key;
        }
    );

    // 2) Extract and stash out JSX text nodes (between > and <) so we don't yoptify them
    const rJsxTextLiterals: Literals = {};
    // 2) Extract only literal text between opening and closing JSX tags
    text = text.replace(
        /(<[A-Za-z][^>]*>)([\s\S]+?)(?=<\/[A-Za-z])/g,
        (match, openTag, content, offset) => {
            const key = tmpToken + 'jsx_' + offset;
            rJsxTextLiterals[key] = content;
            return openTag + key;
        }
    );

    // 3) Extract comments to restore later
    const commentsArray = text.match(commentRegExp) || [];

    // 4) Perform language iteration/replacement
    text = iterateText(text, lang);

    // 5) Restore comments
    text = text.replace(commentRegExp, () => commentsArray.shift() || '');

    // 6) Restore original string literals
    for (const key in rStringLiterals) {
        text = text.replace(key, rStringLiterals[key]);
    }

    // 7) Restore JSX text nodes untouched
    for (const key in rJsxTextLiterals) {
        text = text.replace(key, rJsxTextLiterals[key]);
    }

    return text;
}

// YoptaScript to globals
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const globalThis = polyfill() as any;
globalThis.yopta = compile;
