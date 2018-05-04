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

var dates = ["20160101"];
results.forEach(function(id) {
    var day = moment(dates.slice(-1)[0]).add(id, 'days').format("YYYYMMDD");
    dates.push(day);
});

var dates = dates.filter(function(e) { return e !== '20160124'; });

var dates = dates.filter(function(e) { return e !== '20160130'; });

var dates = dates.filter(function(e) { return e !== '20160206'; });

var dates = dates.filter(function(e) { return e !== '20160214'; });

var dates = dates.filter(function(e) { return e !== '20160311'; });

var dates = dates.filter(function(e) { return e !== '20160312'; });




var dates = dates.filter(function(e) { return e !== '20160314'; });

var dates = dates.filter(function(e) { return e !== '20160423'; });

var dates = dates.filter(function(e) { return e !== '20160424'; });

var dates = dates.filter(function(e) { return e !== '20160502'; });

var dates = dates.filter(function(e) { return e !== '20160503'; });
var dates = dates.filter(function(e) { return e !== '20160504'; });






var dates = dates.filter(function(e) { return e !== '20160124'; });

var dates = dates.filter(function(e) { return e !== '20160206'; });

var dates = dates.filter(function(e) { return e !== '20160214'; });

var dates = dates.filter(function(e) { return e !== '20160311'; });

var dates = dates.filter(function(e) { return e !== '20160312'; });




var dates = dates.filter(function(e) { return e !== '20160506'; });

var dates = dates.filter(function(e) { return e !== '20160507'; });

var dates = dates.filter(function(e) { return e !== '20160608'; });

var dates = dates.filter(function(e) { return e !== '20161021'; });

var dates = dates.filter(function(e) { return e !== '20161030'; });
var dates = dates.filter(function(e) { return e !== '20161105'; });
var dates = dates.filter(function(e) { return e !== '20161106'; });




var dates = dates.filter(function(e) { return e !== '20161112'; });

var dates = dates.filter(function(e) { return e !== '20161113'; });

var dates = dates.filter(function(e) { return e !== '20161117'; });

var dates = dates.filter(function(e) { return e !== '20161119'; });

var dates = dates.filter(function(e) { return e !== '20161120'; });
var dates = dates.filter(function(e) { return e !== '20161126'; });
var dates = dates.filter(function(e) { return e !== '20161127'; });


var dates = dates.filter(function(e) { return e !== '20161203'; });

var dates = dates.filter(function(e) { return e !== '20161204'; });

var dates = dates.filter(function(e) { return e !== '20161210'; });

var dates = dates.filter(function(e) { return e !== '20161211'; });

var dates = dates.filter(function(e) { return e !== '20161217'; });
var dates = dates.filter(function(e) { return e !== '20161218'; });
var dates = dates.filter(function(e) { return e !== '20161224'; });
var dates = dates.filter(function(e) { return e !== '20161225'; });











var name_and_dates = [];



var names = JSON.parse(fs.readFileSync('./tr2016_names.json', 'utf8'));
names.forEach(function(name, indexId) {
    var name_with_date_item = {};
    name_with_date_item.name = name;
    name_with_date_item.date = dates[indexId];
    name_and_dates.push(name_with_date_item);
});

fs.writeFile("./tr2016_names_with_dates.json", JSON.stringify(name_and_dates, null, '\t'));




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