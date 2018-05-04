const Xray = require('x-ray');
const x = Xray();
const fs = require('fs');
const download = require('download');
const _ = require('lodash');


const url = 'http://www.lyzhendao.net/Common/Reader/Channel/ShowPage.jsp?Cid=165&Pid=16&Version=0&Charset=gb2312&page=2';

var results = JSON.parse(fs.readFileSync('./yueshuyaji.json', 'utf8'));

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
                    audio.duration = 890;
                    audio.size = "2.5M";
                    audio.albumName = "《真道分解》约书亚记";
                    audio.albumId = 406;
                    // audio.id = 406888180 + arrayIndex;
                    audio.id = _.last(results).id + 1 + arrayIndex;

                    audio.albumtitle = "《真道分解》约书亚记(" + (audio.id - 406888180 + 1) + ")";
                    audio.artistId = 36;
                    audio.artistName = "真道分解";
                });

                var other = _.concat(results, titles);

                fs.writeFile("./yueshuyaji.json", JSON.stringify(other, null, '\t'));
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