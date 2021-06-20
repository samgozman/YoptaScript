# YoptaScript

[![yoptascript logo](./doc/YoptaScript.png)](https://yopta.space/)

[![yoptascript](https://img.shields.io/badge/%D0%A1%D0%BA%D0%B0%D1%87%D0%B0%D1%82%D1%8C-YoptaScript-green)](https://github.com/samgozman/YoptaScript/tree/master/dist/yopta.js)
[![npm](https://img.shields.io/npm/v/yopta)](https://www.npmjs.com/package/yopta)
[![contributions welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat)](https://github.com/samgozman/YoptaScript/issues)
[![contributions welcome](https://img.shields.io/packagist/l/doctrine/orm.svg?style=flat)](https://github.com/samgozman/YoptaScript/blob/master/LICENSE.txt)

[YoptaScript](http://yopta.space/) это первый в мире скриптовый язык программирования для гопников и реальных пацанов, транслируемый в чистый JavaScript. YoptaScript позволит "чётким пацанам" быстро влиться в ряды программистов и процесс разработки.

Очень **приветствуются** добавления новых определений в [словарь](./src/dictionary/dictionary.ts) языка, а также поиск багов и расширение функционала!

[![yoptascript logo](./doc/Yopta2.png)](https://github.com/samgozman/YoptaScript/blob/master/CONTRIBUTE.md)

## Разработка

При разработке языка использовались основные лексические и фразеологические единицы диалекта "нормальных пацанов" позаимствованные из следующих словарей:

* [ГСР](http://lurkmore.to/ГСР)
* [Краткий словарь блатного жаргона](http://www.aferizm.ru/jargon/slovar.htm)

Так же были заимствованы крылатые слова и выражения в ходе наблюдения за некоторыми индивидами из представителей "чётких пацанов".

Толчком к разработке **YoptaScript** послужили события, произошедшие в середине 2016 года, в ходе которых журналистами Piter.TV была открыта такая категория программистов как [**гопники-программисты**](http://piter.tv/event/V_Peterburge_pyatero_studentov_kolledzha_grabili_shkol_nikov/).

Вся разработка и поиск ошибок ведётся в ветке **develop**!

Все крупные изменения и нововведения вы можете отследить в файле **[CHANGELOG.md](https://github.com/samgozman/YoptaScript/blob/master/doc/CHANGELOG.md)**.

## Предупреждения

YoptaScript не несёт в себе цели оскорбить кого-то или унизить. YoptaScript создан для облегчения обучению программированию определённых слоёв населения.

YoptaScript содержит **множество нецензурной лексики**.

## Использование

Скачайте [последнюю версию](https://github.com/samgozman/YoptaScript/tree/master/dist/yopta.js) языка и следуйте дальнейшим инструкциям.

### Подключение к странице

1. Положите файл `yopta.js` из папки `dist` в папку c вашим проектом. Или используйте CDN
2. Подключите файл к вашей `html` странице в самый конец перед закрытием тега `body`:

```html
<body>
    <script src="yopta.js"></script>
</body>
```

### Приступим к работе

Создайте внутри `body` элемент `script` с атрибутом `language="YoptaScript"` на странице до подключения основного скрипта

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

Начните писать код!

```html
<script language="YoptaScript">
    ксива.малява(" Оно работает ") нах
</script>
```

Полный пример можно посмотреть в файле [index.html](https://github.com/samgozman/YoptaScript/blob/master/demo/page/index.html) в директории `demo/page`. Конвертером из JavaScript в YoptaScript можно воспользоваться открыв файл [index.html](https://github.com/samgozman/YoptaScript/blob/master/demo/converter/index.html) в директории `demo/converter`.

### Подключение npm модуля yopta

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

### Создание переменных, функций и условий

YoptaScript

```yoptascript
гыы gop сука пиздишь нах
 йопта law() жЫ
  вилкойвглаз(gop однахуйня пиздишь) жЫ
   gop сука чётко нах
  есть иливжопураз жЫ
   gop внатуре чотко нах
  есть
есть
```

В переводе на JavaScript

```javascript
var gop = false;

function law() {
    if (gop == false) {
        gop = true;
    } else {
        gop = true;
    }
}
```

### Создание циклов

YoptaScript

```yoptascript
 потрещим(semki чоблясука чётко) жЫ
  //код
 есть
 го(i нах i хуёвей 100 нах i плюсуюНа) жЫ
  //код
 есть
 крч жЫ
  //код
 есть потрещим (xyz однахуйня "колонна")
```

В переводе на JavaScript

```javascript
while (semki != true) {
    //код
}
for (i; i < 100; i++) {
    //код
}
do {
    //код
} while (xyz == 'колонна');
```

### Работа с document и window

YoptaScript

```yoptascript
 ксива.малява("kek") нах
 гыы textnode сука ксива.намутитьМалявуГовнодскую("Water") нах
 ксива.вычислитьЛохаПоНомеру("myList") нах

 ебало.шухер("Привет, йопта") нах
```

В переводе на JavaScript

```javascript
document.write('kek');
var textnode = document.createTextNode('Water');
document.getElementById('myList');

window.alert('Привет, йопта');
```

### Работа с Math

YoptaScript

```yoptascript
Ботан.гопосинос(0 * Очконавт.ПИЗДЕЦ / 180) нах
Ботан.бабкиГони(300) нах
Ботан.гопень(9) нах
```

В переводе на JavaScript

```javascript
Math.cos((0 * Math.PI) / 180);
Math.floor(300);
Math.pow(9);
```

### Работа с логическими операторами

YoptaScript

```yoptascript
result сука a иличо b нах
result сука a ичо b нах
вилкойвглаз (x пизже 0 иличо y хуёвей 10) жЫ
    шухер( 'Ыгыыг' ) нах
    a внатуре пиздишь нах
есть
```

В переводе на JavaScript

```javascript
result = a || b;
result = a && b;
if (x > 0 || y < 10) {
    alert('Ыгыыг');
    a = false;
}
```

## Поддержка разных диалектов

YoptaScript отлично работает с разными локальными диалектами!

Например:

* `трулио` -> `чётко` -> `четко` -> `чотко` -> **true**
* `нетрулио` -> `пиздишь` -> `нечётко` -> `нечетко` -> `нечотко` -> **false**
* `эквалио` -> `ровно` -> `однахуйня` -> `типа` -> **==**

И другие

Все методы и свойства, содержащие букву `ё` можно писать без `ё`, используя `е`. Если в середине слова может присутствовать буква `ё`, то можно писать вместо неё букву `о`. Yopta поймёт.
