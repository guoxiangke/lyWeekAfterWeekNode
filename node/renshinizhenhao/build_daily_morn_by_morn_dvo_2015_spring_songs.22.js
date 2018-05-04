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


var audios = [];

var names = JSON.parse(fs.readFileSync('./daily_morn_by_morn_Dvo_2015_spring_names_with_dates.json', 'utf8'));
names.forEach(function(name, indexId) {
    var audio = {};
    audio.duration = 300;
    audio.size = "1M";
    // http://media.haomuren.org/dev/lv/lv0101.mp3
    // http://media.haomuren.org/dev/lv2/lvii1212.mp3
    // http://media.haomuren.org/dev/lv3/lviii1212.mp3
    // http://media.haomuren.org/dev/Joy/JoyHrt1212.mp3
    // http://media.haomuren.org/dev/ev/evn1212.mp3
    // http://media.haomuren.org/devotion/siD_mc/Dec/dvo131212.mp3
    // /media.haomuren.org/devotion/siD_mc/Jan/dvo130101.mp3
    // http://media.haomuren.org/Devotion/DayByDay/Dec/Dvo141213.mp3
    // http://media.haomuren.org/Devotion/MornByMorn/Dec/Dvo151213.mp3


    audio.path = "http://media.haomuren.org/Devotion/MornByMorn/" + name.dateMonth + "/" + name.name;
    audio.id = 6385 * 1000000 + indexId + 1;
    audio.albumId = 6385;
    audio.albumName = "《清晨甘露》春季合集";
    audio.albumtitle = "《清晨甘露》春季合集" + "(" + (indexId + 1) + ")";
    audio.title = "清晨甘露-" + name.dateZH;

    console.log(audio);
    audios.push(audio);

});

fs.writeFile("./daily_morn_by_morn_dvo_2015_spring_songs.json", JSON.stringify(audios, null, '\t'));




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