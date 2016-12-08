[![yoptascript v0.2.6](https://img.shields.io/badge/download-v0.2.6-brightgreen.svg?style=flat)](https://github.com/samgozman/YoptaScript/archive/v0.2.6.zip)
[![contributions welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat)](https://github.com/samgozman/YoptaScript/issues)
[![gitter yopta chat](https://img.shields.io/gitter/room/nwjs/nw.js.svg)](https://gitter.im/YoptaScript/Lobby?utm_source=share-link&utm_medium=link&utm_campaign=share-link)
[![contributions welcome](https://img.shields.io/packagist/l/doctrine/orm.svg?style=flat)](https://github.com/samgozman/YoptaScript/blob/master/LICENSE.txt)

#YoptaScript
[YoptaScript](http://yopta.space/) это первый в мире скриптовый язык программирования для гопников и реальных пацанов, транслируемый в чистый JavaScript. YoptaScript позволит "чётким пацанам" быстро влиться в ряды программистов и процесс разработки.

Язык находится **в процессе глубокой разработки**. Рады любой помощи в поиске багов и всем, кто готов помочь нам продолжить начатое!

## Разработка
При разработке языка использовались основные лексические и фразеологические единицы диалекта "нормальных пацанов" позаимствованные из следующих словарей:

* [ГСР](http://lurkmore.to/ГСР)
* [Краткий словарь блатного жаргона](http://www.aferizm.ru/jargon/slovar.htm)

Так же были заимствованы крылатые слова и выражения в ходе наблюдения за некоторыми индивидами из представителей "чётких пацанов".

Толчком к разработке **YoptaScript** послужили события, произошедшие в середине 2016 года, в ходе которых журналистами Piter.TV была открыта такая категория программистов как [**гопники-программисты**](http://piter.tv/event/V_Peterburge_pyatero_studentov_kolledzha_grabili_shkol_nikov/).

Вся разработка и поиск ошибок ведётся в ветке **develop**!

Все крупные изменения и нововведения вы можете отследить в файле **[CHANGELOG.md](https://github.com/samgozman/YoptaScript/blob/master/CHANGELOG.md)**.

## Предупреждения
YoptaScript не несёт в себе цели оскорбить кого-то или унизить. YoptaScript создан для облегчения обучению программированию определённых слоёв населения.

YoptaScript содержит **множество нецензурной лексики**.

## Использование
Скачайте [последнюю версию](https://github.com/samgozman/YoptaScript/releases) языка и следуйте дальнейшим инструкциям:
### Подключение к странице
1. Положите файл `yoptascript.js` из папки `src` в папку c вашим проектом
2. Подключите файл к вашей `html`  странице в самый конец перед закрытием тега `body`:

		<body>
			...
			...
			<script src="yoptascript.js"></script>
		</body>

### Приступим к работе
1. Создайте внутри `body` элемент `script` с атрибутом  `language="YoptaScript"` на странице до подключения основного скрипта

		<body>
			...
			...
			<script language="YoptaScript">
				 //ваш йоптакод
			</script>
			<script src="yoptascript.js"></script>
		</body>
2.  Начните писать код!

		<script language="YoptaScript">
			  ксива.малява(" Оно работает ") нах
		</script>

Полный пример можно посмотреть в файле [index.html](https://github.com/samgozman/YoptaScript/blob/master/demo/index.html) в директории `demo`. Конвертером из JavaScript в YoptaScript можно воспользоваться открыв файл [index.html](https://github.com/samgozman/YoptaScript/blob/master/demo/converter/index.html) в директории `demo/converter`.

## Проекты на YoptaScript
### Игра Ping-Pong
Один из разработчиков языка YoptaScript написал игру Ping-Pong на чистом YoptaScript с использованием canvas!

**[Pong-YoptaScript](https://github.com/grushan/Pong-YoptaScript)**

## Примеры
### Создание переменных, функций и условий
YoptaScript

	гыы gop сука нетрулио нах
	
	йопта law() {
		вилкойвглаз(gop эквалио нетрулио) {
			gop сука трулио нах
		}  иливжопураз {
			gop сука трулио нах
		}
	}
	
В переводе на JavaScript

	var gop = false;
	
	function law() {
		if(gop == false) {
			gop = true;
		}  else {
			gop = true;
		}
	}

### Создание циклов
YoptaScript

	потрещим(semki чоблясука трулио) {
		//код
	}
	го(i нах i хуёвей 100 нах i сука i плюсуюНа) {
		//код
	}
	крч {
		//код
	} потрещим (xyz эквалио "колонна")
	
В переводе на JavaScript

	while(semki != true) {
		//код
	}
	for(i; i < 100; i = i ++) {
		//код
	}
	do {
		//код
	} while (xyz == "колонна")


### Работа с document и window
YoptaScript

	ксива.малява("kek") нах
	гыы textnode сука ксива.намутитьМалявуГовнодскую("Water") нах
	ксива.вычислитьЛохаПоНомеру("myList") нах
	
	ебало.шухер("Привет, йопта") нах
	
В переводе на JavaScript

	document.write("kek");
	var textnode = document.createTextNode("Water");
	document.getElementById("myList");
	
	window.alert("Привет, йопта");

### Работа с Math
YoptaScript

	Гопец.гопосинос(0 * Гопец.ПИЗДЕЦ / 180) нах 
	Гопец.бабкиГони(300) нах	
	Гопец.гопень(9) нах 
	
В переводе на JavaScript

	Math.cos(0 * Math.PI / 180); 
	Math.floor(300);
	Math.pow(9); 
	
### Работа с логическими операторами
YoptaScript

	result сука a иличо b нах
	result сука a ичо b нах
	вилкойвглаз (x пизже 0 иличо y хуёвей 10) {
  		шухер( 'Ыгыыг' ) нах
  		a сука нетрулио нах
	} 
	
В переводе на JavaScript

	result = a || b;
	result = a && b;
	if (x > 0 || y < 10) {
  		alert( 'Ыгыыг' );
  		a = false;
	}
	

## Известные проблемы

* Скрипт транслирует всё что между двойных кавычек
* Пока нет альтернативы для фигурных и квадратных скобок, что усложняет работу
* Игнорирует комментарии и тоже переводит их содержимое
