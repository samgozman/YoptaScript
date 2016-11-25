//Выполнение кода
var input = document.getElementById('jstoyopta');
var output = document.getElementById('outputField');
input.focus();

//Не использовать eval() на сайте! (возможность XSS)
function evalInput() {
    if (input.value != window.lastInput) {
        var theResult, evalSucceeded;
        try {
            theResult = eval(input.value);
            evalSucceeded = true;
        }
        catch (e) {
            output.innerHTML = e;
        }
        if (evalSucceeded) {
            // TODO: Обработать вывод ошибок (перевод)
            output.innerHTML = (theResult + "").replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/\r\n|\r|\n/g, '<br>');
        }
        window.lastInput = input.value;
    }
}
input.addEventListener('blur', evalInput, false);
window.repeatTimer = window.setInterval(evalInput, 500);
evalInput();