const Xray = require('x-ray');
const x = Xray();
const fs = require('fs');
const download = require('download');
const _ = require('lodash');

var moment = require('moment-timezone');

moment.tz.setDefault('Asia/Shanghai');

var results = [];
for (var i = 1; i < 19; i++) {


    results.push(1);
    results.push(1);
    results.push(1);
    results.push(1);
    results.push(3);




}

// console.log(results);

var datesEnglish = ["2016/10/03"];
results.forEach(function(id) {
    var day = moment(datesEnglish.slice(-1)[0]).add(id, 'days').format("YYYY/MM/DD");
    datesEnglish.push(day);
});
var datesEnglish = datesEnglish.filter(function(e) { return e !== '2014/03/13'; });

var datesEnglish2 = ["20161003"];
results.forEach(function(id) {
    var day = moment(datesEnglish2.slice(-1)[0]).add(id, 'days').format("YYYYMMDD");
    datesEnglish2.push(day);
});

var datesEnglish2 = datesEnglish2.filter(function(e) { return e !== '20140313'; });


console.log(datesEnglish);

const url = 'http://lydata.febcmedia.net/2016/01/01/?arcf=cat:10';

// http://media.febcchinese.org/streaming/bv/bv130101.mp3

// var results = JSON.parse(fs.readFileSync('./amoxishu.json', 'utf8'));


// x(url, '.entry-post p', [{
//         "content": '',
//         "title": ".title+"
//     }])

var year = "2016";
var year_short = "16";
var catId = '24';
var shortName = 'up';

var audios = [];


datesEnglish.forEach(function(date, indexId) {
    var done = false;

    var realUrl = 'http://lydata.febcmedia.net/' + date + '/?arcf=cat:' + catId;

    x(realUrl, '.entry-post span', [{
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

            audio.title = hrefs[0].content + ' ' + datesEnglish2[indexId];
            audio.path = 'http://media.febcchinese.org/streaming/' + shortName + '/' + shortName + datesEnglish2[indexId].substring(2) + '.mp3';

            console.log(audio.path);

            audio.duration = 1760;
            audio.size = "14.1M";
            audio.albumName = "亲情不断电 " + year + "年冬季合集";
            audio.id = 6262 * 1000000 + (indexId + 1);
            audio.albumId = 6262;
            audio.albumtitle = "亲情不断电 " + year + "年冬季合集" + "(" + (indexId + 1) + ")";
            audio.textContent = JSON.stringify(hrefs, null, '\t');

            console.log(audio);
            var fileName = 'qinqing_' + i + '.json';

            // fs.writeFile(fileName, JSON.stringify(hrefs, null, '\t'));


            audios.push(audio);
            done = true;



        });


    require('deasync').loopWhile(function() { return !done; });
    fs.writeFile("qinqing_" + year + "_winter.json", JSON.stringify(audios, null, '\t'));
});