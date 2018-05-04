const Xray = require('x-ray');
const x = Xray();
const fs = require('fs');
const download = require('download');
var shell = require('shelljs');
var dateFormat = require('dateformat');
var async = require('async');
var downloadFileSync = require('download-file-sync');
var mkdirp = require('mkdirp');
var moment = require('moment-timezone');

moment.tz.setDefault('Asia/Shanghai');
var mp3Duration = require('mp3-duration');
var deasync = require('deasync');
var mp3DurationSync = deasync(mp3Duration);
var filesize = require('file-size');


var _getAllFilesFromFolder = function(dir) {

    var filesystem = require("fs");
    var results = [];

    filesystem.readdirSync(dir).forEach(function(file) {

        results.push(file);

    });

    return results;

};


const files = _getAllFilesFromFolder(__dirname + "/old_new_bible_story");
console.log(files);
fs.writeFile("./old_new_bible_story_names.json", JSON.stringify(files, null, '\t'));


// var results = JSON.parse(fs.readFileSync('./tcr-john_names.json', 'utf8'));

// var audios = [];

// results.forEach(function(name, indexId) {

//     var file = './tcr-john/' + name;

//     if (fs.existsSync(file)) { //
//         // Do something

//         var stats = fs.statSync(file);

//         console.log(file + ' size is ' + filesize(stats.size).human());

//         var done = false;
//         // var data;
//         mp3Duration(file, function(err, duration) {
//             if (err) return console.log(err.message);
//             console.log(file + ' is ' + duration + ' seconds long');
//             // data = res;
//             var audio = {};
//             audio.duration = parseInt(duration, 10);
//             audio.size = filesize(stats.size).human();
//             audio.path = "https://rawcdn.githack.com/quiet324/OtherAlbumsTCR/171115/tcr-john/" + name;
//             // https://rawcdn.githack.com/quiet324/OtherAlbumsTCR/171115/tcr-john/约翰福音第08讲.mp3

//             if (indexId < 90) {
//                 audio.id = 6306 * 1000000 + (indexId + 1);
//                 audio.albumId = 6306;
//                 audio.albumName = "约翰福音-唐崇荣-合集一";
//                 audio.albumtitle = "约翰福音-唐崇荣-合集一" + "(" + (indexId + 1) + ")";
//             } else {
//                 audio.id = 6307 * 1000000 + (indexId + 1 - 90);
//                 audio.albumId = 6307;
//                 audio.albumName = "约翰福音-唐崇荣-合集二";
//                 audio.albumtitle = "约翰福音-唐崇荣-合集二" + "(" + (indexId + 1 - 90) + ")";
//             }

//             // {
//             //     "stared": false,
//             //     "duration": 1760,
//             //     "size": "20M",
//             //     "id": 6306,
//             //     "name": "约翰福音-唐崇荣-合集一",
//             //     "description": "",
//             //     "songCount": 90,
//             //     "albumCategoryId": 904,
//             //     "shortName": "other_tcr_john_1"
//             //   }

//             console.log(audio);
//             audios.push(audio);

//             done = true;
//         });
//         require('deasync').loopWhile(function() { return !done; });



//         // fs.writeFileSync("./" + artist.shortName + audio.time + ".json", JSON.stringify(audio, null, '\t'));

//     } else {
//         console.log(file + "do not exit");
//     }

// });

// fs.writeFileSync("./other_tcr_john.json", JSON.stringify(audios, null, '\t'));
// // fs.writeFileSync("./build_bible_albums.json", JSON.stringify(albums, null, '\t'));