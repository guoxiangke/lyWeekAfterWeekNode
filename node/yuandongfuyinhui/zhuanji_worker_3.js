const Xray = require('x-ray');
const x = Xray();
const fs = require('fs');
const download = require('download');
const _ = require('lodash');


const url = 'http://www.feearadio.net/official/mobile2/bible?tid=&gid=10&cid=456';

// var results = JSON.parse(fs.readFileSync('./amoxishu.json', 'utf8'));


x(url, '.maincontent .files tr', [{
        "path": '.voice a@href',
        "title": ".title+"
    }])
    (function(err, hrefs) {
        // var hrefs = _.remove(hrefs, function(n) {
        //     return n.path.indexOf("biblexpo") !== -1;
        // });


        // http://113.215.21.17/1Q2W3E4R5T6Y7U8I9O0P1Z2X3C4V5B/media.feearadio.net/downloads//others/Drama/YU_drama/158.mp3


        // x(url, 'div', [{
        //         // "path": 'a@href',
        //         "title": "li"
        //     }])
        //     (function(err, titles) {

        // var hrefs = _.remove(titles, function(n) {
        //     return n.title.indexOf("第") !== -1;
        // });
        console.log(hrefs);
        // hrefs = hrefs.reverse();

        hrefs.forEach(function(audio, arrayIndex) {

            audio.title = audio.title.trim();
            // audio.title = audio.title.trim().substring(2).trim();


            var index = hrefs[arrayIndex].path.indexOf("/downloads");
            var sub = hrefs[arrayIndex].path.substring(index + 1);

            console.log(index);
            console.log(sub);


            audio.path = "http://media.feearadio.net/" + sub.substring(0, sub.length - 7);

            console.log(audio.path);

            audio.duration = 1400;
            audio.size = "11M";
            audio.albumName = "走出舒适，迎向美好人生 - 朱正中";
            // audio.albumId = 6008;
            // audio.id = 6008888180 + arrayIndex;
            // audio.id = _.last(results).id + 1 + arrayIndex;

            audio.id = 6028 * 1000000 + arrayIndex + 1;
            audio.albumId = 6028;
            audio.albumtitle = "走出舒适，迎向美好人生 - 朱正中" + "(" + (arrayIndex + 1) + ")";

            // audio.albumtitle = "绝妙小剧场(" + (audio.id - 429888180 + 1) + ")";
            // audio.artistId = 36;
            // audio.artistName = "真道分解";

        });


        // var other = _.concat(results, titles);

        fs.writeFile("./zhuanji_worker_3.json", JSON.stringify(hrefs, null, '\t'));





    });