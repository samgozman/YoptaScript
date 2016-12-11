const
  core = require('./core');

//Получаем йопту из скрипта
document.querySelectorAll('[language="YoptaScript"]').forEach(yoptaToJs);

window.yopt = core;

function yoptaToJs(scriptNode) {
  //Получаем йопту из скрипта
  let yoptaText = scriptNode.textContent || getTxtFromSrc(scriptNode);

  //удаляем старый скрипт
  scriptNode.parentNode.removeChild(scriptNode);

  //создаём обработанный скрипт с блекджеком и шлюхами
  addScriptNode(core.compile(yoptaText));
}

function getTxtFromSrc(node) {
  //Пошли искать сорцы
  var src = yopta.getAttribute('src');
  if (src !== null && src.length) {
    var xml = new XMLHttpRequest();
    xml.open('GET', src, false);
    xml.send(null);
    if (xml.status == 200 || xml.status == 0)
      return xml.responseText;
  }
}

function addScriptNode(content) {
  let js_script = document.createElement("script");
  js_script.innerHTML = content;
  document.body.appendChild(js_script);
}
