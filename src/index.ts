import { compile } from './core';

// Экспорт для модуля
export { compile as yopta };

// Поиск скриптов при работе из браузера
if (typeof window !== 'undefined') {
    //Получаем йопту из скрипта
    document.querySelectorAll('[language="YoptaScript"]').forEach(yoptaToJs);
    document.querySelectorAll('[type="text/x-yoptascript"]').forEach(yoptaToJs);
}

async function yoptaToJs(scriptNode: Element) {
    if (scriptNode.parentNode !== null) {
        //Получаем йопту из скрипта
        const yoptaText: string =
            scriptNode.textContent || (await getTxtFromSrc(scriptNode));
        //удаляем старый скрипт
        scriptNode.parentNode.removeChild(scriptNode);
        //создаём обработанный скрипт с блекджеком и шлюхами
        addScriptNode(compile(yoptaText, 'ys'));
    }
}

async function getTxtFromSrc(node: Element) {
    //Пошли искать сорцы
    const src = node.getAttribute('src');
    let resp = '';
    if (src !== null && src.length) {
        const fe = await fetch(src, {
            method: 'GET',
        });
        resp = await fe.text();
    }
    return resp;
}

function addScriptNode(compiled: string) {
    const script = document.createElement('script');
    script.innerHTML = compiled;
    document.body.appendChild(script);
}
