const Xray = require('x-ray');
const x = Xray();
const fs = require('fs');
const download = require('download');
const _ = require('lodash');


const url = 'http://www.lyzhendao.net/Common/Reader/Channel/ShowPage.jsp?Cid=237&Pid=20&Version=0&Charset=gb2312&page=34';

var results = JSON.parse(fs.readFileSync('./shengjingxinxiang.json', 'utf8'));


x(url, 'table', [{
        "path": 'a@href',
        // "title": "li"
    }])
    (function(err, hrefs) {

        console.log(hrefs);
        var hrefs = _.remove(hrefs, function(n) {
            return n.path.indexOf("biblexpo") !== -1;
        });




        x(url, 'div', [{
                // "path": 'a@href',
                "title": "li"
            }])
            (function(err, titles) {


                var titles = _.remove(titles, function(n) {
                    return n.title.indexOf("问题") !== -1;
                });
                console.log(titles);

                titles.forEach(function(audio, arrayIndex) {

                    audio.title = audio.title.trim();
                    audio.path = hrefs[arrayIndex].path;
                    audio.duration = 300;
                    audio.size = "1M";
                    audio.albumName = "《真道分解》圣经信箱";
                    audio.albumId = 503;
                    // audio.id = 503888180 + arrayIndex;
                    audio.id = _.last(results).id + 1 + arrayIndex;

                    audio.albumtitle = "《真道分解》圣经信箱(" + (audio.id - 503888180 + 1) + ")";


                });


                var other = _.concat(results, titles);

                fs.writeFile("./shengjingxinxiang.json", JSON.stringify(other, null, '\t'));
            });


    });