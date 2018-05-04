const Xray = require('x-ray');
const x = Xray();
const fs = require('fs');
const download = require('download');
const _ = require('lodash');


const url = 'http://www.lyzhendao.net/Common/Reader/Channel/ShowPage.jsp?Cid=301&Pid=21&Version=0&Charset=gb2312&page=0';

// var results = JSON.parse(fs.readFileSync('./mataifuyinjinghua.json', 'utf8'));


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
                    audio.duration = 1600;
                    audio.size = "4.7M";
                    audio.albumName = "《真道分解》马太福音精华点滴";
                    audio.albumId = 481;
                    audio.id = 481888180 + arrayIndex;
                    // audio.id = _.last(results).id + 1 + arrayIndex;

                    audio.albumtitle = "《真道分解》马太福音精华点滴(" + (audio.id - 481888180 + 1) + ")";


                });


                // var other = _.concat(results, titles);

                fs.writeFile("./mataifuyinjinghua.json", JSON.stringify(titles, null, '\t'));
            });


    });