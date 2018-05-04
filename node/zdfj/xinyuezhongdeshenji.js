const Xray = require('x-ray');
const x = Xray();
const fs = require('fs');
const download = require('download');
const _ = require('lodash');


const url = 'http://www.lyzhendao.net/Common/Reader/Channel/ShowPage.jsp?Cid=342&Pid=21&Version=0&Charset=gb2312&page=1';

var results = JSON.parse(fs.readFileSync('./xinyunzhongdeshenji.json', 'utf8'));


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
                    audio.duration = 1400;
                    audio.size = "5M";
                    audio.albumName = "《真道分解》新约中的神迹";
                    audio.albumId = 473;
                    // audio.id = 473888180 + arrayIndex;
                    audio.id = _.last(results).id + 1 + arrayIndex;

                    audio.albumtitle = "《真道分解》新约中的神迹(" + (audio.id - 473888180 + 1) + ")";


                });


                var other = _.concat(results, titles);

                fs.writeFile("./xinyunzhongdeshenji.json", JSON.stringify(other, null, '\t'));
            });


    });