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


var results = JSON.parse(fs.readFileSync('./bible_names_with_chapter_counts.json', 'utf8'));


results.forEach(function(bible) {

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
        var downUrl = 'http://biblemp3.fuyin.fm:8096/sj/ys新译本朗读/' + bible.name + '/' + fileName;

        if (!fs.existsSync(file)) { //
            // Do something

            console.log(moment().format('MMMM Do YYYY, h:mm:ss a') + " downloading..." + file);

            var data = require('child_process').execFileSync('curl', ['--silent', '-L', downUrl]);
            // var data = downloadFileSync(downUrl)

            mkdirp.sync('./ys新译本朗读/' + bible.name);

            fs.writeFileSync(file, data);

            // audio.duration = artist.duration;
            // audio.size = artist.size;
            // audio.artistId = artist.id;
            // audio.artistName = artist.name;
            // audio.path = "https://rawcdn.githack.com/quiet324/LiangYouRadioResource" + year + week + "/" + commitTag + "/" + artist.shortName + "/" + fileName;
            // audio.id = artist.id * 1000000 + parseInt(audio.time.substring(2), 10);

            // fs.writeFileSync("./" + artist.shortName + audio.time + ".json", JSON.stringify(audio, null, '\t'));

        } else {
            console.log(file + " exit");
        }
    }

});