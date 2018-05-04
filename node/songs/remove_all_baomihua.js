const Xray = require('x-ray');
const x = Xray();
const fs = require('fs');
const download = require('download');
const _ = require('lodash');

const allSongsTitle = [];


var results = JSON.parse(fs.readFileSync('./all_songs_titles_result.json', 'utf8'));




var results = _.remove(results, function(n) {
    return n.title.indexOf("爆米花") === -1;
});




// fs.writeFile("./title_result.json", JSON.stringify(finalResult, null, '\t'));
fs.writeFile("./all_songs_titles_result_no_baomihua.json", JSON.stringify(results, null, '\t'));