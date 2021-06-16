// module.exports = {
//     yoptTransliterateFunctionsNames,
// };

interface Literals {
    [key: string]: string;
}

//Новые эксперементальные фичи
//Bug: Транслитерация заменяет названия методов уже переведённых в словаре
function translitString(str: string) {
    // Переводим строку в латынь по словарю
    const translitDict: Literals = {
        'а':'a','А':'a','Б':'B','б':'b','в':'v','В':'V','Г':'G',
        'г':'g','д':'d','Д':'D','Е':'E','е':'e','ж':'zh','Ж':'Zh',
        'з':'z','З':'Z','и':'i','И':'I','й':'i','Й':'I','К':'K',
        'к':'k','Л':'L','л':'l','м':'m','М':'M','Н':'N','н':'n',
        'О':'O','о':'o','П':'P','п':'p','Р':'R','р':'r','С':'S',
        'с':'s','т':'t','Т':'T','У':'U','у':'u','Ф':'F','ф':'f','Х':'H',
        'х':'h','Ц':'Ts','ц':'ts','ч':'ch','Ч':'Ch','ш':'sh','Ш':'Sh',
        'щ':'sch','Щ':'Sch','ъ':'\'','Ъ':'_','ы':'i','Ы':'I','Ь':'_',
        'ь':'_','э':'e','Э':'E','ю':'yu','Ю':'Yu','Я':'Ya','я':'ya'
    };
    let replaced = '', substring = '';
    for (let i = 0; i < str.length; i++) {
        substring = str.substring(i, i+1);
        substring = safeYoficateString(substring);  // Делаем строку "Ё"-бта безопасной
        replaced += translitDict[substring];
    }
    return replaced;
}

function safeYoficateString(str: string) {
    // Убираем букву "Ё" в строке
    const upperYoCharCode = 1025;
    const lowerYoCharCode = 1105;
    const substringCharCode = str.charCodeAt(0);
    // "Ё"? "ё"? Оп, и нихуя!
    if (substringCharCode == upperYoCharCode || substringCharCode == lowerYoCharCode) {
        str = 'е';
    }
    return str;
}

export function yoptTransliterateFunctionsNames(text: string):string {
    // Переводим имена функций с пацанского на латынь
    text = text.replace(
        // Заменяем имя функции в месте её определения
        /(йопта[\s\t]+)([А-Яа-яЁё0-9_$]+)([\s\t]+)?(\(.*\))/gi,
        function (match, p1, p2, p3, p4) {
            return [p1, translitString(p2), p3, p4].join('');
        }
    ).replace(
        // Заменяем имя функции в местах её вызова
        /([А-Яа-яЁё0-9_$]+)([\s\t]+)?(\(.*\))/gi,
        function (match, p1, p2, p3) {
            return [translitString(p1), p2, p3].join('');
        }  
    );
    return text;
}
