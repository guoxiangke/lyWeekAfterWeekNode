const Xray = require('x-ray');
const x = Xray();
const fs = require('fs');
const download = require('download');
const _ = require('lodash');


const url = 'http://lydata.febcmedia.net/2013/06/01/?arcf=cat:154';

// http://media.febcchinese.org/streaming/bv/bv130101.mp3

var month_7 = JSON.parse(fs.readFileSync('./kuangyemana_2013_7.json', 'utf8'));
var month_8 = JSON.parse(fs.readFileSync('./kuangyemana_2013_8.json', 'utf8'));
var month_9 = JSON.parse(fs.readFileSync('./kuangyemana_2013_9.json', 'utf8'));

// month_4.concat(month_5);
// month_4.concat(month_6)
month_7.push(...month_8);
month_7.push(...month_9);



fs.writeFile("kuangyemana_2013_autumn.json", JSON.stringify(month_7, null, '\t'));