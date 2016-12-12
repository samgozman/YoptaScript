#!/usr/bin/env node

/*!
 * YoptaScript v0.3 (https://yopta.space)
 * Copyright (c) 2016 Yopta.Space project and Contributors
 * Licensed under the MIT license
 */

var yopt = require('./core');
var fs = require('fs');
var writeLine = function (line) {
    return process.stdout.write(line + '\n');
};
if (process.argv.length < 3) {
    writeLine('Missing filename argument.');
    return writeLine('Usage: YoptaScript filename');
}
var filepath = process.argv[2];
fs.readFile(filepath, 'utf8', function (err, content) {
    if (err) {
        return writeLine(err);
    }
    var yoptaText = yopt(content);
    writeLine(yoptaText);
});