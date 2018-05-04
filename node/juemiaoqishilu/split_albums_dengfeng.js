const fs = require('fs');
const Xray = require('x-ray');
const x = Xray();
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


var audios1 = [];
var audios2 = [];
var audios3 = [];
var audios4 = [];
var audios5 = [];
var audios6 = [];
var audios7 = [];
var audios8 = [];
var audios9 = [];


// "path": "http://media.feearadio.net/downloads/others/Febc/unique/01.mp3",
// "title": "001 走遠路看美景",
// "duration": 300,
// "size": "2.5M",
// "albumName": "絕妙啟示錄-張得仁",
// "id": 6043000001,
// "albumId": 6043,
// "albumtitle": "絕妙啟示錄-張得仁(1)"

var albumCount = 99;

var names = JSON.parse(fs.readFileSync('./ydzj_dengfeng.json', 'utf8'));
names.forEach(function(name, indexId) {
    if (indexId < albumCount) {

        // {
        //     "stared": false,
        //     "duration": 900,
        //     "size": "7M",
        //     "id": 6303,
        //     "name": "登峰造極-袁擇善、陳恩惠-合集一",
        //     "description": "",
        //     "songCount": 99,
        //     "albumCategoryId": 3,
        //     "shortName": "ydzj_dengfeng_1"
        //   },

        name.id = 6303 * 1000000 + indexId + 1;
        name.albumId = 6303;
        name.albumName = "登峰造極-袁擇善、陳恩惠-合集一";
        name.albumtitle = "登峰造極-袁擇善、陳恩惠-合集一" + "(" + (indexId + 1) + ")";
        audios1.push(name);
        fs.writeFile("./ydzj_dengfeng_1.json", JSON.stringify(audios1, null, '\t'));
    } else if (indexId < albumCount * 2) {
        name.id = 6304 * 1000000 + (indexId - albumCount) + 1;
        name.albumId = 6304;
        name.albumName = "登峰造極-袁擇善、陳恩惠-合集二";
        name.albumtitle = "登峰造極-袁擇善、陳恩惠-合集二" + "(" + ((indexId - albumCount) + 1) + ")";
        audios2.push(name);
        fs.writeFile("./ydzj_dengfeng_2.json", JSON.stringify(audios2, null, '\t'));
    }

});





// console.log(dates);



// var _getAllFilesFromFolder = function(dir) {

//     var filesystem = require("fs");
//     var results = [];

//     filesystem.readdirSync(dir).forEach(function(file) {

//         results.push(file);

//     });

//     return results;

// };

// const files = _getAllFilesFromFolder(__dirname + "/cw2015");
// console.log(files);
// fs.writeFile("./cw2015_names.json", JSON.stringify(files, null, '\t'));

// const audios = [];

// files.forEach(function(file, arrayIndex) {
//     console.log(file);

//     // const audio = {};

//     // fs.rename(__dirname + "/files/" + file, __dirname + "/files/" + 'sundazhong0' + (arrayIndex + 1) + '.mp3', function(err) {
//     //     if (err) console.log('ERROR: ' + err);
//     // });

//     // audio.title = file.substring(2, file.indexOf('.'));
//     // audio.path = "https://rawcdn.githack.com/quiet324/LiangYouAlbums3/170702/sundazhong/sundazhong0" + (arrayIndex + 1) + '.mp3';
//     // audio.duration = 2400;
//     // audio.size = "40M";
//     // audio.albumName = "《与神同行》孙大中";
//     // audio.albumId = 199;
//     // audio.id = 199888180 + arrayIndex;
//     // // audio.id = _.last(results).id + 1 + arrayIndex;

//     // audio.albumtitle = "《与神同行》孙大中(" + (arrayIndex + 1) + ")";

//     // audios.push(audio);

// });


// // fs.writeFile("./sundazhong.json", JSON.stringify(audios, null, '\t'));


// // fs.writeFile("./voschildrenbible.json", JSON.stringify(results, null, '\t'));