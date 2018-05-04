const fs = require('fs');
var mkdirp = require('mkdirp');


for (i = 36; i < 63; i++) {
    var path = 'www.vos.org.tw/wp-content/uploads/James-Hudson-Taylor-' + i + '.mp3';

    console.log("downloading..." + path);

    var data = require('child_process').execFileSync('curl', ['--silent', '-L', path]);
    // var data = downloadFileSync(audio.downUrl)

    mkdirp.sync('./vosjameshudsontaylor');


    fs.writeFileSync('./vosjameshudsontaylor/' + 'vosjameshudsontaylor0' + i + '.mp3', data);

}