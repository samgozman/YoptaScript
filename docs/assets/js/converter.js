document.getElementById('jstoyopta').addEventListener('keyup', function(){converter(true);}, false);
document.getElementById('yopta').addEventListener('keyup', function(){converter(false);}, false);


function converter(lang) {
  if(lang) {
    //переводим в йопту
    const jstoyopta = document.getElementById('jstoyopta').value;
    document.getElementById('yopta').value = window.yopta(jstoyopta, 'js');
  } else {
    //переводим из йопты
    const ystojs = document.getElementById('yopta').value;
    document.getElementById('jstoyopta').value = window.yopta(ystojs, 'ys');
  }
}
