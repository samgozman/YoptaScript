// eslint-disable-next-line @typescript-eslint/no-var-requires
// require('yopta);
require('../../');

const text = `ясенХуй kek внатуре ксива.вычислитьЛохаПоНомеру(\'kek\') нахуй
				участковый гыы внатуре захуярить папандос()`;
const translated = global.yopta(text, 'ys');
console.log(translated);

// Любите говнокод, да? Я тоже 💩
