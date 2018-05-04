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

var dates = ["20161001"];
results.forEach(function(id) {
    var day = moment(dates.slice(-1)[0]).add(id, 'days').format("YYYYMMDD");
    dates.push(day);
});

var audios = [];


dates.forEach(function(date, indexId) {
    var audio = {};
    audio.duration = 860;
    audio.size = "6.9M";
    // http://media.febcchinese.org/Streaming/th/th141101.mp3

    audio.path = "http://media.febcchinese.org/Streaming/th/th" + date.substring(2) + ".mp3";
    audio.id = 6226 * 1000000 + indexId + 1;
    audio.albumId = 6226;
    audio.albumName = "《真理之光》2016年冬季合集";
    audio.albumtitle = "《真理之光》2016年冬季合集" + "(" + (indexId + 1) + ")";
    audio.title = "真理之光-" + date;

    console.log(audio);
    audios.push(audio);

});

fs.writeFile("./th2016_winter_songs.json", JSON.stringify(audios, null, '\t'));