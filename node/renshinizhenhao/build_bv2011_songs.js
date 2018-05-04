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


var audios_spring = [];
var audios_summer = [];
var audios_autumn = [];
var audios_winter = [];

// "path": "http://media.febcchinese.org/streaming/bv/bv130929.mp3",

var names = JSON.parse(fs.readFileSync('./bv2011_names_with_dates.json', 'utf8'));
names.forEach(function(name, indexId) {
    var audio = {};
    audio.duration = 1760;
    audio.size = "14.1M";
    audio.path = "http://media.febcchinese.org/streaming/bv" + '/' + name.name;

    if (indexId < 90) {
        audio.id = 6192 * 1000000 + indexId + 1;
        audio.albumId = 6192;
        audio.albumName = "灵命日粮 2011年春季合集";
        audio.albumtitle = "灵命日粮 2011年春季合集" + "(" + (indexId + 1) + ")";
        audio.title = "灵命日粮-" + name.date;

        audios_spring.push(audio);

    } else if (indexId < (90 + 91)) {
        audio.id = 6193 * 1000000 + indexId + 1 - 90;
        audio.albumId = 6193;
        audio.albumName = "灵命日粮 2011年夏季合集";
        audio.albumtitle = "灵命日粮 2011年夏季合集" + "(" + (indexId + 1 - 90) + ")";
        audio.title = "灵命日粮-" + name.date;

        audios_summer.push(audio);

    } else if (indexId < (90 + 91 + 92)) {
        audio.id = 6194 * 1000000 + indexId + 1 - 90 - 91;
        audio.albumId = 6194;
        audio.albumName = "灵命日粮 2011年秋季合集";
        audio.albumtitle = "灵命日粮 2011年秋季合集" + "(" + (indexId + 1 - 90 - 91) + ")";
        audio.title = "灵命日粮-" + name.date;

        audios_autumn.push(audio);

    } else if (indexId < (90 + 91 + 92 + 92)) {
        audio.id = 6195 * 1000000 + indexId + 1 - 90 - 91 - 92;
        audio.albumId = 6195;
        audio.albumName = "灵命日粮 2011年冬季合集";
        audio.albumtitle = "灵命日粮 2011年冬季合集" + "(" + (indexId + 1 - 90 - 91 - 92) + ")";
        audio.title = "灵命日粮-" + name.date;

        audios_winter.push(audio);

    }


    console.log(audio);
    // audios.push(audio);

});

fs.writeFile("./lmrl_2011_spring.json", JSON.stringify(audios_spring, null, '\t'));
fs.writeFile("./lmrl_2011_summer.json", JSON.stringify(audios_summer, null, '\t'));
fs.writeFile("./lmrl_2011_autumn.json", JSON.stringify(audios_autumn, null, '\t'));
fs.writeFile("./lmrl_2011_winter.json", JSON.stringify(audios_winter, null, '\t'));




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