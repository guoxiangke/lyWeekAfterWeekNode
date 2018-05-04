const fs = require('fs');
var mkdirp = require('mkdirp');


for (i = 7; i < 41; i++) {
    var path = 'www.vos.org.tw/wp-content/uploads/5-1PRAY-' + i + '.mp3';

    console.log("downloading..." + path);

    var data = require('child_process').execFileSync('curl', ['--silent', '-L', path]);
    // var data = downloadFileSync(audio.downUrl)

    mkdirp.sync('./prayforchildren');

    fs.writeFileSync('./prayforchildren/' + 'vosprayforchildren0' + i + '.mp3', data);
}