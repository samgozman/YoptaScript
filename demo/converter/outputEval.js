/*
 *  Скрипт для выполнения кода сразу при его написании.
 *  Не использовать на живом сайте (а то гопнуть могут)!
 *  Только для ознакомления на локальном компьютере.
 */
//Выполнение кода
const input = document.getElementById('jstoyopta');
const output = document.getElementById('outputField');
input.focus();

//Не использовать eval() на сайте! (возможность XSS)
function evalInput() {
    'use strict';
    if (input.value != window.lastInput) {
        let theResult;
        let evalSucceeded;
        try {
            theResult = eval(input.value);
            evalSucceeded = true;
        } catch (e) {
            output.innerHTML = e;
        }
        if (evalSucceeded) {
            // TODO: Обработать вывод ошибок (перевод)
            output.innerHTML = (theResult + '')
                .replace(/&/g, '&amp;')
                .replace(/</g, '&lt;')
                .replace(/>/g, '&gt;')
                .replace(/\r\n|\r|\n/g, '<br>');
        }
        window.lastInput = input.value;
    }
}
input.addEventListener('blur', evalInput, false);
window.repeatTimer = window.setInterval(evalInput, 500);
evalInput();
