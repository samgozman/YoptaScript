const jstoyopta = document.getElementById('jstoyopta');
const yopta = document.getElementById('yopta');

jstoyopta.addEventListener('keyup', function(){converter(true);}, false);
yopta.addEventListener('keyup', function(){converter(false);}, false);

jstoyopta.addEventListener('keydown', onKeyDown);
yopta.addEventListener('keydown', onKeyDown);


function onKeyDown(event) {
    if (event.key !== 'Tab') return;

    event.preventDefault();
    
    const textarea = event.target;
    
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;

    textarea.value = textarea.value.substring(0, start) + '    ' + textarea.value.substring(end);

    textarea.selectionStart = textarea.selectionEnd = start + 4;
}

function converter(lang) {
  if(lang) {
    //переводим в йопту
    yopta.value = window.yopta(jstoyopta.value, 'js');
  } else {
    //переводим из йопты
    jstoyopta.value = window.yopta(yopta.value, 'ys');
  }
}
