const fs = require('fs');


var _getAllFilesFromFolder = function(dir) {

    var filesystem = require("fs");
    var results = [];

    filesystem.readdirSync(dir).forEach(function(file) {

        results.push(file);

    });

    return results;

};

const files = _getAllFilesFromFolder(__dirname + "/biblerevelation");
// console.log(files);

// var results = JSON.parse(fs.readFileSync('./voschildrenbible.json', 'utf8'));
// console.log(results);

// results.forEach(function(audio, arrayIndex) {


//     console.log(files[arrayIndex + 1]);
//     audio.title = files[arrayIndex + 1]


//     var index = audio.title.indexOf('-');
//     var sub = audio.title.substring(index + 1);
//     audio.title = sub.substring(0, sub.length - 4);

//     audio.path = 'https://rawcdn.githack.com/quiet324/VOSAlbum/1706159/voschildrenbible/voschildrenbible0' + (arrayIndex + 6) + '.mp3'

// });

files.forEach(function(file, arrayIndex) {
    console.log(file);


    fs.rename(__dirname + "/biblerevelation/" + file, __dirname + "/biblerevelation/" + 'biblerevelation0' + (arrayIndex + 1) + '.mp3', function(err) {
        if (err) console.log('ERROR: ' + err);
    });



});



// fs.writeFile("./voschildrenbible.json", JSON.stringify(results, null, '\t'));