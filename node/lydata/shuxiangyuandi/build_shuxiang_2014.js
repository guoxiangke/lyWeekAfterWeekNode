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
    results.push(3);
    results.push(1);
    results.push(1);





}

// console.log(results);

var dates = ["20141001"];
results.forEach(function(id) {
    var day = moment(dates.slice(-1)[0]).add(id, 'days').format("YYYYMMDD");
    dates.push(day);
});

var audios = [];

var year = "2014";
var artist = "书香园地";


var albumId = 6281;

// var season = "春";
// var seasonEnglish = "spring";

// var season = "夏";
// var seasonEnglish = "summer";

// var season = "秋";
// var seasonEnglish = "autumn";

var season = "冬";
var seasonEnglish = "winter";




dates.forEach(function(date, indexId) {
    var audio = {};
    audio.duration = 1760;
    audio.size = "14.1M";
    // http://media.febcchinese.org/Streaming/th/th141101.mp3
    // http://media.febcchinese.org/Streaming/sr/sr141103.mp3
    // http://media.febcchinese.org/streaming/book/bc130101.mp3

    audio.path = "http://media.febcchinese.org/Streaming/book/bc" + date.substring(2) + ".mp3";
    audio.id = albumId * 1000000 + indexId + 1;
    audio.albumId = albumId;
    audio.albumName = "《" + artist + "》" + year + "年" + season + "季合集";
    audio.albumtitle = "《" + artist + "》" + year + "年" + season + "季合集" + "(" + (indexId + 1) + ")";
    audio.title = "书香园地-" + date;

    console.log(audio);
    audios.push(audio);

});

fs.writeFile("./bc" + year + "_" + seasonEnglish + "_songs.json", JSON.stringify(audios, null, '\t'));