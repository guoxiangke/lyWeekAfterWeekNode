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

// http://media.haomuren.org/message/bibleteaching/2013Ge01-01.mp3
// http://media.haomuren.org/message/bibleteaching/2013Ge02-01.mp3
// http://media.haomuren.org/Message/BibleTeaching/2013BibChr04-10.mp3
// http://media.haomuren.org/Message/BibleTeaching/2013BibChr05-08.mp3
// http://media.haomuren.org/Message/BibleTeaching/2013BibChr06-12.mp3
// http://media.haomuren.org/message/BibleTeaching/2014BibChr07-14.mp3
// http://media.haomuren.org/message/BibleTeaching/2014BibChr08-14.mp3
// http://media.haomuren.org/message/BibleTeaching/2014BibChr09-10.mp3
// http://media.haomuren.org/message/BibleTeaching/2014BibChr10-09.mp3
// http://media.haomuren.org/message/BibleTeaching/2014BibChr11-09.mp3
// http://media.haomuren.org/message/BibleTeaching/2014BibChr12-10.mp3
// http://media.haomuren.org/Message/BibleTeaching/2012Dt01-10.mp3
// http://media.haomuren.org/Message/BibleTeaching/2012Dt02-10.mp3
// http://media.haomuren.org/Message/BibleTeaching/2012Dt03-10.mp3
// http://media.haomuren.org/Message/BibleTeaching/2015Jdg01-10.mp3
// http://media.haomuren.org/Message/BibleTeaching/2015Jdg02-10.mp3
// http://media.haomuren.org/message/BibleTeaching/2013EzrNeEst01-10.mp3
// http://media.haomuren.org/Message/BibleTeaching/2012Pr01-12.mp3
// http://media.haomuren.org/message/bibleteaching/2012Pr02-12.mp3
// http://media.haomuren.org/message/bibleteaching/2012Pr03-12.mp3
// http://media.haomuren.org/message/bibleteaching/2013Pr04-12.mp3
// http://media.haomuren.org/message/bibleteaching/2013Pr05-13.mp3
// http://media.haomuren.org/Message/BibleTeaching/2015Ecc-14.mp3
// http: //media.haomuren.org/message/BibleTeaching/2014Ecc01-12.mp3
// http://media.haomuren.org/message/Bibleteaching/2014Ss01-14.mp3
// http://www.haomuren.org/Upload/NewsAttach/070829P.mp3
// http://www.haomuren.org/Upload/NewsAttach/070828P.mp3
// http://www.haomuren.org/Upload/NewsAttach/070811P.mp3
// http://www.haomuren.org/Upload/NewsAttach/071128P.mp3
// http://www.haomuren.org/Upload/NewsAttach/071110P.mp3

// http://media.haomuren.org/Message/BibleTeaching/080417PIsa3-24.mp3
var audios = [];


for (var i = 1; i < 20; i++) {
    var audio = {};
    audio.duration = 1650;
    audio.size = "5M";
    audio.path = "http://www.haomuren.org/Upload/NewsAttach/0711" + (10 + i - 1) + "P.mp3";
    audio.id = 4030 * 1000000 + i;
    audio.albumId = 4030;
    audio.albumName = "以赛亚书系列(二)";
    audio.albumtitle = "以赛亚书系列(二)" + "(" + (i) + ")";

    console.log(audio);
    audios.push(audio);

}


fs.writeFile("./ysys_2__songs.json", JSON.stringify(audios, null, '\t'));




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