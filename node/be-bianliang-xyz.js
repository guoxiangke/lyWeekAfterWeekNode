const fs = require('fs');
var mkdirp = require('mkdirp');

var results = JSON.parse(fs.readFileSync('../all-artists-json-files/artist_1_xyz_songs.json', 'utf8'));

results.forEach(function(audio, arrayIndex) {

    console.log("downloading..." + audio.path);

    var data = require('child_process').execFileSync('curl', ['--silent', '-L', audio.path]);
    // var data = downloadFileSync(audio.downUrl)

    mkdirp.sync('../be');

    fs.writeFileSync('../be/' + audio.time + '.mp3', data);


});