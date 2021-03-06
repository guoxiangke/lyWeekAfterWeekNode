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
// http://media.haomuren.org/Message/BibleTeaching/080302PIsa3-01.mp3
// http://media.haomuren.org/Message/BibleTeaching/081002PIsa4-20.mp3
// http://media.haomuren.org/Message/BibleTeaching/080825PIsa4-01.mp3

// http://media.haomuren.org/Message/BibleTeaching/090323PIsa05-18.mp3
// http://media.haomuren.org/Message/BibleTeaching/090217PIsa05-01.mp3

// http://media.haomuren.org/Message/BibleTeaching/090719PIsa06-23.mp3
// http://media.haomuren.org/Message/BibleTeaching/090605PIsa06-01.mp3

// http://media.haomuren.org/Message/BibleTeaching/100105PIsa07-24.mp3
// http://media.haomuren.org/Message/BibleTeaching/091005PIsa07-01.mp3
// http://media.haomuren.org/Message/BibleTeaching/091009PIsa07-02.mp3
// http://media.haomuren.org/Message/BibleTeaching/091013PIsa07-03.mp3

// http://media.haomuren.org/Message/BibleTeaching/100627PIsa08-28.mp3
// http://media.haomuren.org/Message/BibleTeaching/100624PIsa08-27.mp3

// http://media.haomuren.org/Message/BibleTeaching/110629PIsa09-21.mp3

// http://media.haomuren.org/Message/BibleTeaching/2011Isa10-16.mp3

// http://media.haomuren.org/Message/BibleTeaching/2011Isa11-11.mp3
// http://media.haomuren.org/Message/BibleTeaching/2011Isa12-12.mp3

// http://media.haomuren.org/Message/BibleTeaching/2012Isa13-13.mp3

// http://media.haomuren.org/message/bibleteaching/2013Isa14-20.mp3
// http://media.haomuren.org/message/bibleteaching/2012Jer01-10.mp3
// http://media.haomuren.org/Message/BibleTeaching/2012Jer02-10.mp3

// http://media.haomuren.org/Message/BibleTeaching/2012Jer03-10.mp3

// http://media.haomuren.org/Message/BibleTeaching/2016eze01-10.mp3
// http://media.haomuren.org/Message/BibleTeaching/2017eze02-10.mp3
// http://media.haomuren.org/Message/BibleTeaching/2017eze03-10.mp3
// http://media.haomuren.org/Message/BibleTeaching/2017eze04-10.mp3
// http://media.haomuren.org/Message/BibleTeaching/2017eze05-10.mp3
// http://media.haomuren.org/Message/BibleTeaching/2017eze06-10.mp3
// http://media.haomuren.org/Message/BibleTeaching/2017eze07-08.mp3

// http://media.haomuren.org/Message/BibleTeaching/2016Apo16_Dan.mp3
// http://media.haomuren.org/Message/BibleTeaching/2016Apo15_Dan.mp3
// http://media.haomuren.org/Message/BibleTeaching/2016Apo10_Rev.mp3
// http://media.haomuren.org/Message/BibleTeaching/2016Apo09_Rev.mp3

// http://www.w4j.org/m/HaoMuRen/Upload/NewsAttach/070707P.mp3
// http://www.w4j.org/m/HaoMuRen/Upload/NewsAttach/070616P.mp3

// http://media.haomuren.org/Message/BibleTeaching/090215PMin02-09.mp3

// http://media.haomuren.org/message/bibleteaching/2012Hos01-10.mp3
// http://media.haomuren.org/message/bibleteaching/2013Hos02-10.mp3
// http://media.haomuren.org/message/bibleteaching/2013Hos03-10.mp3

// http://media.haomuren.org/Message/BibleTeaching/2012Mt01-12.mp3
// http://media.haomuren.org/Message/BibleTeaching/2012MT02-12.mp3
// http://media.haomuren.org/Message/BibleTeaching/2012Mt03-12.mp3
// http://media.haomuren.org/Message/BibleTeaching/2012Mt04-12.mp3
// http://media.haomuren.org/Message/BibleTeaching/2012Mt05-12.mp3
// http://media.haomuren.org/message/bibleteaching/2012Mt06-12.mp3
// http://media.haomuren.org/message/bibleteaching/2013Mt07-12.mp3
// http://www.haomuren.org/Upload/NewsAttach/071014P.mp3
// http://www.haomuren.org/Upload/NewsAttach/071212P.mp3
// http://media.haomuren.org/Message/BibleTeaching/080523Pmark3-18.mp3
// http://media.haomuren.org/Message/BibleTeaching/090104PMark4-22.mp3
// http://media.haomuren.org/Message/BibleTeaching/090506PMK05-22.mp3

// http://media.haomuren.org/message/BibleTeaching/2014Luke01-12.mp3
// http://media.haomuren.org/message/BibleTeaching/2014Luke02-12.mp3
// http://media.haomuren.org/message/BibleTeaching/2014Luke03-12.mp3
// http://media.haomuren.org/message/BibleTeaching/2014Luke04-12.mp3
// http://media.haomuren.org/message/BibleTeaching/2014Luke05-12.mp3
// http://media.haomuren.org/message/BibleTeaching/2014Luke06-12.mp3
var audios = [];


for (var i = 1; i < 13; i++) {
    var audio = {};
    audio.duration = 1650;
    audio.size = "5M";

    if (i < 10) {
        audio.path = "http://media.haomuren.org/Message/BibleTeaching/2014Luke06-0" + i + ".mp3";

    } else {
        audio.path = "http://media.haomuren.org/Message/BibleTeaching/2014Luke06-" + i + ".mp3";

    }
    audio.id = 4076 * 1000000 + i;
    audio.albumId = 4076;
    audio.albumName = "路加福音系列(六)";
    audio.albumtitle = "路加福音系列(六)" + "(" + (i) + ")";

    console.log(audio);
    audios.push(audio);

}


fs.writeFile("./luke_6_songs.json", JSON.stringify(audios, null, '\t'));




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