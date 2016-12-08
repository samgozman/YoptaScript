/*!
 * YoptaScript v0.2.6 (https://yopta.space)
 * Copyright (c) 2016 Yopta.Space project and Contributors
 * Licensed under the MIT license
 */

document.getElementById('jstoyopta').addEventListener('keyup', function(){converter(true);}, false);
document.getElementById('yopta').addEventListener('keyup', function(){converter(false);}, false);


function converter(lang) {
    if(lang) {
        //переводим в йопту
        var jstoyopta = document.getElementById('jstoyopta').value;
        document.getElementById('yopta').value = yopt.yoptify(jstoyopta);
    } else {
        //переводим из йопты
        var ystojs = document.getElementById('yopta').value;
        document.getElementById('jstoyopta').value = yopt.compile(ystojs);
    }
}
