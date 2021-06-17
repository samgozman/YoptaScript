// Сортирует массив по самой длинной Yopta фразе перед сборкой
import * as fs from 'fs';
import { dictionary } from './dictionary';

dictionary.sort(function (a, b) {
    if (a[1].length < b[1].length) return 1;
    else if (a[1].length > b[1].length) return -1;
    else return 0;
});

const file = `export const dictionary = ${JSON.stringify(
    dictionary,
    null,
    '\t'
).replace(/\\/g, '')}`;

fs.writeFile('src/dictionary/sortedYopta.ts', file, function (err) {
    if (err) return console.log(err);
    console.log('Yopta array sorted!');
});

//END
