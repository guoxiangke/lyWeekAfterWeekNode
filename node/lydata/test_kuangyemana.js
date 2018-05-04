const Xray = require('x-ray');
const x = Xray();
const fs = require('fs');
const download = require('download');
const _ = require('lodash');


const url = 'http://lydata.febcmedia.net/2013/01/01/?arcf=cat:154';

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
        var realUrl = 'http://lydata.febcmedia.net/2013/01/0' + i + '/?arcf=cat:154';
    } else {
        var realUrl = 'http://lydata.febcmedia.net/2013/01/' + i + '/?arcf=cat:154';
    }
    x(realUrl, '.entry-post p', [{
            "content": ''
        }])
        (function(err, hrefs) {
            // var hrefs = _.remove(hrefs, function(n) {
            //     return n.path.indexOf("biblexpo") !== -1;
            // });


            // http://113.215.21.17/1Q2W3E4R5T6Y7U8I9O0P1Z2X3C4V5B/media.feearadio.net/downloads//others/Drama/YU_drama/158.mp3


            // x(url, 'div', [{
            //         // "path": 'a@href',
            //         "title": "li"
            //     }])
            //     (function(err, titles) {

            // var hrefs = _.remove(titles, function(n) {
            //     return n.title.indexOf("第") !== -1;
            // });
            console.log(hrefs);
            // hrefs = hrefs.reverse();

            // hrefs.forEach(function(audio, arrayIndex) {

            //     audio.title = audio.title.trim();
            //     // audio.title = audio.title.trim().substring(2).trim();


            //     var index = hrefs[arrayIndex].path.indexOf("/downloads");
            //     var sub = hrefs[arrayIndex].path.substring(index + 1);

            //     console.log(index);
            //     console.log(sub);


            //     audio.path = "http://media.feearadio.net/" + sub.substring(0, sub.length - 7);

            //     console.log(audio.path);

            //     audio.duration = 1500;
            //     audio.size = "12M";
            //     audio.albumName = "夫妻關係講座-王壽南";
            //     // audio.albumId = 6008;
            //     // audio.id = 6008888180 + arrayIndex;
            //     // audio.id = _.last(results).id + 1 + arrayIndex;

            //     audio.id = 6033 * 1000000 + arrayIndex + 1;
            //     audio.albumId = 6033;
            //     audio.albumtitle = "夫妻關係講座-王壽南" + "(" + (arrayIndex + 1) + ")";

            //     // audio.albumtitle = "绝妙小剧场(" + (audio.id - 429888180 + 1) + ")";
            //     // audio.artistId = 36;
            //     // audio.artistName = "真道分解";

            // });


            // var other = _.concat(results, titles);


            var audio = {};

            if (i < 10) {
                audio.title = hrefs[0].content + ' 2013010' + i;
                audio.path = 'http://media.febcchinese.org/streaming/bv/bv13010' + i + '.mp3';
            } else {
                audio.title = hrefs[0].content + ' 201301' + i;
                audio.path = 'http://media.febcchinese.org/streaming/bv/bv1301' + i + '.mp3';
            }

            console.log(audio.path);

            audio.duration = 1760;
            audio.size = "14.1M";
            audio.albumName = "灵命日粮 2013年春季合集";
            audio.id = 6200 * 1000000 + i;
            audio.albumId = 6200;
            audio.albumtitle = "灵命日粮 2013年春季合集" + "(" + (i) + ")";
            audio.textContent = JSON.stringify(hrefs, null, '\t');

            console.log(audio);
            var fileName = 'kuangyemana_' + i + '.json';

            // fs.writeFile(fileName, JSON.stringify(hrefs, null, '\t'));


            audios.push(audio);
            done = true;



        });


    require('deasync').loopWhile(function() { return !done; });
    fs.writeFile("kuangyemana_2013_1.json", JSON.stringify(audios, null, '\t'));
}