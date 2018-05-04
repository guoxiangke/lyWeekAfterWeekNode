const fs = require('fs');
var mkdirp = require('mkdirp');


for (i = 2; i < 29; i++) {
    var path = 'www.vos.org.tw/wp-content/uploads/2-6-2YPLK-' + i + '.mp3';

    console.log("downloading..." + path);

    var data = require('child_process').execFileSync('curl', ['--silent', '-L', path]);
    // var data = downloadFileSync(audio.downUrl)

    mkdirp.sync('./voshappyaplan');

    fs.writeFileSync('./voshappyaplan/' + 'voshappyaplan0' + i + '.mp3', data);
}