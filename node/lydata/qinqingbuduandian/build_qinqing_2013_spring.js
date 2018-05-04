const Xray = require('x-ray');
const x = Xray();
const fs = require('fs');
const download = require('download');
const _ = require('lodash');


const url = 'http://lydata.febcmedia.net/2013/06/01/?arcf=cat:154';

// http://media.febcchinese.org/streaming/bv/bv130101.mp3

var month_4 = JSON.parse(fs.readFileSync('./qinqing_2013_1.json', 'utf8'));
var month_5 = JSON.parse(fs.readFileSync('./qinqing_2013_2.json', 'utf8'));
var month_6 = JSON.parse(fs.readFileSync('./qinqing_2013_3.json', 'utf8'));

// month_4.concat(month_5);
// month_4.concat(month_6)
month_4.push(...month_5);
month_4.push(...month_6);



fs.writeFile("kuangyemana_2013_spring.json", JSON.stringify(month_4, null, '\t'));