const
  dictionary = require('./dictionary/main');

module.exports = {
  compile,
  dictionary,
  yoptify,
};

function escapeRegExp(str) {
  str = str.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');

  if (/^\w+$/.test(str)) {
    str = "\\b" + str + "\\b";
  }

  return str;
}

function yoptReplaceAll(str, search, replacement) {
  var re = new RegExp(escapeRegExp(search), 'g');
  return str.replace(re, replacement);
}

function compile(yoptaText) {
  dictionary.sort(function (a, b) {
    return b[1].length - a[1].length;
  }).forEach(function (dictionary) {
    yoptaText = yoptReplaceAll(yoptaText, dictionary[1], dictionary[0]);
  });

  return yoptaText;
}

function yoptify(jscode) {
  dictionary
    .sort(function (a, b) {
      return b[0].length - a[0].length;
    })
    .forEach(function (dictionary) {
      jscode = yoptReplaceAll(jscode, dictionary[0], dictionary[1]);
    });

  return jscode;
}
