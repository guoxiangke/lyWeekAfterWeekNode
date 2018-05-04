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
var files = ["lmrl_2013_spring",
    "lmrl_2013_summer",
    "lmrl_2013_autumn",
    "lmrl_2013_winter",
    "lmrl_2014_spring",
    "lmrl_2014_summer",
    "lmrl_2014_autumn",
    "lmrl_2014_winter",
    "lmrl_2015_spring",
    "lmrl_2015_summer",
    "lmrl_2015_autumn",
    "lmrl_2015_winter",
    "kymn_2015_winter",
    "kymn_2016_spring",
    "kymn_2016_summer",
    "kymn_2016_autumn",
    "kymn_2016_winter"
];
// "path": "http://media.febcchinese.org/streaming/bv/bv130929.mp3",

files.forEach(function(file) {
    var names = JSON.parse(fs.readFileSync('./' + file + '.json', 'utf8'));
    names.forEach(function(name, indexId) {
        name.textContent = "";

    });

    console.log(names);
    fs.writeFileSync('./' + file + '.json', JSON.stringify(names, null, '\t'));

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