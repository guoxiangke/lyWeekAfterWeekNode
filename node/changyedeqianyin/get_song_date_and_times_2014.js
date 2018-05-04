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


// for (var i = 0; i < 5; i++) {
//     var day = moment("2015-01-05").add(i, 'days').format("YYYYMMDD");
//     console.log(day);
// }

var results = [];
for (var i = 1; i < 400; i++) {
    results.push(1);
}

// console.log(results);

var dates = ["20140602"];
results.forEach(function(id) {
    var day = moment(dates.slice(-1)[0]).add(id, 'days').format("YYYYMMDD");
    dates.push(day);
});

var dates = dates.filter(function(e) { return e !== '20140608'; });

var dates = dates.filter(function(e) { return e !== '20140629'; });

var dates = dates.filter(function(e) { return e !== '20140704'; });

var dates = dates.filter(function(e) { return e !== '20140705'; });


var dates = dates.filter(function(e) { return e !== '20140710'; });

var dates = dates.filter(function(e) { return e !== '20140711'; });


var dates = dates.filter(function(e) { return e !== '20140717'; });

var dates = dates.filter(function(e) { return e !== '20140718'; });

var dates = dates.filter(function(e) { return e !== '20140724'; });

var dates = dates.filter(function(e) { return e !== '20140726'; });

var dates = dates.filter(function(e) { return e !== '20140801'; });

var dates = dates.filter(function(e) { return e !== '20140808'; });

var dates = dates.filter(function(e) { return e !== '20140809'; });

var dates = dates.filter(function(e) { return e !== '20140810'; });

var dates = dates.filter(function(e) { return e !== '20140814'; });

var dates = dates.filter(function(e) { return e !== '20140816'; });

var dates = dates.filter(function(e) { return e !== '20140831'; });









// var dates = dates.filter(function(e) { return e !== '20151120'; });









var name_and_dates = [];



var names = JSON.parse(fs.readFileSync('./ws2014_names.json', 'utf8'));
names.forEach(function(name, indexId) {
    var name_with_date_item = {};
    name_with_date_item.name = name;
    name_with_date_item.date = dates[indexId];
    name_and_dates.push(name_with_date_item);
});

fs.writeFile("./ws2014_names_with_dates.json", JSON.stringify(name_and_dates, null, '\t'));




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