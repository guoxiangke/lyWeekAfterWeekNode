const Xray = require('x-ray');
const x = Xray();
const fs = require('fs');
const download = require('download');
const _ = require('lodash');


const url = 'http://www.lyzhendao.net/Common/Reader/Channel/ShowPage.jsp?Cid=332&Pid=21&Version=0&Charset=gb2312&page=2';

var results = JSON.parse(fs.readFileSync('./chajingfa-zhuantichajing.json', 'utf8'));


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
                    audio.duration = 600;
                    audio.size = "2M";
                    audio.albumName = "《真道分解》查经法（5）专题查经";
                    audio.albumId = 487;
                    // audio.id = 487888180 + arrayIndex;
                    audio.id = _.last(results).id + 1 + arrayIndex;

                    audio.albumtitle = "《真道分解》查经法（5）专题查经(" + (audio.id - 487888180 + 1) + ")";


                });


                var other = _.concat(results, titles);

                fs.writeFile("./chajingfa-zhuantichajing.json", JSON.stringify(other, null, '\t'));
            });


    });