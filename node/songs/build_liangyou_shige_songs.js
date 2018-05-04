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


var results = JSON.parse(fs.readFileSync('./result_songs_with_lrc_2.json', 'utf8'));

var audios_1 = [];
var audios_2 = [];
var audios_3 = [];
var audios_4 = [];
var audios_5 = [];



results.forEach(function(bible, indexId) {

    var audio = {};
    audio.duration = 180;
    audio.size = "2M";

    audio.path = bible.path;

    if (indexId < 90) {
        audio.id = 6352 * 1000000 + indexId + 1;
        audio.title = bible.title;
        audio.albumId = 6352;
        audio.albumName = "良友诗歌-合集一";
        audio.albumtitle = "良友诗歌-合集一" + "(" + (indexId + 1) + ")";
        audio.lrc = bible.songLrc;
        audios_1.push(audio);
    } else if (indexId < 90 + 90) {
        audio.id = 6353 * 1000000 + indexId + 1 - 90;
        audio.title = bible.title;
        audio.albumId = 6353;
        audio.albumName = "良友诗歌-合集二";
        audio.albumtitle = "良友诗歌-合集二" + "(" + (indexId + 1 - 90) + ")";
        audio.lrc = bible.songLrc;
        audios_2.push(audio);
    } else if (indexId < 90 + 90 + 90) {
        audio.id = 6354 * 1000000 + indexId + 1 - 90 * 2;
        audio.title = bible.title;
        audio.albumId = 6354;
        audio.albumName = "良友诗歌-合集三";
        audio.albumtitle = "良友诗歌-合集三" + "(" + (indexId + 1 - 90 * 2) + ")";
        audio.lrc = bible.songLrc;
        audios_3.push(audio);
    } else if (indexId < 90 + 90 + 90 + 90) {
        audio.id = 6355 * 1000000 + indexId + 1 - 90 * 3;
        audio.title = bible.title;
        audio.albumId = 6355;
        audio.albumName = "良友诗歌-合集四";
        audio.albumtitle = "良友诗歌-合集四" + "(" + (indexId + 1 - 90 * 3) + ")";
        audio.lrc = bible.songLrc;
        audios_4.push(audio);
    } else if (indexId < 90 + 90 + 90 + 90 + 90) {
        audio.id = 6356 * 1000000 + indexId + 1 - 90 * 4;
        audio.title = bible.title;
        audio.albumId = 6356;
        audio.albumName = "良友诗歌-合集五";
        audio.albumtitle = "良友诗歌-合集五" + "(" + (indexId + 1 - 90 * 4) + ")";
        audio.lrc = bible.songLrc;
        audios_5.push(audio);
    }




    // fs.writeFileSync("./" + artist.shortName + audio.time + ".json", JSON.stringify(audio, null, '\t'));




});

fs.writeFileSync("./liangyou_shige_songs_1.json", JSON.stringify(audios_1, null, '\t'));
fs.writeFileSync("./liangyou_shige_songs_2.json", JSON.stringify(audios_2, null, '\t'));
fs.writeFileSync("./liangyou_shige_songs_3.json", JSON.stringify(audios_3, null, '\t'));
fs.writeFileSync("./liangyou_shige_songs_4.json", JSON.stringify(audios_4, null, '\t'));
fs.writeFileSync("./liangyou_shige_songs_5.json", JSON.stringify(audios_5, null, '\t'));

// fs.writeFileSync("./build_bible_albums.json", JSON.stringify(albums, null, '\t'));