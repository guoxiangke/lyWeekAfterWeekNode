const Xray = require('x-ray');
const x = Xray();
const fs = require('fs');
const download = require('download');
const _ = require('lodash');

var moment = require('moment-timezone');

moment.tz.setDefault('Asia/Shanghai');

var results = [];
for (var i = 1; i < 92; i++) {
    results.push(1);
}

// console.log(results);

var albumId = 6326;
var year = 2017;

// var dates = [year + "0101"];
// var season = "春";
// var seasonEng = "spring";

var dates = [year + "0401"];
var season = "夏";
var seasonEng = "summer";

// var dates = [year + "0701"];
// var season = "秋";
// var seasonEng = "autumn";

// var dates = [year + "1001"];
// var season = "冬";
// var seasonEng = "winter";



results.forEach(function(id) {
    var day = moment(dates.slice(-1)[0]).add(id, 'days').format("YYYYMMDD");
    dates.push(day);
});

var audios = [];


dates.forEach(function(date, indexId) {
    var audio = {};
    audio.duration = 3560;
    audio.size = "28.5M";
    // http://media.febcchinese.org/Streaming/th/th141101.mp3

    audio.path = "http://media.febcchinese.org/Streaming/cc/cc" + date.substring(2) + ".mp3";
    audio.id = albumId * 1000000 + indexId + 1;
    audio.albumId = albumId;
    audio.albumName = "《空中辅导》" + year + "年" + season + "季合集";
    audio.albumtitle = "《空中辅导》" + year + "年" + season + "季合集" + "(" + (indexId + 1) + ")";
    audio.title = "空中辅导-" + date;

    console.log(audio);
    audios.push(audio);

});

fs.writeFile("./cc" + year + "_" + seasonEng + "_songs.json", JSON.stringify(audios, null, '\t'));