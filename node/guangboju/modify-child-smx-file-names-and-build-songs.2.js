const fs = require('fs');


var _getAllFilesFromFolder = function(dir) {

    var filesystem = require("fs");
    var results = [];

    filesystem.readdirSync(dir).forEach(function(file) {

        results.push(file);

    });

    return results;

};

const files = _getAllFilesFromFolder(__dirname + "/child_smx");
console.log(files);
// fs.writeFile("./gbj_tllc.json", JSON.stringify(files, null, '\t'));

const audios = [];

files.forEach(function(file, arrayIndex) {
    console.log(file);

    const audio = {};

    fs.rename(__dirname + "/child_smx/" + file, __dirname + "/child_smx/" + 'child_smx0' + (arrayIndex + 1) + '.mp3', function(err) {
        if (err) console.log('ERROR: ' + err);
    });

    // audio.title = file.substring(2, file.indexOf('.'));
    audio.path = "https://rawcdn.githack.com/quiet324/LiangYouAlbums6/170831/child_smx/child_smx0" + (arrayIndex + 1) + '.mp3';
    audio.duration = 1000;
    audio.size = "4M";
    audio.albumName = "睡梦乡儿童圣经故事";
    audio.albumId = 6005;
    // audio.id = 199888180 + arrayIndex;
    audio.id = 6005 * 1000000 + arrayIndex + 1;

    // audio.id = _.last(results).id + 1 + arrayIndex;

    audio.albumtitle = "睡梦乡儿童圣经故事(" + (arrayIndex + 1) + ")";

    audios.push(audio);

});


fs.writeFile("./child_smx.json", JSON.stringify(audios, null, '\t'));


// fs.writeFile("./voschildrenbible.json", JSON.stringify(results, null, '\t'));