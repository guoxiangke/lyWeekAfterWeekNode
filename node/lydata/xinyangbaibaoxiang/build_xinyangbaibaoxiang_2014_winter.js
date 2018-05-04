const Xray = require('x-ray');
const x = Xray();
const fs = require('fs');
const download = require('download');
const _ = require('lodash');

var moment = require('moment-timezone');

moment.tz.setDefault('Asia/Shanghai');

var results = [];
for (var i = 1; i < 53; i++) {
    results.push(2);
    results.push(2);
    results.push(3);
}

// console.log(results);

var dates = ["20140901"];
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

    audio.path = "http://media.febcchinese.org/Streaming/tu/tu" + date.substring(2) + ".mp3";
    audio.id = 6229 * 1000000 + indexId + 1;
    audio.albumId = 6229;
    audio.albumName = "《信仰百宝箱》2014年冬季合集";
    audio.albumtitle = "《信仰百宝箱》2014年冬季合集" + "(" + (indexId + 1) + ")";
    audio.title = "信仰百宝箱-" + date;

    console.log(audio);
    audios.push(audio);

});

fs.writeFile("./tu2014_winter_songs.json", JSON.stringify(audios, null, '\t'));