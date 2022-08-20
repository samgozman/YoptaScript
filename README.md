# YoptaScript

[![yoptascript logo](./docs/assets/img/YoptaScript.png)](https://yopta.space/)

[![ko-fi](https://ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/C0C1DI4VL)

[![yoptascript](https://img.shields.io/badge/%D0%A1%D0%BA%D0%B0%D1%87%D0%B0%D1%82%D1%8C-YoptaScript-green)](https://github.com/samgozman/YoptaScript/tree/master/dist/yopta.js)
[![npm](https://img.shields.io/npm/v/yopta)](https://www.npmjs.com/package/yopta)
[![contributions welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat)](https://github.com/samgozman/YoptaScript/issues)
[![contributions welcome](https://img.shields.io/packagist/l/doctrine/orm.svg?style=flat)](https://github.com/samgozman/YoptaScript/blob/master/LICENSE.txt)

[YoptaScript](http://yopta.space/) это первый в мире скриптовый язык программирования для гопников и реальных пацанов, транслируемый в чистый JavaScript. YoptaScript позволит "чётким пацанам" быстро влиться в ряды программистов и процесс разработки.

Очень **приветствуются** добавления новых определений в [словарь](./src/dictionary/dictionary.ts) языка, а также поиск багов и расширение функционала!

Смотрите интервью о создании языка на канале Хекслет: [https://www.youtube.com/watch?v=Rk5wNGBIilM](https://www.youtube.com/watch?v=Rk5wNGBIilM)

[![yoptascript logo](./docs/assets/img/Yopta2.png)](https://github.com/samgozman/YoptaScript/blob/master/CONTRIBUTE.md)

## Разработка

При разработке языка использовались основные лексические и фразеологические единицы диалекта "нормальных пацанов" позаимствованные из следующих словарей:

* [ГСР](http://lurkmore.to/ГСР)
* [Краткий словарь блатного жаргона](http://www.aferizm.ru/jargon/slovar.htm)

Так же были заимствованы крылатые слова и выражения в ходе наблюдения за некоторыми индивидами из представителей "чётких пацанов".

Толчком к разработке **YoptaScript** послужили события, произошедшие в середине 2016 года, в ходе которых журналистами Piter.TV была открыта такая категория программистов как [**гопники-программисты**](http://piter.tv/event/V_Peterburge_pyatero_studentov_kolledzha_grabili_shkol_nikov/).

Вся разработка и поиск ошибок ведётся в ветке **develop**!

## Предупреждения

YoptaScript не несёт в себе цели оскорбить кого-то или унизить. YoptaScript создан для облегчения обучению программированию определённых слоёв населения.

YoptaScript содержит **множество нецензурной лексики**.

## Использование

Скачайте [последнюю версию](https://github.com/samgozman/YoptaScript/tree/master/dist/yopta.js) языка и следуйте дальнейшим инструкциям.

### Браузер

1. Положите файл `yopta.js` из папки `dist` в папку c вашим проектом. Или используйте CDN
2. Подключите файл к вашей `html` странице в самый конец перед закрытием тега `body`:

```html
<body>
    <script src="yopta.js"></script>
</body>
```

3. Создайте внутри `body` элемент `script` с атрибутом  `language="YoptaScript"` на странице до подключения основного скрипта

```html
<body>
    ... ...
    <script language="YoptaScript">
        //ваш йоптакод
    </script>
    <!-- Пример с CDN -->
    <script src="https://cdn.jsdelivr.net/gh/samgozman/YoptaScript/dist/yopta.js"></script>
</body>
```

Можно так же вынести йоптакод в отдельный файл и подключить через атрибут `src`.

4. Начните писать код!

```html
<script language="YoptaScript">
    ксива.малява(" Оно работает ") нах
</script>
```

Полный пример можно посмотреть в файле [index.html](https://github.com/samgozman/YoptaScript/blob/master/demo/page/index.html) в директории `demo/page`. Конвертером из JavaScript в YoptaScript можно воспользоваться открыв файл [index.html](https://github.com/samgozman/YoptaScript/blob/master/demo/converter/index.html) в директории `demo/converter`.

### NodeJS

**YoptaScript** можно так же подключить для вашего проекта с помощью пакетного менеджера **npm**.

```bash
npm install yopta
```

или введите `npm install -g yopta` чтобы установить йопту глобально.

## Проекты на YoptaScript

### Игра Ping-Pong

Один из разработчиков языка YoptaScript написал игру Ping-Pong на чистом YoptaScript с использованием canvas!

**[Pong-YoptaScript](https://github.com/grushan/Pong-YoptaScript) ([Demo](https://yopta-pong.herokuapp.com))**

## Примеры

См. папку examples.

1. [Переменные, функции, условия](https://github.com/samgozman/YoptaScript/blob/master/examples/vars.yopta)
2. [Циклы](https://github.com/samgozman/YoptaScript/blob/master/examples/loops.yopta)
3. [document & window](https://github.com/samgozman/YoptaScript/blob/master/examples/document.yopta)
4. [Math](https://github.com/samgozman/YoptaScript/blob/master/examples/math.yopta)
5. [Логические операторы](https://github.com/samgozman/YoptaScript/blob/master/examples/logical.yopta)

## Поддержка разных диалектов

YoptaScript отлично работает с разными локальными диалектами!

Например:

* `трулио` -> `чётко` -> `четко` -> `чотко` -> **true**
* `нетрулио` -> `пиздишь` -> `нечётко` -> `нечетко` -> `нечотко` -> **false**
* `эквалио` -> `ровно` -> `однахуйня` -> `типа` -> **==**

И другие

Все методы и свойства, содержащие букву `ё` можно писать без `ё`, используя `е`. Если в середине слова может присутствовать буква `ё`, то можно писать вместо неё букву `о`. Yopta поймёт.
