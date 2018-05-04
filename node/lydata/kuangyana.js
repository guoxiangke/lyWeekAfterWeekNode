const Xray = require('x-ray');
const x = Xray();
const fs = require('fs');
const download = require('download');
const _ = require('lodash');


// const url = 'http://www.feearadio.net/official/contents2/bible?tid=23&gid=11&cid=262';
// var titles = JSON.parse(fs.readFileSync('./zhuanji_cd_titles.json', 'utf8'));

// titles = titles.reverse();
// fs.writeFile("./zhuanji_cd_titles.json", JSON.stringify(titles, null, '\t'));
var albums = JSON.parse(fs.readFileSync('./zhuanji_cd_albums.json', 'utf8'));


albums.forEach(function(album, arrayIndex) {

    var done = false;

    x(album.url, '#right .files tr', [{
            "path": '.voice a@href',
            "title": ".title"
        }])
        (function(err, hrefs) {

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

                audio.duration = album.duration;
                audio.size = album.size;
                audio.albumName = album.name;
                // audio.albumId = 6008;
                // audio.id = 6008888180 + arrayIndex;
                // audio.id = _.last(results).id + 1 + arrayIndex;

                audio.id = album.id * 1000000 + arrayIndex + 1;
                audio.albumId = album.id;
                audio.albumtitle = album.name + "(" + (arrayIndex + 1) + ")";

                // audio.albumtitle = "绝妙小剧场(" + (audio.id - 429888180 + 1) + ")";
                // audio.artistId = 36;
                // audio.artistName = "真道分解";

            });


            // var other = _.concat(results, titles);

            fs.writeFile("./" + album.shortName + ".json", JSON.stringify(hrefs, null, '\t'));



            done = true;


        });


    require('deasync').loopWhile(function() { return !done; });

});
// fs.writeFile("./zhuanji_cd_albums.json", JSON.stringify(albums, null, '\t'));



// console.log(albums);

// function arraymove(arr, fromIndex, toIndex) {
//     var element = arr[fromIndex];
//     arr.splice(fromIndex, 1);
//     arr.splice(toIndex, 0, element);
// }


// x(url, 'select option', [{
//         "title": ""
//     }])
//     (function(err, hrefs) {

//         // arraymove(hrefs, hrefs.length - 1, 160);
//         // hrefs = _.remove(hrefs, function(n) {

//         //     return n.title === '303 替別人著想可以讓對方生命開始飛翔';
//         // });

//         // hrefs = _.uniqBy(hrefs, 'title');

//         // _.remove(fruits, function (fruit) {
//         //     return fruit === 'Apple' || fruit === 'Banana' || fruit === 'Orange'
//         //   });


//         // http://113.215.21.17/1Q2W3E4R5T6Y7U8I9O0P1Z2X3C4V5B/media.feearadio.net/downloads//others/Drama/YU_drama/158.mp3


//         // x(url, 'div', [{
//         //         // "path": 'a@href',
//         //         "title": "li"
//         //     }])
//         //     (function(err, titles) {

//         // var hrefs = _.remove(titles, function(n) {
//         //     return n.title.indexOf("第") !== -1;
//         // });
//         console.log(hrefs);
//         fs.writeFile("./zhuanji_cd_titles.json", JSON.stringify(hrefs, null, '\t'));

//         // hrefs = hrefs.reverse();

//         // hrefs.forEach(function(audio, arrayIndex) {

//         //     audio.title = audio.title.trim();
//         //     // audio.title = audio.title.trim().substring(2).trim();


//         //     var index = hrefs[arrayIndex].path.indexOf("/downloads");
//         //     var sub = hrefs[arrayIndex].path.substring(index + 1);

//         //     console.log(index);
//         //     console.log(sub);


//         //     audio.path = "http://media.feearadio.net/" + sub.substring(0, sub.length - 7);

//         //     console.log(audio.path);

//         //     audio.duration = 550;
//         //     audio.size = "4M";
//         //     audio.albumName = "【節目精選CD】2010年3月份 - 生命與生活。同行在愛中";
//         //     // audio.albumId = 6008;
//         //     // audio.id = 6008888180 + arrayIndex;
//         //     // audio.id = _.last(results).id + 1 + arrayIndex;

//         //     audio.id = 6072 * 1000000 + arrayIndex + 1;
//         //     audio.albumId = 6072;
//         //     audio.albumtitle = "【節目精選CD】2010年3月份 - 生命與生活。同行在愛中" + "(" + (arrayIndex + 1) + ")";

//         //     // audio.albumtitle = "绝妙小剧场(" + (audio.id - 429888180 + 1) + ")";
//         //     // audio.artistId = 36;
//         //     // audio.artistName = "真道分解";

//         // });


//         // // var other = _.concat(results, titles);

//         // fs.writeFile("./zhuanji_cd_201003.json", JSON.stringify(hrefs, null, '\t'));





//     });