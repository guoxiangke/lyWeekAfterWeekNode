const Xray = require('x-ray');
const x = Xray();
const fs = require('fs');
const download = require('download');
const _ = require('lodash');


const url = 'http://lydata.febcmedia.net/2015/04/01/?arcf=cat:154';

// http://media.febcchinese.org/streaming/bv/bv130101.mp3

// var results = JSON.parse(fs.readFileSync('./amoxishu.json', 'utf8'));


// x(url, '.entry-post p', [{
//         "content": '',
//         "title": ".title+"
//     }])

var audios = [];

for (var i = 1; i <= 91; i++) {

    var done = false;

    if (i <= 9) {
        var realUrl = 'http://lydata.febcmedia.net/2015/04/0' + i + '/?arcf=cat:154';
    } else if (i <= 30) {
        var realUrl = 'http://lydata.febcmedia.net/2015/04/' + i + '/?arcf=cat:154';
    } else if (i <= 39) {
        var realUrl = 'http://lydata.febcmedia.net/2015/05/0' + (i - 30) + '/?arcf=cat:154';
    } else if (i <= 61) {
        var realUrl = 'http://lydata.febcmedia.net/2015/05/' + (i - 30) + '/?arcf=cat:154';
    } else if (i <= 70) {
        var realUrl = 'http://lydata.febcmedia.net/2015/06/0' + (i - 30 - 31) + '/?arcf=cat:154';
    } else if (i <= 91) {
        var realUrl = 'http://lydata.febcmedia.net/2015/06/' + (i - 30 - 31) + '/?arcf=cat:154';
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
                audio.title = hrefs[0].content + ' 2015040' + i;
                audio.path = 'http://media.febcchinese.org/streaming/bv/bv15040' + i + '.mp3';
            } else if (i <= 30) {
                audio.title = hrefs[0].content + ' 201504' + i;
                audio.path = 'http://media.febcchinese.org/streaming/bv/bv1504' + i + '.mp3';
            } else if (i <= 39) {
                audio.title = hrefs[0].content + ' 2015050' + (i - 30);
                audio.path = 'http://media.febcchinese.org/streaming/bv/bv15050' + (i - 30) + '.mp3';
            } else if (i <= 61) {
                audio.title = hrefs[0].content + ' 201505' + (i - 30);
                audio.path = 'http://media.febcchinese.org/streaming/bv/bv1505' + (i - 30) + '.mp3';
            } else if (i <= 70) {
                audio.title = hrefs[0].content + ' 2015060' + (i - 31 - 30);
                audio.path = 'http://media.febcchinese.org/streaming/bv/bv15060' + (i - 31 - 30) + '.mp3';
            } else if (i <= 91) {
                audio.title = hrefs[0].content + ' 201506' + (i - 31 - 30);
                audio.path = 'http://media.febcchinese.org/streaming/bv/bv1506' + (i - 31 - 30) + '.mp3';
            }


            console.log(audio.path);

            audio.duration = 1760;
            audio.size = "14.1M";
            audio.albumName = "灵命日粮 2015年夏季合集";
            audio.id = 6209 * 1000000 + i;
            audio.albumId = 6209;
            audio.albumtitle = "灵命日粮 2015年夏季合集" + "(" + i + ")";
            audio.textContent = JSON.stringify(hrefs, null, '\t');

            console.log(audio);
            var fileName = 'kuangyemana_' + i + '.json';

            // fs.writeFile(fileName, JSON.stringify(hrefs, null, '\t'));


            audios.push(audio);
            done = true;



        });


    require('deasync').loopWhile(function() { return !done; });
    fs.writeFile("kuangyemana_2015_summer.json", JSON.stringify(audios, null, '\t'));
}