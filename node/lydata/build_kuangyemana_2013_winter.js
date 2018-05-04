const Xray = require('x-ray');
const x = Xray();
const fs = require('fs');
const download = require('download');
const _ = require('lodash');


const url = 'http://lydata.febcmedia.net/2013/06/01/?arcf=cat:154';

// http://media.febcchinese.org/streaming/bv/bv130101.mp3

var month_10 = JSON.parse(fs.readFileSync('./kuangyemana_2013_10.json', 'utf8'));
var month_11 = JSON.parse(fs.readFileSync('./kuangyemana_2013_11.json', 'utf8'));
var month_12 = JSON.parse(fs.readFileSync('./kuangyemana_2013_12.json', 'utf8'));

// month_4.concat(month_5);
// month_4.concat(month_6)
month_10.push(...month_11);
month_10.push(...month_12);



fs.writeFile("kuangyemana_2013_winter.json", JSON.stringify(month_10, null, '\t'));