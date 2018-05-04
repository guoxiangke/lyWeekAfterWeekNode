const fs = require('fs');


var _getAllFilesFromFolder = function(dir) {

    var filesystem = require("fs");
    var results = [];

    filesystem.readdirSync(dir).forEach(function(file) {

        results.push(file);

    });

    return results;

};

const files = _getAllFilesFromFolder(__dirname + "/all");


files.forEach(function(file, arrayIndex) {
    console.log(file);


    const fs = require('fs');

    var results = JSON.parse(fs.readFileSync(__dirname + "/all/" + file, 'utf8'));

    results.forEach(function(audio, arrayIndex) {


        audio.artistId = 0;
        audio.artistName = "";


    });

    fs.writeFile(file, JSON.stringify(results, null, '\t'));


});



// fs.writeFile("./voschildrenbible.json", JSON.stringify(results, null, '\t'));