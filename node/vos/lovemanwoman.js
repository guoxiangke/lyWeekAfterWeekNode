const fs = require('fs');
var mkdirp = require('mkdirp');


for (i = 1; i < 38; i++) {
    var path = 'www.vos.org.tw/wp-content/uploads/2-6-1YPTL-' + i + '.mp3';

    console.log("downloading..." + path);

    var data = require('child_process').execFileSync('curl', ['--silent', '-L', path]);
    // var data = downloadFileSync(audio.downUrl)

    mkdirp.sync('./lovemanwoman');

    fs.writeFileSync('./lovemanwoman/' + 'lovemanwoman0' + i + '.mp3', data);
}