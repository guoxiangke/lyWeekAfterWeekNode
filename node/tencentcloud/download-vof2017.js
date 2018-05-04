const Xray = require('x-ray');
const x = Xray();
const fs = require('fs');
const download = require('download');
var shell = require('shelljs');
var dateFormat = require('dateformat');
var async = require('async');
var downloadFileSync = require('download-file-sync');
var schedule = require('node-schedule');
var COS = require('cos-nodejs-sdk-v5');

var rule = new schedule.RecurrenceRule();
// rule.dayOfWeek = [0, new schedule.Range(4, 6)];
rule.hour = [0, 1, 6, 9, 14, 17, 21];
rule.minute = 5;




var mkdirp = require('mkdirp');


// var moment = require('moment');
var moment = require('moment-timezone');

moment.tz.setDefault('Asia/Shanghai');

var taskRunningTimes = 1;



var SecretId = JSON.parse(fs.readFileSync('.SecretId', 'utf8')).SecretId;
var SecretKey = JSON.parse(fs.readFileSync('.SecretKey', 'utf8')).SecretKey;


var cos = new COS({
    AppId: '1253798207',
    SecretId: SecretId,
    SecretKey: SecretKey
});



var names = JSON.parse(fs.readFileSync('./vof2017.json', 'utf8'));
names.forEach(function(name, indexId) {


    console.log('downloading ' + name.path);
    // var data = require('child_process').execFileSync('curl', ['--silent', '-L', name.path]);
    // var data = downloadFileSync(audio.downUrl)
    var lastIndex = name.path.lastIndexOf('/');
    var fileName = name.path.substring(lastIndex + 1);

    // mkdirp.sync('vof2017');

    // fs.writeFileSync('vof2017/' + fileName, data);


    if (fs.existsSync('vof2017/' + fileName)) {



        var sync = true;
        console.log(moment().format('MMMM Do YYYY, h:mm:ss a') + " upload... " + fileName);

        cos.sliceUploadFile({
            Bucket: 'febc', // 替换为你的Bucket名称
            Region: 'ap-chengdu', // 设置COS所在的区域，对应关系: 华南->cn-south, 华东->cn-east, 华北->cn-north
            Key: 'vof/' + fileName, // 设置上传到cos后的文件的名称
            FilePath: 'vof2017/' + fileName // 设置要上传的本地文件
        }, function(err, data) {
            sync = false;

            if (!err) {
                console.log(data);
            } else {
                console.log(err);
            }
        });

        while (sync) { require('deasync').sleep(2000); }
    }


});