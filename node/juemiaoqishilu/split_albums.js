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

var names = JSON.parse(fs.readFileSync('./ydzj_Unique.json', 'utf8'));
names.forEach(function(name, indexId) {
    if (indexId < 95) {
        name.id = 6293 * 1000000 + indexId + 1;
        name.albumId = 6293;
        name.albumName = "絕妙啟示錄-張得仁-合集一";
        name.albumtitle = "絕妙啟示錄-張得仁-合集一" + "(" + (indexId + 1) + ")";
        audios1.push(name);
        fs.writeFile("./ydzj_Unique_1.json", JSON.stringify(audios1, null, '\t'));
    } else if (indexId < 95 * 2) {
        name.id = 6294 * 1000000 + (indexId - 95) + 1;
        name.albumId = 6294;
        name.albumName = "絕妙啟示錄-張得仁-合集二";
        name.albumtitle = "絕妙啟示錄-張得仁-合集二" + "(" + ((indexId - 95) + 1) + ")";
        audios2.push(name);
        fs.writeFile("./ydzj_Unique_2.json", JSON.stringify(audios2, null, '\t'));
    } else if (indexId < 95 * 3) {
        name.id = 6295 * 1000000 + (indexId - 95 * 2) + 1;
        name.albumId = 6295;
        name.albumName = "絕妙啟示錄-張得仁-合集三";
        name.albumtitle = "絕妙啟示錄-張得仁-合集三" + "(" + ((indexId - 95 * 2) + 1) + ")";
        audios3.push(name);
        fs.writeFile("./ydzj_Unique_3.json", JSON.stringify(audios3, null, '\t'));
    } else if (indexId < 95 * 4) {
        name.id = 6296 * 1000000 + (indexId - 95 * 3) + 1;
        name.albumId = 6296;
        name.albumName = "絕妙啟示錄-張得仁-合集四";
        name.albumtitle = "絕妙啟示錄-張得仁-合集四" + "(" + ((indexId - 95 * 3) + 1) + ")";
        audios4.push(name);
        fs.writeFile("./ydzj_Unique_4.json", JSON.stringify(audios4, null, '\t'));
    } else if (indexId < 95 * 5) {
        name.id = 6297 * 1000000 + (indexId - 95 * 4) + 1;
        name.albumId = 6297;
        name.albumName = "絕妙啟示錄-張得仁-合集五";
        name.albumtitle = "絕妙啟示錄-張得仁-合集五" + "(" + ((indexId - 95 * 4) + 1) + ")";
        audios5.push(name);
        fs.writeFile("./ydzj_Unique_5.json", JSON.stringify(audios5, null, '\t'));
    } else if (indexId < 95 * 6) {
        name.id = 6298 * 1000000 + (indexId - 95 * 5) + 1;
        name.albumId = 6298;
        name.albumName = "絕妙啟示錄-張得仁-合集六";
        name.albumtitle = "絕妙啟示錄-張得仁-合集六" + "(" + ((indexId - 95 * 5) + 1) + ")";
        audios6.push(name);
        fs.writeFile("./ydzj_Unique_6.json", JSON.stringify(audios6, null, '\t'));
    } else if (indexId < 95 * 7) {
        name.id = 6299 * 1000000 + (indexId - 95 * 6) + 1;
        name.albumId = 6299;
        name.albumName = "絕妙啟示錄-張得仁-合集七";
        name.albumtitle = "絕妙啟示錄-張得仁-合集七" + "(" + ((indexId - 95 * 6) + 1) + ")";
        audios7.push(name);
        fs.writeFile("./ydzj_Unique_7.json", JSON.stringify(audios7, null, '\t'));
    } else if (indexId < 95 * 8) {
        name.id = 6300 * 1000000 + (indexId - 95 * 7) + 1;
        name.albumId = 6300;
        name.albumName = "絕妙啟示錄-張得仁-合集八";
        name.albumtitle = "絕妙啟示錄-張得仁-合集八" + "(" + ((indexId - 95 * 7) + 1) + ")";
        audios8.push(name);
        fs.writeFile("./ydzj_Unique_8.json", JSON.stringify(audios8, null, '\t'));
    } else if (indexId < 95 * 9) {
        name.id = 6301 * 1000000 + (indexId - 95 * 8) + 1;
        name.albumId = 6301;
        name.albumName = "絕妙啟示錄-張得仁-合集九";
        name.albumtitle = "絕妙啟示錄-張得仁-合集九" + "(" + ((indexId - 95 * 8) + 1) + ")";
        audios9.push(name);
        fs.writeFile("./ydzj_Unique_9.json", JSON.stringify(audios9, null, '\t'));
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