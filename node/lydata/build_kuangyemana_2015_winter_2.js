const Xray = require('x-ray');
const x = Xray();
const fs = require('fs');
const download = require('download');
const _ = require('lodash');


const url = 'http://lydata.febcmedia.net/2015/10/25/?arcf=cat:10';

// http://media.febcchinese.org/streaming/bv/bv130101.mp3

// var results = JSON.parse(fs.readFileSync('./amoxishu.json', 'utf8'));


// x(url, '.entry-post p', [{
//         "content": '',
//         "title": ".title+"
//     }])

var audios = [];

for (var i = 25; i <= 92; i++) {

    var done = false;

    if (i <= 9) {
        var realUrl = 'http://lydata.febcmedia.net/2015/10/0' + i + '/?arcf=cat:10';
    } else if (i <= 31) {
        var realUrl = 'http://lydata.febcmedia.net/2015/10/' + i + '/?arcf=cat:10';
    } else if (i <= 40) {
        var realUrl = 'http://lydata.febcmedia.net/2015/11/0' + (i - 31) + '/?arcf=cat:10';
    } else if (i <= 61) {
        var realUrl = 'http://lydata.febcmedia.net/2015/11/' + (i - 31) + '/?arcf=cat:10';
    } else if (i <= 70) {
        var realUrl = 'http://lydata.febcmedia.net/2015/12/0' + (i - 31 - 30) + '/?arcf=cat:10';
    } else if (i <= 92) {
        var realUrl = 'http://lydata.febcmedia.net/2015/12/' + (i - 31 - 30) + '/?arcf=cat:10';
    }
    x(realUrl, '.entry-post p', [{
            "content": ''
        }])
        (function(err, hrefs) {
            var audio = {};

            // if (i < 10) {
            //     audio.title = hrefs[0].content + ' 2014010' + i;
            //     audio.path = 'http://media.febcchinese.org/streaming/bv/bv14010' + i + '.mp3';
            // } else {
            //     audio.title = hrefs[0].content + ' 201401' + i;
            //     audio.path = 'http://media.febcchinese.org/streaming/bv/bv1401' + i + '.mp3';
            // }
            // http://media.febcchinese.org/streaming/mw/mw151025.mp3

            if (i <= 9) {
                audio.title = hrefs[0].content + ' 2015100' + i;
                audio.path = 'http://media.febcchinese.org/streaming/mw/mw15100' + i + '.mp3';
            } else if (i <= 31) {
                audio.title = hrefs[0].content + ' 201510' + i;
                audio.path = 'http://media.febcchinese.org/streaming/mw/mw1510' + i + '.mp3';
            } else if (i <= 40) {
                audio.title = hrefs[0].content + ' 2015110' + (i - 31);
                audio.path = 'http://media.febcchinese.org/streaming/mw/mw15110' + (i - 31) + '.mp3';
            } else if (i <= 61) {
                audio.title = hrefs[0].content + ' 201511' + (i - 31);
                audio.path = 'http://media.febcchinese.org/streaming/mw/mw1511' + (i - 31) + '.mp3';
            } else if (i <= 70) {
                audio.title = hrefs[0].content + ' 2015120' + (i - 31 - 30);
                audio.path = 'http://media.febcchinese.org/streaming/mw/mw15120' + (i - 31 - 30) + '.mp3';
            } else if (i <= 92) {
                audio.title = hrefs[0].content + ' 201512' + (i - 31 - 30);
                audio.path = 'http://media.febcchinese.org/streaming/mw/mw1512' + (i - 31 - 30) + '.mp3';
            }


            console.log(audio.path);

            audio.duration = 1760;
            audio.size = "14.1M";
            audio.albumName = "旷野吗哪 2015年冬季合集";
            audio.id = 6212 * 1000000 + i;
            audio.albumId = 6212;
            audio.albumtitle = "旷野吗哪 2015年冬季合集" + "(" + (i - 24) + ")";
            audio.textContent = JSON.stringify(hrefs, null, '\t');

            console.log(audio);
            var fileName = 'kuangyemana_' + i + '.json';

            // fs.writeFile(fileName, JSON.stringify(hrefs, null, '\t'));


            audios.push(audio);
            done = true;



        });


    require('deasync').loopWhile(function() { return !done; });
    fs.writeFile("kuangyemana_2015_winter_2.json", JSON.stringify(audios, null, '\t'));
}