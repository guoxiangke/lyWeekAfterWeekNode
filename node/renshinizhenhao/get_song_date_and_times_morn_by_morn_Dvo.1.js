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


var moment = require('moment');

var momentZh = require('moment');
momentZh.locale('zh-cn');

// var moment = require('moment-timezone');

// moment.tz.setDefault('Asia/Shanghai');


// for (var i = 0; i < 5; i++) {
//     var day = moment("2015-01-05").add(i, 'days').format("YYYYMMDD");
//     console.log(day);
// }

var results = [];
for (var i = 1; i < 365; i++) {
    results.push(1);


}

// console.log(results);

var dates = ["20150101"];
var datesZH = ["1月1日"];
var datesMonth = ["Jan"];


results.forEach(function(id) {
    var day = moment(dates.slice(-1)[0]).add(id, 'days').format("YYYYMMDD");
    dates.push(day);

    momentZh.locale('en');

    var dateMonth = moment(dates.slice(-1)[0]).format("MMM");
    datesMonth.push(dateMonth);


    momentZh.locale('zh-cn');

    var dayZH = momentZh(dates.slice(-1)[0]).format("MMMDo");
    datesZH.push(dayZH);


    // if (day === '20170126') {
    //     dates.push('20170127');
    // }
});

// var datesZH = ["2017年1月1日"];
// results.forEach(function(id) {
//     var day = moment(dates.slice(-1)[0]).add(id, 'days').format("LL");
//     datesZH.push(day);
//     // if (day === '20170126') {
//     //     dates.push('20170127');
//     // }
// });

// var dates = dates.filter(function(e) { return e !== '20161231'; });
// var dates = dates.filter(function(e) { return e !== '20151221'; });
// var dates = dates.filter(function(e) { return e !== '20151222'; });

// dates.indexOf('20170126');
// dates.splice(dates.indexOf('20170128'), 0, "20170127");

// dates.splice(dates.indexOf('20170211'), 0, "20170210");

// dates.splice(dates.indexOf('20170401'), 0, "20170331");

// dates.splice(dates.indexOf('20170408'), 0, "20170407");



var name_and_dates = [];



// var names = JSON.parse(fs.readFileSync('./ib2017_names.json', 'utf8'));
dates.forEach(function(date, indexId) {
    var name_with_date_item = {};
    name_with_date_item.name = 'Dvo' + date.substring(2) + '.mp3';
    name_with_date_item.date = dates[indexId];
    name_with_date_item.dateZH = datesZH[indexId];
    name_with_date_item.dateMonth = datesMonth[indexId];


    name_and_dates.push(name_with_date_item);
});

fs.writeFile("./daily_morn_by_morn_Dvo_2015_names_with_dates.json", JSON.stringify(name_and_dates, null, '\t'));




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