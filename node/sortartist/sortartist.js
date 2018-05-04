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

var _ = require('underscore');


var artists = JSON.parse(fs.readFileSync('./artist.json', 'utf8'));


// var sortedArtists = _.sortBy(artists, 'artistCategoryId');
var sortedArtists = _.sortBy((_.sortBy(artists, 'sort')), 'artistCategoryId');


fs.writeFileSync("./sorted_artist.json", JSON.stringify(sortedArtists, null, '\t'));
// fs.writeFileSync("./build_bible_albums.json", JSON.stringify(albums, null, '\t'));