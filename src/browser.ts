import compile from './core';

//Получаем йопту из скрипта
document.querySelectorAll('[language="YoptaScript"]').forEach(yoptaToJs);
document.querySelectorAll('[type="text/x-yoptascript"]').forEach(yoptaToJs);

// window.yopt = core;

function yoptaToJs(scriptNode: Element) {
  if (scriptNode.parentNode !== null) {
    //Получаем йопту из скрипта
    const yoptaText: string = scriptNode.textContent || getTxtFromSrc(scriptNode);
    //удаляем старый скрипт
    scriptNode.parentNode.removeChild(scriptNode);
    //создаём обработанный скрипт с блекджеком и шлюхами
    addScriptNode(compile(yoptaText, 'ys'));
  }
}

function getTxtFromSrc(node: Element) {
  //Пошли искать сорцы
  const src = node.getAttribute('src');
  let response = '';
  if (src !== null && src.length) {
    const xml = new XMLHttpRequest();
    xml.open('GET', src, false);
    xml.send(null);
    if (xml.status == 200 || xml.status == 0) response = xml.responseText;
  }
  return response;
}

function addScriptNode(compiled: string) {
  const js_script = document.createElement('script');
  js_script.innerHTML = compiled;
  document.body.appendChild(js_script);
}