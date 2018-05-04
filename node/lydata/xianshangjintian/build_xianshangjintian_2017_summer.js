const Xray = require('x-ray');
const x = Xray();
const fs = require('fs');
const download = require('download');
const _ = require('lodash');

var moment = require('moment-timezone');

moment.tz.setDefault('Asia/Shanghai');

var results = [];
for (var i = 1; i < 30; i++) {
    results.push(1);
    results.push(1);
    results.push(1);
    results.push(1);
    results.push(3);
}

// console.log(results);

var dates = ["20170327"];
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
    // http://sc.haomuren.org/gate/gb/media.febcchinese.org/Streaming/dy/dy170327.mp3

    audio.path = "http://media.febcchinese.org/Streaming/dy/dy" + date.substring(2) + ".mp3";
    audio.id = 6235 * 1000000 + indexId + 1;
    audio.albumId = 6235;
    audio.albumName = "《献上今天》2017年夏季合集";
    audio.albumtitle = "《献上今天》2017年夏季合集" + "(" + (indexId + 1) + ")";
    audio.title = "献上今天-" + date;

    console.log(audio);
    audios.push(audio);

});

fs.writeFile("./dy2017_summer_songs.json", JSON.stringify(audios, null, '\t'));