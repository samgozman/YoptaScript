/* eslint-disable @typescript-eslint/no-explicit-any */
// Пример использования в TypeScript
// import 'yopta';
import '../../';

const globalAny: any = global;

const text = `ясенХуй kek внатуре ксива.вычислитьЛохаПоНомеру(\'kek\') нахуй
				участковый гыы внатуре захуярить папандос()`;
const translated = globalAny.yopta(text, 'ys');
console.log(translated);

// Любите говнокод, да? Я тоже 💩
