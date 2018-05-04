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


var results = JSON.parse(fs.readFileSync('./2014-12-urls.json', 'utf8'));
// var titles = JSON.parse(fs.readFileSync('./2014-5-titles.json', 'utf8'));

var audios = [];

results.forEach(function(bible, indexId) {

    var audio = {};
    audio.duration = 450;
    audio.size = "2M";

    audio.path = bible.path;

    audio.id = 5026 * 1000000 + indexId + 1;
    // audio.title = titles[indexId].title.substring(0, titles[indexId].title.indexOf(" 文件")).replace("\t", "");



    audio.albumId = 5026;
    audio.albumName = "尔道自建－尼希米記 201412";
    audio.albumtitle = "尔道自建－尼希米記 201412" + "(" + (indexId + 1) + ")";



    console.log(audio);
    audios.push(audio);



    // fs.writeFileSync("./" + artist.shortName + audio.time + ".json", JSON.stringify(audio, null, '\t'));




});

fs.writeFileSync("./edzj201412.json", JSON.stringify(audios, null, '\t'));
// fs.writeFileSync("./build_bible_albums.json", JSON.stringify(albums, null, '\t'));