const Xray = require('x-ray');
const x = Xray();
const fs = require('fs');
const download = require('download');
const _ = require('lodash');


const url = 'http://www.lyzhendao.net/Common/Reader/Channel/ShowPage.jsp?Cid=338&Pid=21&Version=0&Charset=gb2312&page=4';

var results = JSON.parse(fs.readFileSync('./qiuyuegailun.json', 'utf8'));


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

                var titles = _.remove(titles, function(n) {
                    return n.title.indexOf("第") !== -1;
                });
                console.log(titles);

                titles.forEach(function(audio, arrayIndex) {

                    audio.title = audio.title.trim();
                    audio.path = hrefs[arrayIndex].path;
                    audio.duration = 1200;
                    audio.size = "4M";
                    audio.albumName = "《真道分解》旧约概论";
                    audio.albumId = 464;
                    // audio.id = 464888180 + arrayIndex;
                    audio.id = _.last(results).id + 1 + arrayIndex;

                    audio.albumtitle = "《真道分解》旧约概论(" + (audio.id - 464888180 + 1) + ")";


                });


                var other = _.concat(results, titles);

                fs.writeFile("./qiuyuegailun.json", JSON.stringify(other, null, '\t'));
            });


    });