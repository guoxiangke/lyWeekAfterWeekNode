const Xray = require('x-ray');
const x = Xray();
const fs = require('fs');
const download = require('download');
const _ = require('lodash');

var moment = require('moment-timezone');

moment.tz.setDefault('Asia/Shanghai');

var audios = [];

var names = fs.readFileSync('./ghxg.txt', 'utf8').split('\n');
console.log(names);

names.forEach(function(name, indexId) {
    var audio = {};
    audio.duration = 1760;
    audio.size = "14.1M";
    // "path": "https://rawcdn.githack.com/quiet324/LiangYouSchoolAlbum3/1706052/mavmt/mavmt001.mp3",
    if (indexId < 10) {
        audio.path = "https://rawcdn.githack.com/quiet324/LiangYouAlbums8/171127/lys_ghxg_mg/mavmw00" + (indexId + 1) + ".mp3";
    } else {
        audio.path = "https://rawcdn.githack.com/quiet324/LiangYouAlbums8/171127/lys_ghxg_mg/mavmw0" + (indexId + 1) + ".mp3";
    }
    audio.id = 6312 * 1000000 + indexId + 1;
    audio.albumId = 6312;
    audio.albumName = "《良院专区》关怀事工：民工";
    audio.albumtitle = "《良院专区》关怀事工：民工" + "(" + (indexId + 1) + ")";
    audio.title = name.replace('\t', ' ');

    console.log(audio);
    audios.push(audio);
});

fs.writeFile("./lys_ghxg_mg_songs.json", JSON.stringify(audios, null, '\t'));

// var results = [];
// for (var i = 1; i < 130; i++) {
//     results.push(1);
// }

// // console.log(results);

// var dates = ["20140901"];
// results.forEach(function(id) {
//     var day = moment(dates.slice(-1)[0]).add(id, 'days').format("YYYYMMDD");
//     dates.push(day);
// });

// var audios = [];


// dates.forEach(function(date, indexId) {
//     var audio = {};
//     audio.duration = 860;
//     audio.size = "6.9M";
//     // http://media.febcchinese.org/Streaming/th/th141101.mp3
//     //                http://media.febcchinese.org/Streaming/ir/ir140901.mp3

//     audio.path = "http://media.febcchinese.org/Streaming/ir/ir" + date.substring(2) + ".mp3";
//     audio.id = 6236 * 1000000 + indexId + 1;
//     audio.albumId = 6236;
//     audio.albumName = "《i-Radio爱广播》2014年冬季合集";
//     audio.albumtitle = "《i-Radio爱广播》2014年冬季合集" + "(" + (indexId + 1) + ")";
//     audio.title = "i-Radio爱广播-" + date;

//     console.log(audio);
//     audios.push(audio);

// });

// fs.writeFile("./ir2014_winter_songs.json", JSON.stringify(audios, null, '\t'));