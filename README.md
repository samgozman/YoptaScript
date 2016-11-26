[![yoptascript v0.1.2](https://img.shields.io/badge/download-v0.1.2-brightgreen.svg?style=flat)](https://github.com/samgozman/YoptaScript/archive/v0.1.2.zip)
[![contributions welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat)](https://github.com/samgozman/YoptaScript/issues)
[![contributions welcome](https://img.shields.io/packagist/l/doctrine/orm.svg?style=flat)](https://github.com/samgozman/YoptaScript/blob/master/LICENSE.txt)

#YoptaScript
[YoptaScript](http://yopta.space/) это первый в мире скриптовый язык программирования для гопников и реальных пацанов, транслируемый в чистый JavaScript. YoptaScript позволит "чётким пацанам" быстро влиться в ряды программистов и процесс разработки.

Язык находится **в процессе глубокой разработки**. Рады любой помощи в поиске багов и всем, кто готов помочь нам продолжить начатое!

## Разработка
При разработке языка использовались основные лексические и фразеологические единицы диалекта "нормальных пацанов" позаимствованные из следующих словарей:

* [ГСР](http://lurkmore.to/ГСР)
* [Краткий словарь блатного жаргона](http://www.aferizm.ru/jargon/slovar.htm)

Так же были заимствованы крылатые слова и выражения в ходе наблюдения за некоторыми индивидами из представителей "чётких пацанов".

Вся разработка и поиск ошибок ведётся в ветке **develop**!

## Возможности YoptaScript
На данном этапе разработки язык может только переводить JavaScript в YoptaScript. 

Это лишь начальные наброски будущего языка, до стабильного релиза как и до рефакторинга ещё далеко.

Все крупные изменения и нововведения вы можете отследить в файле **[CHANGELOG.md](https://github.com/samgozman/YoptaScript/blob/master/CHANGELOG.md)**.

## Предупреждения
YoptaScript не несёт в себе цели оскорбить кого-то или унизить. YoptaScript создан для облегчения обучению программированию определённых слоёв населения.

YoptaScript содержит **множество нецензурной лексики**.

## Использование
Скачайте проект, откройте в браузере файл converter/huindex.html.
В первое текстовое поле вставьте готовый кусок кода на JavaScript и наслаждайтесь синтаксисом нового языка!

## Примеры
### Создание переменных, функций и условий
JavaScript

	var gop = false;
	
	void function law() {
		if(gop == false) {
			gop = true;
		}  else {
			gop = true;
		}
	}

YoptaScript

	гыы gop сука нетрулио нах
	
	куку йопта law() {
		вилкойвглаз(gop эквалио нетрулио) {
			gop сука трулио нах
		}  иливжопураз {
			gop сука трулио нах
		}
	}

### Создание циклов
JavaScript

	while(semki != true) {
		//код
	}
	for(i; i < 100; i = i + 1) {
		//код
	}
	do {
		//код
	} while (xyz == "колонна")

YoptaScript

	потрещим(semki чоблясука трулио) {
		//код
	}
	го(i нах i хуёвей 100 нах i сука i + 1) {
		//код
	}
	крч {
		//код
	} потрещим (xyz эквалио "колонна")


### Работа с document и window
JavaScript

	document.write("kek");
	var textnode = document.createTextNode("Water");
	document.getElementById("myList");
	
	window.alert("Привет, йопта");

YoptaScript

	ксива.малява("kek") нах
	гыы textnode сука ксива.намутитьМалявуГовнодскую("Water") нах
	ксива.вычислитьЛохаПоНомеру("myList") нах
	
	ебало.шухер("Привет, йопта") нах

## Планы разработки

* Создание конвертёра из YoptaScript в JS
* Создание библиотеки для работы YoptaScript на любом сайте/проекте
* Подсветка синтаксиса