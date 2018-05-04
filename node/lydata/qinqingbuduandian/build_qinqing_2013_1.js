const Xray = require('x-ray');
const x = Xray();
const fs = require('fs');
const download = require('download');
const _ = require('lodash');


// const url = 'http://lydata.febcmedia.net/2013/02/01/?arcf=cat:154';
const url = 'http://lydata.febcmedia.net/2013/01/01/?arcf=cat:24'

// http://media.febcchinese.org/streaming/bv/bv130101.mp3
// http://media.febcchinese.org/streaming/up/up130102.mp3

// var results = JSON.parse(fs.readFileSync('./amoxishu.json', 'utf8'));


// x(url, '.entry-post p', [{
//         "content": '',
//         "title": ".title+"
//     }])

var audios = [];

for (var i = 1; i <= 31; i++) {

    var done = false;

    if (i < 10) {
        var realUrl = 'http://lydata.febcmedia.net/2013/01/0' + i + '/?arcf=cat:24';
    } else {
        var realUrl = 'http://lydata.febcmedia.net/2013/01/' + i + '/?arcf=cat:24';
    }
    x(realUrl, '.entry-post p', [{
            "content": ''
        }])
        (function(err, hrefs) {
            var audio = {};

            if (i < 10) {
                audio.title = hrefs[0].content + ' 2013010' + i;
                audio.path = 'http://media.febcchinese.org/streaming/up/up13010' + i + '.mp3';
            } else {
                audio.title = hrefs[0].content + ' 201301' + i;
                audio.path = 'http://media.febcchinese.org/streaming/up/up1301' + i + '.mp3';
            }

            console.log(audio.path);

            audio.duration = 1760;
            audio.size = "14.1M";
            audio.albumName = "亲情不断电 2013年春季合集";
            audio.id = 6247 * 1000000 + i;
            audio.albumId = 6247;
            audio.albumtitle = "亲情不断电 2013年春季合集" + "(" + (i) + ")";
            audio.textContent = JSON.stringify(hrefs, null, '\t');

            console.log(audio);
            var fileName = 'qinqing_' + i + '.json';

            // fs.writeFile(fileName, JSON.stringify(hrefs, null, '\t'));


            audios.push(audio);
            done = true;



        });


    require('deasync').loopWhile(function() { return !done; });
    fs.writeFile("qinqing_2013_1.json", JSON.stringify(audios, null, '\t'));
}