// Сортирует массив по самой длинной Yopta фразе перед сборкой
import * as fs from 'fs';
import { dictionary } from './dictionary';

/**
 * Сортирует массив по убыванию длины Yopta перевода и сохраняет в JSON файл sortedYopta.json
 * @param dick массив 2D массивов ключей
 */
export const sortDictionaryToFile = (dick: string[][]): void => {
    dick.sort((a, b) => b[1].length - a[1].length);

    const file = JSON.stringify(dick, null, '\t').replace(/\\/g, '');

    fs.writeFile('src/dictionary/sortedYopta.json', file, function (err) {
        if (err) return console.log(err);
        console.log('Yopta array sorted!');
    });
};

sortDictionaryToFile(dictionary);
