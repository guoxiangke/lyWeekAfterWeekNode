const Xray = require('x-ray');
const x = Xray();
const fs = require('fs');
const download = require('download');
const _ = require('lodash');


const url = 'http://www.lyzhendao.net/Common/Reader/Channel/ShowPage.jsp?Cid=167&Pid=16&Version=0&Charset=gb2312&page=3';

var results = JSON.parse(fs.readFileSync('./mingshuji.json', 'utf8'));

// x('http://www.lyzhendao.net/Common/Reader/Channel/ShowPage.jsp?Cid=158&Pid=16&Version=0&Charset=gb2312&page=1', 'div', [{
//         // "path": 'a@href',
//         "title": "li"
//     }])
x(url, 'table', [{
        "path": 'a@href',
        // "title": "li"
    }])
    (function(err, hrefs) {
        var hrefs = _.remove(hrefs, function(n) {
            return n.path.indexOf("biblexpo") !== -1;
        });


        x(url, 'div', [{
                // "path": 'a@href',
                "title": "li"
            }])
            (function(err, titles) {

                titles.forEach(function(audio, arrayIndex) {

                    audio.title = audio.title.trim();
                    audio.path = hrefs[arrayIndex].path;
                    audio.duration = 1760;
                    audio.size = "4.8M";
                    audio.albumName = "《真道分解》民数记";
                    audio.albumId = 404;
                    // audio.id = 404888180 + arrayIndex;
                    audio.id = _.last(results).id + 1 + arrayIndex;

                    audio.albumtitle = "《真道分解》民数记(" + (audio.id - 404888180 + 1) + ")";
                    audio.artistId = 36;
                    audio.artistName = "真道分解";
                });

                var other = _.concat(results, titles);

                fs.writeFile("./mingshuji.json", JSON.stringify(other, null, '\t'));
            });



        // results.forEach(function(href, arrayIndex) {


        //     // audio.duration = 1760;
        //     // audio.size = "14.1M";
        //     // audio.albumName = "《生活无国界》今天我主播";
        //     // audio.albumId = 196;
        //     // audio.id = 196888180 + arrayIndex;
        //     // audio.albumtitle = "今天我主播(" + (arrayIndex + 1) + ")";

        // });

        // fs.writeFile("./chuanshiji.json", JSON.stringify(results, null, '\t'));
    });