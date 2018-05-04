const Xray = require('x-ray');
const x = Xray();
const fs = require('fs');
const download = require('download');
var shell = require('shelljs');
var dateFormat = require('dateformat');
var async = require('async');
var downloadFileSync = require('download-file-sync');
var schedule = require('node-schedule');

var rule = new schedule.RecurrenceRule();
// rule.dayOfWeek = [0, new schedule.Range(4, 6)];
rule.hour = [0, 1, 6, 9, 14, 17, 21];
rule.minute = 5;




var mkdirp = require('mkdirp');


// var moment = require('moment');
var moment = require('moment-timezone');

moment.tz.setDefault('Asia/Shanghai');

var taskRunningTimes = 1;


var names = JSON.parse(fs.readFileSync('./up_five_day.json', 'utf8'));
names.forEach(function(name, indexId) {



    name.title = name.title.substring(name.title.lastIndexOf('（'), name.title.lastIndexOf('20160'));
    name.id = 6395 * 1000000 + (indexId + 1);
    name.albumName = "《亲情不断电》五天令孩子大翻新";
    name.albumtitle = "《亲情不断电》五天令孩子大翻新" + "(" + (indexId + 1) + ")";
    name.path = name.path.replace("http://media.febcchinese.org/streaming/up/", "http://febc.soundofbible.xyz/ly/audio/up/");
    name.size = "7M";
});

fs.writeFileSync("./up_five_day_renamed.json", JSON.stringify(names, null, '\t'));