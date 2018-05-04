const fs = require('fs');

var results = JSON.parse(fs.readFileSync('./cgbc-js-songs.json', 'utf8'));

results.forEach(function(audio, arrayIndex) {


    results = results.reverse();
    results.forEach(function(audio, arrayIndex) {

        audio.duration = 1760;
        audio.size = "14.1M";
        audio.albumName = "华播每日节目";
        audio.albumId = 328;
        audio.id = 328888180 + arrayIndex;
        audio.albumtitle = "华播每日节目(" + (arrayIndex + 1) + ")";
        audio.path = audio.mp3;

    });

});

results.forEach(function(audio, arrayIndex) {


    results = results.reverse();
    results.forEach(function(audio, arrayIndex) {

        audio.duration = 1760;
        audio.size = "14.1M";
        audio.albumName = "华播每日节目";
        audio.albumId = 328;
        audio.id = 328888180 + arrayIndex;
        audio.albumtitle = "华播每日节目(" + (arrayIndex + 1) + ")";
        delete audio["mp3"];


    });

});


fs.writeFile("./cgbceveryday.json", JSON.stringify(results, null, '\t'));