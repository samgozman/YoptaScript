var jsOnChange = document.getElementById('jstoyopta').addEventListener('keyup', converter, false);
String.prototype.replaceAll = function (search, replacement) {
    var target = this;
    var re = new RegExp(search, 'g');
    return this.replace(re, replacement);
};

function converter() {
    var jstoyopta = document.getElementById('jstoyopta').value;
    // str.match(regexp)
    var i = 0;
    var yoptaNew = jstoyopta;
    //Весь сок тут
    for (i = 0; i < dictionary.length; i++) {
        yoptaNew = yoptaNew.replaceAll('' + dictionary[i][0] + '', dictionary[i][1]);
    }
    document.getElementById('yopta').value = yoptaNew;
}
