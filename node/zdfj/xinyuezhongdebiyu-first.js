const Xray = require('x-ray');
const x = Xray();
const fs = require('fs');
const download = require('download');
const _ = require('lodash');


const url = 'http://www.lyzhendao.net/Common/Reader/Channel/ShowPage.jsp?Cid=343&Pid=21&Version=0&Charset=gb2312&page=0';

// var results = JSON.parse(fs.readFileSync('./xinyunzhongdebiyu.json', 'utf8'));


x(url, 'table', [{
        "path": 'a@href',
        // "title": "li"
    }])
    (function(err, hrefs) {

        var hrefs = _.remove(hrefs, function(n) {
            return n.path.indexOf("biblexpo") !== -1;
        });


        var hrefs = _.remove(hrefs, function(n) {
            return n.path.indexOf(".pdf") === -1;
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
                    audio.duration = 1500;
                    audio.size = "5.5M";
                    audio.albumName = "《真道分解》新约中的比喻";
                    audio.albumId = 474;
                    audio.id = 474888180 + arrayIndex;
                    // audio.id = _.last(results).id + 1 + arrayIndex;

                    audio.albumtitle = "《真道分解》新约中的比喻(" + (audio.id - 474888180 + 1) + ")";


                });


                // var other = _.concat(results, titles);

                fs.writeFile("./xinyunzhongdebiyu.json", JSON.stringify(titles, null, '\t'));
            });


    });