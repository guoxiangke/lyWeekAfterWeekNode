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


// var _getAllFilesFromFolder = function(dir) {

//     var filesystem = require("fs");
//     var results = [];

//     filesystem.readdirSync(dir).forEach(function(file) {

//         results.push(file);

//     });

//     return results;

// };


// const files = _getAllFilesFromFolder(__dirname + "/tcr-john");
// console.log(files);
// fs.writeFile("./tcr-john_names.json", JSON.stringify(files, null, '\t'));


var results = JSON.parse(fs.readFileSync('./other_tcr_john.json', 'utf8'));


results.forEach(function(song, indexId) {
    if (indexId >= 45 && indexId < 90) {
        // "path": "https://rawcdn.githack.com/quiet324/OtherAlbumsTCR/171115/tcr-john/约翰福音第01讲.mp3",

        song.path = song.path.replace('OtherAlbumsTCR', 'OtherAlbumsTCR2');
    } else if (indexId >= 90 && indexId < 90 + 45) {
        song.path = song.path.replace('OtherAlbumsTCR', 'OtherAlbumsTCR3');
    } else if (indexId >= 90 + 45) {
        song.path = song.path.replace('OtherAlbumsTCR', 'OtherAlbumsTCR4');

    }

});

fs.writeFileSync("./other_tcr_john_new_path.json", JSON.stringify(results, null, '\t'));
// fs.writeFileSync("./build_bible_albums.json", JSON.stringify(albums, null, '\t'));