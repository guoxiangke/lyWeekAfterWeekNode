const fs = require('fs');
var mkdirp = require('mkdirp');

// http://www.vos.org.tw/wp-content/uploads/EV-21.mp3

for (i = 151; i < 181; i++) {
    var path = 'http://www.vos.org.tw/wp-content/uploads/EV-' + i + '.mp3';

    console.log("downloading..." + path);

    var data = require('child_process').execFileSync('curl', ['--silent', '-L', path]);
    // var data = downloadFileSync(audio.downUrl)

    mkdirp.sync('./vosechoingvalley');

    fs.writeFileSync('./vosechoingvalley/' + 'vosechoingvalley0' + i + '.mp3', data);
}