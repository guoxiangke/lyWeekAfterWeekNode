const fs = require('fs');


var _getAllFilesFromFolder = function(dir) {

    var filesystem = require("fs");
    var results = [];

    filesystem.readdirSync(dir).forEach(function(file) {

        results.push(file);

    });

    return results;

};

const files = _getAllFilesFromFolder(__dirname + "/gbj_bfkz");
console.log(files);
// fs.writeFile("./gbj_tllc.json", JSON.stringify(files, null, '\t'));

const audios = [];

files.forEach(function(file, arrayIndex) {
    console.log(file);

    const audio = {};

    fs.rename(__dirname + "/gbj_bfkz/" + file, __dirname + "/gbj_bfkz/" + 'gbj_bfkz0' + (arrayIndex + 1) + '.mp3', function(err) {
        if (err) console.log('ERROR: ' + err);
    });

    // audio.title = file.substring(2, file.indexOf('.'));
    audio.path = "https://rawcdn.githack.com/quiet324/LiangYouAlbums6/1708292/gbj_bfkz/gbj_bfkz0" + (arrayIndex + 1) + '.mp3';
    audio.duration = 720;
    audio.size = "3M";
    audio.albumName = "八福客栈广播剧";
    audio.albumId = 6004;
    // audio.id = 199888180 + arrayIndex;
    audio.id = 6004 * 1000000 + arrayIndex + 1;

    // audio.id = _.last(results).id + 1 + arrayIndex;

    audio.albumtitle = "八福客栈广播剧(" + (arrayIndex + 1) + ")";

    audios.push(audio);

});


fs.writeFile("./gbj_bfkz.json", JSON.stringify(audios, null, '\t'));


// fs.writeFile("./voschildrenbible.json", JSON.stringify(results, null, '\t'));