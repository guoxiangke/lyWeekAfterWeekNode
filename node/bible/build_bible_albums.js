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


var results = JSON.parse(fs.readFileSync('./bible_names_with_chapter_counts.json', 'utf8'));

var albums = [];

results.forEach(function(bible, indexId) {

    var album = {};
    album.stared = false;
    album.duration = 500;
    album.size = "3M";
    album.id = 601 + indexId;
    album.name = bible.name;
    album.songCount = bible.chapterCount;
    album.albumCategoryId = 501;
    album.shortName = "";

    albums.push(album);
    // ,
    //     {
    //         "stared": false,
    //         "duration": 300,
    //         "size": "1M",
    //         "id": 503,
    //         "name": "《真道分解》圣经信箱",
    //         "description": "",
    //         "songCount": 347,
    //         "artistId": 36,
    //         "artistName": "真道分解",
    //         "albumCategoryId": 413,
    //         "shortName": "zdfj_shengjingxinxiang"
    //     }


    for (i = 1; i < bible.chapterCount + 1; i++) {
        var fileName;
        if (bible.chapterCount >= 100) {
            if (i < 10) {
                fileName = bible.name + "_00" + i + ".mp3";
            } else if (i < 100) {
                fileName = bible.name + "_0" + i + ".mp3";
            } else {
                fileName = bible.name + "_" + i + ".mp3";
            }
        } else {
            if (i < 10) {
                fileName = bible.name + "_0" + i + ".mp3";
            } else {
                fileName = bible.name + "_" + i + ".mp3";
            }
        }

        var file = './ys新译本朗读/' + bible.name + '/' + fileName;

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
                done = true;
            });
            // require('deasync').loopWhile(function() { return !done; });



            // audio.duration = artist.duration;
            // audio.size = artist.size;
            // audio.artistId = artist.id;
            // audio.artistName = artist.name;
            // audio.path = "https://rawcdn.githack.com/quiet324/LiangYouRadioResource" + year + week + "/" + commitTag + "/" + artist.shortName + "/" + fileName;
            // audio.id = artist.id * 1000000 + parseInt(audio.time.substring(2), 10);

            // fs.writeFileSync("./" + artist.shortName + audio.time + ".json", JSON.stringify(audio, null, '\t'));

        } else {
            console.log(file + "do not exit");
        }
    }

});


fs.writeFileSync("./build_bible_albums.json", JSON.stringify(albums, null, '\t'));