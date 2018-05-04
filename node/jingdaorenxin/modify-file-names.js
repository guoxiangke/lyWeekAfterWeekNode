const fs = require('fs');


var _getAllFilesFromFolder = function(dir) {

    var filesystem = require("fs");
    var results = [];

    filesystem.readdirSync(dir).forEach(function(file) {

        results.push(file);

    });

    return results;

};

const files = _getAllFilesFromFolder(__dirname + "/ba2015");
console.log(files);
fs.writeFile("./ba2015_names.json", JSON.stringify(files, null, '\t'));

const audios = [];

files.forEach(function(file, arrayIndex) {
    console.log(file);

    // const audio = {};

    // fs.rename(__dirname + "/files/" + file, __dirname + "/files/" + 'sundazhong0' + (arrayIndex + 1) + '.mp3', function(err) {
    //     if (err) console.log('ERROR: ' + err);
    // });

    // audio.title = file.substring(2, file.indexOf('.'));
    // audio.path = "https://rawcdn.githack.com/quiet324/LiangYouAlbums3/170702/sundazhong/sundazhong0" + (arrayIndex + 1) + '.mp3';
    // audio.duration = 2400;
    // audio.size = "40M";
    // audio.albumName = "《与神同行》孙大中";
    // audio.albumId = 199;
    // audio.id = 199888180 + arrayIndex;
    // // audio.id = _.last(results).id + 1 + arrayIndex;

    // audio.albumtitle = "《与神同行》孙大中(" + (arrayIndex + 1) + ")";

    // audios.push(audio);

});


// fs.writeFile("./sundazhong.json", JSON.stringify(audios, null, '\t'));


// fs.writeFile("./voschildrenbible.json", JSON.stringify(results, null, '\t'));