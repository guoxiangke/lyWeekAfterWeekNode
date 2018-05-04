const Xray = require('x-ray');
const x = Xray();
const fs = require('fs');
const download = require('download');
const _ = require('lodash');


const url = 'http://lydata.febcmedia.net/2013/03/31/?arcf=cat:154';

// http://media.febcchinese.org/streaming/bv/bv130101.mp3

// var results = JSON.parse(fs.readFileSync('./amoxishu.json', 'utf8'));


// x(url, '.entry-post p', [{
//         "content": '',
//         "title": ".title+"
//     }])

var audios = [];

for (var i = 1; i < 32; i++) {

    var done = false;

    if (i < 10) {
        var realUrl = 'http://lydata.febcmedia.net/2013/03/0' + i + '/?arcf=cat:154';
    } else {
        var realUrl = 'http://lydata.febcmedia.net/2013/03/' + i + '/?arcf=cat:154';
    }
    x(realUrl, '.entry-post p', [{
            "content": ''
        }])
        (function(err, hrefs) {
            var audio = {};

            if (i < 10) {
                audio.title = hrefs[0].content + ' 2013030' + i;
                audio.path = 'http://media.febcchinese.org/streaming/bv/bv13030' + i + '.mp3';
            } else {
                audio.title = hrefs[0].content + ' 201303' + i;
                audio.path = 'http://media.febcchinese.org/streaming/bv/bv1303' + i + '.mp3';
            }

            console.log(audio.path);

            audio.duration = 1760;
            audio.size = "14.1M";
            audio.albumName = "灵命日粮 2013年春季合集";
            audio.id = 6200 * 1000000 + i + 31 + 28;
            audio.albumId = 6200;
            audio.albumtitle = "灵命日粮 2013年春季合集" + "(" + (i + 31 + 28) + ")";
            audio.textContent = JSON.stringify(hrefs, null, '\t');

            console.log(audio);
            var fileName = 'kuangyemana_' + i + '.json';

            // fs.writeFile(fileName, JSON.stringify(hrefs, null, '\t'));


            audios.push(audio);
            done = true;



        });


    require('deasync').loopWhile(function() { return !done; });
    fs.writeFile("kuangyemana_2013_3.json", JSON.stringify(audios, null, '\t'));
}