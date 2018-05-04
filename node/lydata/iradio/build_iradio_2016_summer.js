const Xray = require('x-ray');
const x = Xray();
const fs = require('fs');
const download = require('download');
const _ = require('lodash');

var moment = require('moment-timezone');

moment.tz.setDefault('Asia/Shanghai');

var results = [];
for (var i = 1; i < 95; i++) {
    results.push(1);
}

// console.log(results);

var dates = ["20160401"];
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
    //                http://media.febcchinese.org/Streaming/ir/ir140901.mp3

    audio.path = "http://media.febcchinese.org/Streaming/ir/ir" + date.substring(2) + ".mp3";
    audio.id = 6242 * 1000000 + indexId + 1;
    audio.albumId = 6242;
    audio.albumName = "《i-Radio爱广播》2016年夏季合集";
    audio.albumtitle = "《i-Radio爱广播》2016年夏季合集" + "(" + (indexId + 1) + ")";
    audio.title = "i-Radio爱广播-" + date;

    console.log(audio);
    audios.push(audio);

});

fs.writeFile("./ir2016_summer_songs.json", JSON.stringify(audios, null, '\t'));