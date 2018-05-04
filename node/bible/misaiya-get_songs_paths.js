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


var results = JSON.parse(fs.readFileSync('./misaiya-songs.json', 'utf8'));
var audios = [];

results.forEach(function(bible, indexId) {

    var source = bible.path.replace("https://rawcdn.githack.com/quiet324/MusicResource/171222/", "http://handel.ali.soundofbible.xyz/");
    // https://rawcdn.githack.com/quiet324/MusicResource/171222
    audios.push(encodeURI(source));
});

fs.writeFileSync("./misaiya-songs_paths.json", JSON.stringify(audios, null, '\t'));
// fs.writeFileSync("./build_bible_albums.json", JSON.stringify(albums, null, '\t'));