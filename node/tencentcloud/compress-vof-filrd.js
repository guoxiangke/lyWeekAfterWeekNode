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


var names = JSON.parse(fs.readFileSync('./vof2017.json', 'utf8'));
names.forEach(function(name, indexId) {


    console.log('downloading ' + name.path);
    var data = require('child_process').execFileSync('curl', ['--silent', '-L', name.path]);
    // var data = downloadFileSync(audio.downUrl)
    var lastIndex = name.path.lastIndexOf('/');
    var fileName = name.path.substring(lastIndex + 1);

    mkdirp.sync('vof2017');

    fs.writeFileSync('vof2017/' + fileName, data);


});