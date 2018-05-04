const Xray = require('x-ray');
const x = Xray();
const fs = require('fs');
const download = require('download');
const _ = require('lodash');


const url = 'http://lydata.febcmedia.net/2012/01/?arcf=cat:17';
// http://media.febcchinese.org/streaming/bv/bv130101.mp3

// var results = JSON.parse(fs.readFileSync('./amoxishu.json', 'utf8'));


// x(url, '.entry-post p', [{
//         "content": '',
//         "title": ".title+"
//     }])

var year = "2012";
var year_short = "12";
var is_month_2_29_days = 1;
var artistShortName = "bf";
var urlCatId = 17;


var audios = [];

for (var i = 1; i <= 90 + is_month_2_29_days; i++) {

    var done = false;

    if (i <= 31) {
        var realUrl = 'http://lydata.febcmedia.net/' + year + '/01' + '/?arcf=cat:' + urlCatId;
    } else if (i <= 59 + is_month_2_29_days) {
        var realUrl = 'http://lydata.febcmedia.net/' + year + '/02' + '/?arcf=cat:' + urlCatId;
    } else if (i <= 90 + is_month_2_29_days) {
        var realUrl = 'http://lydata.febcmedia.net/' + year + '/03' + '/?arcf=cat:' + urlCatId;
    }

    console.log(realUrl);
    x(realUrl, '#UL_mp3j_0 .li-mjp a', [{
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
                audio.title = hrefs[0].content + ' ' + year + '010' + i;
                audio.path = 'http://media.febcchinese.org/streaming/' + artistShortName + '/' + artistShortName + year_short + '010' + i + '.mp3';
            } else if (i <= 31) {
                audio.title = hrefs[0].content + ' ' + year + '01' + i;
                audio.path = 'http://media.febcchinese.org/streaming/' + artistShortName + '/' + artistShortName + year_short + '01' + i + '.mp3';
            } else if (i <= 40) {
                audio.title = hrefs[0].content + ' ' + year + '020' + (i - 31);
                audio.path = 'http://media.febcchinese.org/streaming/' + artistShortName + '/' + artistShortName + year_short + '020' + (i - 31) + '.mp3';
            } else if (i <= 59 + is_month_2_29_days) {
                audio.title = hrefs[0].content + ' ' + year + '02' + (i - 31);
                audio.path = 'http://media.febcchinese.org/streaming/' + artistShortName + '/' + artistShortName + year_short + '02' + (i - 31) + '.mp3';
            } else if (i <= 68 + is_month_2_29_days) {
                audio.title = hrefs[0].content + ' ' + year + '030' + (i - 31 - 28 - is_month_2_29_days);
                audio.path = 'http://media.febcchinese.org/streaming/' + artistShortName + '/' + artistShortName + year_short + '030' + (i - 31 - 28 - is_month_2_29_days) + '.mp3';
            } else if (i <= 90 + is_month_2_29_days) {
                audio.title = hrefs[0].content + ' ' + year + '03' + (i - 31 - 28 - is_month_2_29_days);
                audio.path = 'http://media.febcchinese.org/streaming/' + artistShortName + '/' + artistShortName + year_short + '03' + (i - 31 - 28 - is_month_2_29_days) + '.mp3';
            }

            console.log(audio.path);

            audio.duration = 1760;
            audio.size = "14.1M";
            audio.albumName = "幸福满家园 " + year + "年春季合集";
            audio.id = 6213 * 1000000 + i;
            audio.albumId = 6213;
            audio.albumtitle = "幸福满家园 " + year + "年春季合集" + "(" + i + ")";
            audio.textContent = JSON.stringify(hrefs, null, '\t');

            console.log(audio);
            var fileName = artistShortName + '_' + i + '.json';

            // fs.writeFile(fileName, JSON.stringify(hrefs, null, '\t'));


            audios.push(audio);
            done = true;



        });


    require('deasync').loopWhile(function() { return !done; });
    fs.writeFile(artistShortName + "_" + year + "_spring.json", JSON.stringify(audios, null, '\t'));
}