const Xray = require('x-ray');
const x = Xray();
const fs = require('fs');
const download = require('download');
const _ = require('lodash');


const url = 'http://www.lyzhendao.net/Common/Reader/Channel/ShowPage.jsp?Cid=306&Pid=21&Version=0&Charset=gb2312&page=0';

// var results = JSON.parse(fs.readFileSync('./renshiyesu.json', 'utf8'));


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
                    audio.size = "3.5M";
                    audio.albumName = "《真道分解》超乎万名之上的名：认识耶稣";
                    audio.albumId = 477;
                    audio.id = 477888180 + arrayIndex;
                    // audio.id = _.last(results).id + 1 + arrayIndex;

                    audio.albumtitle = "《真道分解》超乎万名之上的名：认识耶稣(" + (audio.id - 477888180 + 1) + ")";


                });


                // var other = _.concat(results, titles);

                fs.writeFile("./renshiyesu.json", JSON.stringify(titles, null, '\t'));
            });


    });