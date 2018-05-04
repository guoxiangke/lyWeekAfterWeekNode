const fs = require('fs');
var mkdirp = require('mkdirp');


for (i = 47; i < 91; i++) {
    var path = 'www.vos.org.tw/wp-content/uploads/2-6-5YPQA-' + i + '.mp3';

    console.log("downloading..." + path);

    var data = require('child_process').execFileSync('curl', ['--silent', '-L', path]);
    // var data = downloadFileSync(audio.downUrl)

    mkdirp.sync('./vosfaithqanda');

    fs.writeFileSync('./vosfaithqanda/' + 'vosfaithqanda0' + i + '.mp3', data);
}