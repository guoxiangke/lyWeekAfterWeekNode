const fs = require('fs');
var mkdirp = require('mkdirp');


for (i = 47; i < 61; i++) {
    if (i < 10) {
        var path = 'www.vos.org.tw/wp-content/uploads/CMN_SLPDYK_000' + i + '.mp3';

    } else {
        var path = 'www.vos.org.tw/wp-content/uploads/CMN_SLPDYK_00' + i + '.mp3';

    }

    console.log("downloading..." + path);

    var data = require('child_process').execFileSync('curl', ['--silent', '-L', path]);
    // var data = downloadFileSync(audio.downUrl)

    mkdirp.sync('./vosjesusstorychinese');

    if (i < 10) {
        fs.writeFileSync('./vosjesusstorychinese/' + 'vosjesusstorychinese000' + i + '.mp3', data);

    } else {
        fs.writeFileSync('./vosjesusstorychinese/' + 'vosjesusstorychinese00' + i + '.mp3', data);

    }
}