document.getElementById('jstoyopta').addEventListener('keyup', function(){converter(true);}, false);
document.getElementById('yopta').addEventListener('keyup', function(){converter(false);}, false);

function converter(lang) {
    if(lang) {
        //переводим в йопту
        var jstoyopta = document.getElementById('jstoyopta').value,
            i = 0,
            yoptaNew = jstoyopta;
        for (i = 0; i < dictionary.length; i++) {
            yoptaNew = yoptaNew.replaceAll('' + dictionary[i][0] + '', dictionary[i][1]);
        }
        document.getElementById('yopta').value = yoptaNew;
    } else {
        //переводим из йопты
        var ystojs = document.getElementById('yopta').value,
            i = 0, 
            jsNew = ystojs;
        for (i = 0; i < dictionary.length; i++) {
            jsNew = jsNew.replaceAll('' + dictionary[i][1] + '', dictionary[i][0]);
        }
        document.getElementById('jstoyopta').value = jsNew;
    }
}
