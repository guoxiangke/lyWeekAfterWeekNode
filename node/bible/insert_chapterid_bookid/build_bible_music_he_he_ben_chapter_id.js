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

var songIndex = 0;

var songs = JSON.parse(fs.readFileSync('./bible_music_he_he_ben_songs.json', 'utf8'));
var albums = JSON.parse(fs.readFileSync('./bible_music_he_he_ben_albums.json', 'utf8'));


console.log(albums);
console.log(songs);
albums.forEach(function(album, albumIndex) {


    // console.log(album);
    for (i = 1; i < album.songCount + 1; i++) {
        console.log(songIndex);
        var song = songs[songIndex];

        songIndex++;
        song.chapterId = i;
        song.bookId = albumIndex + 1;
        song.bookType = 3;

        // console.log(songs[songIndex - 1]);
    }

});

fs.writeFileSync("./bible_music_he_he_ben_songs_with_chapterid.json", JSON.stringify(songs, null, '\t'));
// fs.writeFileSync("./build_bible_albums.json", JSON.stringify(albums, null, '\t'));