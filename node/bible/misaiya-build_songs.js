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


var results = JSON.parse(fs.readFileSync('./msy_info.json', 'utf8'));
var audios = [];

results.forEach(function(bible, indexId) {


        var file = './misaiya/' + bible.title + '.mp3';

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

                audio.path = "https://rawcdn.githack.com/quiet324/MusicResource/171222/HandelMessiah/" + bible.title + '.mp3';


                audio.id = 6394 * 1000000 + indexId + 1;
                audio.title = bible.title;
                audio.albumId = 6394;
                audio.albumName = 'Messiah Handel 鈴木雅明';
                audio.albumtitle = 'Messiah Handel 鈴木雅明' + "(" + (indexId + 1) + ")";
                audio.lrc = bible.lrc;


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

);

fs.writeFileSync("./misaiya-songs.json", JSON.stringify(audios, null, '\t'));
// fs.writeFileSync("./build_bible_albums.json", JSON.stringify(albums, null, '\t'));