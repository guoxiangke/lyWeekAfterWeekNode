const Xray = require('x-ray');
const x = Xray();
const fs = require('fs');
const download = require('download');
const _ = require('lodash');


const url = 'http://lydata.febcmedia.net/2016/07/01/?arcf=cat:10';

// http://media.febcchinese.org/streaming/bv/bv130101.mp3

// var results = JSON.parse(fs.readFileSync('./amoxishu.json', 'utf8'));


// x(url, '.entry-post p', [{
//         "content": '',
//         "title": ".title+"
//     }])

var year = "2016";
var year_short = "16";

var audios = [];

for (var i = 1; i <= 92; i++) {

    var done = false;

    if (i <= 9) {
        var realUrl = 'http://lydata.febcmedia.net/' + year + '/07/0' + i + '/?arcf=cat:10';

    } else if (i <= 31) {
        var realUrl = 'http://lydata.febcmedia.net/' + year + '/07/' + i + '/?arcf=cat:10';

    } else if (i <= 40) {
        var realUrl = 'http://lydata.febcmedia.net/' + year + '/08/0' + (i - 31) + '/?arcf=cat:10';

    } else if (i <= 62) {
        var realUrl = 'http://lydata.febcmedia.net/' + year + '/08/' + (i - 31) + '/?arcf=cat:10';

    } else if (i <= 71) {
        var realUrl = 'http://lydata.febcmedia.net/' + year + '/09/0' + (i - 31 - 31) + '/?arcf=cat:10';

    } else if (i <= 92) {
        var realUrl = 'http://lydata.febcmedia.net/' + year + '/09/' + (i - 31 - 31) + '/?arcf=cat:10';

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

            if (i <= 9) {
                audio.title = hrefs[0].content + ' ' + year + '070' + i;
                audio.path = 'http://media.febcchinese.org/streaming/mw/mw' + year_short + '070' + i + '.mp3';

            } else if (i <= 31) {
                audio.title = hrefs[0].content + ' ' + year + '07' + i;
                audio.path = 'http://media.febcchinese.org/streaming/mw/mw' + year_short + '07' + i + '.mp3';
            } else if (i <= 40) {
                audio.title = hrefs[0].content + ' ' + year + '080' + (i - 31);
                audio.path = 'http://media.febcchinese.org/streaming/mw/mw' + year_short + '080' + (i - 31) + '.mp3';
            } else if (i <= 62) {
                audio.title = hrefs[0].content + ' ' + year + '08' + (i - 31);
                audio.path = 'http://media.febcchinese.org/streaming/mw/mw' + year_short + '08' + (i - 31) + '.mp3';
            } else if (i <= 71) {
                audio.title = hrefs[0].content + ' ' + year + '090' + (i - 31 - 31);
                audio.path = 'http://media.febcchinese.org/streaming/mw/mw' + year_short + '090' + (i - 31 - 31) + '.mp3';
            } else if (i <= 92) {
                audio.title = hrefs[0].content + ' ' + year + '09' + (i - 31 - 31);
                audio.path = 'http://media.febcchinese.org/streaming/mw/mw' + year_short + '09' + (i - 31 - 31) + '.mp3';
            }


            console.log(audio.path);

            audio.duration = 1760;
            audio.size = "14.1M";
            audio.albumName = "旷野吗哪 " + year + "年秋季合集";
            audio.id = 6215 * 1000000 + i;
            audio.albumId = 6215;
            audio.albumtitle = "旷野吗哪 " + year + "年秋季合集" + "(" + i + ")";
            audio.textContent = JSON.stringify(hrefs, null, '\t');

            console.log(audio);
            var fileName = 'kuangyemana_' + i + '.json';

            // fs.writeFile(fileName, JSON.stringify(hrefs, null, '\t'));


            audios.push(audio);
            done = true;



        });


    require('deasync').loopWhile(function() { return !done; });
    fs.writeFile("kuangyemana_" + year + "_autumn.json", JSON.stringify(audios, null, '\t'));
}