const Xray = require('x-ray');
const x = Xray();
const fs = require('fs');
const download = require('download');
const _ = require('lodash');

var moment = require('moment-timezone');

moment.tz.setDefault('Asia/Shanghai');

var audios = [];

// var names = fs.readFileSync('./jdsx.txt', 'utf8').split('\n');
// console.log(names);


var _getAllFilesFromFolder = function(dir) {

    var filesystem = require("fs");
    var results = [];

    filesystem.readdirSync(dir).forEach(function(file) {

        results.push(file);

    });

    return results;

};

const files = _getAllFilesFromFolder(__dirname + "/作时间的主人-刘志雄");
console.log(files);
fs.writeFile("./time_master_lzx_names.json", JSON.stringify(files, null, '\t'));



files.forEach(function(name, indexId) {
    var audio = {};
    audio.duration = 1760;
    audio.size = "14.1M";
    // "path": "https://rawcdn.githack.com/quiet324/LiangYouSchoolAlbum3/1706052/mavmt/mavmt001.mp3",
    if (indexId < 10) {
        audio.path = "https://rawcdn.githack.com/quiet324/OtherAlbums/171115/作时间的主人-刘志雄/" + name;
    } else {
        audio.path = "https://rawcdn.githack.com/quiet324/OtherAlbums/171115/作时间的主人-刘志雄/" + name;
    }
    audio.id = 6305 * 1000000 + indexId + 1;
    audio.albumId = 6305;
    audio.albumName = "作时间的主人-刘志雄";
    audio.albumtitle = "作时间的主人-刘志雄" + "(" + (indexId + 1) + ")";
    audio.title = name.substring(0, name.lastIndexOf('.'));

    console.log(audio);
    audios.push(audio);
});

fs.writeFile("./other_lzx_time_master.json", JSON.stringify(audios, null, '\t'));

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