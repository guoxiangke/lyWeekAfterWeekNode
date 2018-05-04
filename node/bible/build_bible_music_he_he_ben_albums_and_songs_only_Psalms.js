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


var results = JSON.parse(fs.readFileSync('./bible_xin_yi_ben_names_with_chapter_counts_only_Psalms.json', 'utf8'));
var albums = JSON.parse(fs.readFileSync('./build_bible_music_he_he_ben_albums_only_Psalms.json', 'utf8'));

var audios = [];

results.forEach(function(bible, indexId) {

    for (i = 1; i < bible.chapterCount + 1; i++) {
        var fileName;
        fileName = bible.name.substring(2) + "第" + i + "章.mp3";


        var file = './LingTingBan/' + bible.name.substring(2) + '/' + fileName;

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
                audio.path = "https://rawcdn.githack.com/quiet324/BibleResourceLingTingBan/170921/" + bible.name.substring(2) + '/' + fileName;

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

fs.writeFileSync("./build_bible_music_he_he_ben_albums_and_songs_only_Psalms.json", JSON.stringify(audios, null, '\t'));
// fs.writeFileSync("./build_bible_albums.json", JSON.stringify(albums, null, '\t'));