/* eslint-disable @typescript-eslint/no-var-requires */

// Проверка словаря
const dictionary = require('../src/dictionary/sortedYopta.json');

test('Проверка уникальности элементов словаря', () => {
    // Объект, где ключом является перевод йопты
    const objOfYoptas = dictionary.reduce((o, [k, v]) => ((o[v] = k), o), {});
    // Сравниваем длинну массива с количеством оригинальных Yopta ключей
    expect(dictionary.length).toBe(Object.keys(objOfYoptas).length);
});
