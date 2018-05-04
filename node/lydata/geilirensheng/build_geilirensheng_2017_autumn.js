const Xray = require('x-ray');
const x = Xray();
const fs = require('fs');
const download = require('download');
const _ = require('lodash');

var moment = require('moment-timezone');

moment.tz.setDefault('Asia/Shanghai');

var results = [];
for (var i = 1; i < 14; i++) {
    results.push(1);
    results.push(1);
    results.push(1);
    results.push(1);
    results.push(3);




}

// console.log(results);

var dates = ["20170703"];
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
    // http://media.febcchinese.org/Streaming/sr/sr141103.mp3

    audio.path = "http://media.febcchinese.org/Streaming/sr/sr" + date.substring(2) + ".mp3";
    audio.id = 6274 * 1000000 + indexId + 1;
    audio.albumId = 6274;
    audio.albumName = "《给力人生》2017年秋季合集";
    audio.albumtitle = "《给力人生》2017年秋季合集" + "(" + (indexId + 1) + ")";
    audio.title = "给力人生-" + date;

    console.log(audio);
    audios.push(audio);

});

fs.writeFile("./sr2017_autumn_songs.json", JSON.stringify(audios, null, '\t'));