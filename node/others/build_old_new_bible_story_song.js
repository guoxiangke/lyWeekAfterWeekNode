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


var results = JSON.parse(fs.readFileSync('./old_new_bible_story_names.json', 'utf8'));

var audios1 = [];
var audios2 = [];
var audios3 = [];
var audios4 = [];

results.forEach(function(name, indexId) {

    var file = './old_new_bible_story/' + name;

    if (fs.existsSync(file)) { //
        // Do something

        var stats = fs.statSync(file);

        console.log(file + ' size is ' + filesize(stats.size).human());

        var done = false;
        // var data;
        mp3Duration(file, function(err, duration) {
            if (err) return console.log(err.message);
            console.log(file + ' is ' + duration + ' seconds long');
            // data = res;
            var audio = {};
            audio.duration = parseInt(duration, 10);
            audio.size = filesize(stats.size).human();
            audio.path = "https://rawcdn.githack.com/quiet324/OtherAlbums/171116/新旧约圣经故事/" + name;
            // https://rawcdn.githack.com/quiet324/OtherAlbumsTCR/171115/tcr-john/约翰福音第08讲.mp3

            audio.title = name.substring(0, name.indexOf('.mp3'));
            if (indexId < 75) {
                audio.id = 6308 * 1000000 + (indexId + 1);
                audio.albumId = 6308;
                audio.albumName = "新旧约圣经故事-旧约-合集一";
                audio.albumtitle = "新旧约圣经故事-旧约-合集一" + "(" + (indexId + 1) + ")";
                audios1.push(audio);

            } else if (indexId >= 75 && indexId < 150) {
                audio.id = 6309 * 1000000 + (indexId + 1 - 75);
                audio.albumId = 6309;
                audio.albumName = "新旧约圣经故事-旧约-合集二";
                audio.albumtitle = "新旧约圣经故事-旧约-合集二" + "(" + (indexId + 1 - 75) + ")";
                audios2.push(audio);

            } else if (indexId >= 150 && indexId < 210) {
                audio.id = 6310 * 1000000 + (indexId + 1 - 150);
                audio.albumId = 6310;
                audio.albumName = "新旧约圣经故事-新约-合集一";
                audio.albumtitle = "新旧约圣经故事-新约-合集一" + "(" + (indexId + 1 - 150) + ")";
                audios3.push(audio);

            } else {
                audio.id = 6311 * 1000000 + (indexId + 1 - 210);
                audio.albumId = 6311;
                audio.albumName = "新旧约圣经故事-新约-合集二";
                audio.albumtitle = "新旧约圣经故事-新约-合集二" + "(" + (indexId + 1 - 210) + ")";
                audios4.push(audio);

            }

            // ,
            // {
            //   "stared": false,
            //   "duration": 500,
            //   "size": "1M",
            //   "id": 6308,
            //   "name": "新旧约圣经故事-旧约-合集一",
            //   "description": "",
            //   "songCount": 75,
            //   "albumCategoryId": 901,
            //   "shortName": "other_old_new_bible_story_1"
            // }

            console.log(audio);
            // audios.push(audio);

            done = true;
        });
        require('deasync').loopWhile(function() { return !done; });



        // fs.writeFileSync("./" + artist.shortName + audio.time + ".json", JSON.stringify(audio, null, '\t'));

    } else {
        console.log(file + "do not exit");
    }

});

fs.writeFileSync("./other_old_new_bible_story_1.json", JSON.stringify(audios1, null, '\t'));
fs.writeFileSync("./other_old_new_bible_story_2.json", JSON.stringify(audios2, null, '\t'));
fs.writeFileSync("./other_old_new_bible_story_3.json", JSON.stringify(audios3, null, '\t'));
fs.writeFileSync("./other_old_new_bible_story_4.json", JSON.stringify(audios4, null, '\t'));

// fs.writeFileSync("./build_bible_albums.json", JSON.stringify(albums, null, '\t'));