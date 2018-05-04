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


var results = JSON.parse(fs.readFileSync('./bible_niv_names_with_chapter_counts_only_Psalm.json', 'utf8'));
var albums = JSON.parse(fs.readFileSync('./build_bible_niv_albums_only_Psalms.json', 'utf8'));

var audios = [];

results.forEach(function(bible, indexId) {

    for (i = 1; i < bible.chapterCount + 1; i++) {
        var fileName;
        if (bible.chapterCount >= 100) {
            if (i < 10) {
                fileName = bible.name + " 00" + i + ".mp3";
            } else if (i < 100) {
                fileName = bible.name + " 0" + i + ".mp3";
            } else {
                fileName = "19 Psalm" + " " + i + ".mp3";
            }
        } else if (bible.chapterCount >= 10) {
            if (i < 10) {
                fileName = bible.name + " 0" + i + ".mp3";
            } else {
                fileName = bible.name + " " + i + ".mp3";
            }
        } else {
            fileName = bible.name + "" + i + ".mp3";

        }

        var file = './NIV/' + bible.name + '/' + fileName;

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
                // if (indexId >= 39) {
                //     audio.path = "https://rawcdn.githack.com/quiet324/BibleResourcePanShi/170704/" + bible.name + '/' + fileName;
                // } else {
                //     audio.path = "https://rawcdn.githack.com/quiet324/BibleResourcePanShi2/1707063/" + bible.name + '/' + fileName;
                // }

                audio.path = "https://rawcdn.githack.com/quiet324/BibleResourceNIV/170708/" + bible.name + '/' + fileName;


                audio.id = albums[indexId].id * 1000000 + i;

                audio.albumId = albums[indexId].id;
                audio.albumName = albums[indexId].name;
                audio.albumtitle = albums[indexId].name + "(" + (i) + ")";



                console.log(audio);
                audios.push(audio);

                done = true;
            });
            require('deasync').loopWhile(function() { return !done; });



            // fs.writeFileSync("./" + artist.shortName + audio.time + ".json", JSON.stringify(audio, null, '\t'));

        } else {
            console.log(file + "do not exit");
        }
    }

});

fs.writeFileSync("./build_bible_niv_albums_and_songs_only_Joel.json", JSON.stringify(audios, null, '\t'));
// fs.writeFileSync("./build_bible_albums.json", JSON.stringify(albums, null, '\t'));