const Xray = require('x-ray');
const x = Xray();
const fs = require('fs');
const download = require('download');
const _ = require('lodash');


const url = 'http://lydata.febcmedia.net/2015/01/01/?arcf=cat:154';

// http://media.febcchinese.org/streaming/bv/bv130101.mp3

// var results = JSON.parse(fs.readFileSync('./amoxishu.json', 'utf8'));


// x(url, '.entry-post p', [{
//         "content": '',
//         "title": ".title+"
//     }])

var audios = [];

for (var i = 1; i <= 90; i++) {

    var done = false;

    if (i <= 9) {
        var realUrl = 'http://lydata.febcmedia.net/2015/01/0' + i + '/?arcf=cat:154';
    } else if (i <= 31) {
        var realUrl = 'http://lydata.febcmedia.net/2015/01/' + i + '/?arcf=cat:154';
    } else if (i <= 40) {
        var realUrl = 'http://lydata.febcmedia.net/2015/02/0' + (i - 31) + '/?arcf=cat:154';
    } else if (i <= 59) {
        var realUrl = 'http://lydata.febcmedia.net/2015/02/' + (i - 31) + '/?arcf=cat:154';
    } else if (i <= 68) {
        var realUrl = 'http://lydata.febcmedia.net/2015/03/0' + (i - 31 - 28) + '/?arcf=cat:154';
    } else if (i <= 90) {
        var realUrl = 'http://lydata.febcmedia.net/2015/03/' + (i - 31 - 28) + '/?arcf=cat:154';
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
                audio.title = hrefs[0].content + ' 2015010' + i;
                audio.path = 'http://media.febcchinese.org/streaming/bv/bv15010' + i + '.mp3';
            } else if (i <= 31) {
                audio.title = hrefs[0].content + ' 201501' + i;
                audio.path = 'http://media.febcchinese.org/streaming/bv/bv1501' + i + '.mp3';
            } else if (i <= 40) {
                audio.title = hrefs[0].content + ' 2015020' + (i - 31);
                audio.path = 'http://media.febcchinese.org/streaming/bv/bv15020' + (i - 31) + '.mp3';
            } else if (i <= 59) {
                audio.title = hrefs[0].content + ' 201502' + (i - 31);
                audio.path = 'http://media.febcchinese.org/streaming/bv/bv1502' + (i - 31) + '.mp3';
            } else if (i <= 68) {
                audio.title = hrefs[0].content + ' 2015030' + (i - 31 - 28);
                audio.path = 'http://media.febcchinese.org/streaming/bv/bv15030' + (i - 31 - 28) + '.mp3';
            } else if (i <= 90) {
                audio.title = hrefs[0].content + ' 201503' + (i - 31 - 28);
                audio.path = 'http://media.febcchinese.org/streaming/bv/bv1503' + (i - 31 - 28) + '.mp3';
            }

            console.log(audio.path);

            audio.duration = 1760;
            audio.size = "14.1M";
            audio.albumName = "灵命日粮 2015年春季合集";
            audio.id = 6208 * 1000000 + i;
            audio.albumId = 6208;
            audio.albumtitle = "灵命日粮 2015年春季合集" + "(" + i + ")";
            audio.textContent = JSON.stringify(hrefs, null, '\t');

            console.log(audio);
            var fileName = 'kuangyemana_' + i + '.json';

            // fs.writeFile(fileName, JSON.stringify(hrefs, null, '\t'));


            audios.push(audio);
            done = true;



        });


    require('deasync').loopWhile(function() { return !done; });
    fs.writeFile("kuangyemana_2015_spring.json", JSON.stringify(audios, null, '\t'));
}