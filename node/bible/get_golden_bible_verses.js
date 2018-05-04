const Xray = require('x-ray');
const x = Xray();
const fs = require('fs');
const download = require('download');
const _ = require('lodash');
var iconv = require('iconv-lite');

const request = require('request');


const url = 'http://www.xueyi.org/goldverselist.php?b_cat=19';

// var results = JSON.parse(fs.readFileSync('./2010fhjtj.json', 'utf8'));


function fetchContent(url, calback) {
    var response = function(err, response, body) {
        //返回的body 直接就是buffer 了...
        var buf = iconv.decode(body, 'gb2312');
        calback(buf);
    }

    request.get({
        url: url,
        encoding: null //让body 直接是buffer
    }, response);
}


fetchContent(url, function(result) {

    x(result, 'table', {
            "verse": '.text3',
            // "title": "li"
        })
        (function(err, verses) {

            // str = iconv.decode(verses, 'gb2312');

            console.log(verses);
            fs.writeFile("./golden_bible_verses.json", JSON.stringify(verses, null, '\t'));


            // var results = JSON.parse(fs.readFileSync('./golden_bible_verses.json', 'gb2312'));
            // console.log(results);


            // var hrefs = _.remove(hrefs, function(n) {
            //     return n.path.indexOf("biblexpo") !== -1;
            // });




            // x(url, 'div', [{
            //         // "path": 'a@href',
            //         "title": "li"
            //     }])
            //     (function(err, titles) {


            //         var titles = _.remove(titles, function(n) {
            //             return n.title.indexOf("第") !== -1;
            //         });
            //         console.log(titles);

            //         titles.forEach(function(audio, arrayIndex) {

            //             audio.title = audio.title.trim();
            //             audio.path = hrefs[arrayIndex].path;
            //             audio.duration = 1700;
            //             audio.size = "5M";
            //             audio.albumName = "《真道分解》2010年复活节特辑：与主同死同埋葬同复活";
            //             audio.albumId = 497;
            //             audio.id = 497888180 + arrayIndex;
            //             // audio.id = _.last(results).id + 1 + arrayIndex;

            //             audio.albumtitle = "《真道分解》2010年复活节特辑：与主同死同埋葬同复活(" + (audio.id - 497888180 + 1) + ")";


            //         });


            //         // var other = _.concat(results, titles);

            //         fs.writeFile("./2010fhjtj.json", JSON.stringify(titles, null, '\t'));
            //     });


        });
});


// x(url, 'table', [{
//         "verse": 'tr',
//         // "title": "li"
//     }])
//     (function(err, verses) {

//         // str = iconv.decode(verses, 'gb2312');

//         console.log(verses);
//         fs.writeFile("./golden_bible_verses.json", JSON.stringify(verses, null, '\t'));


//         var results = JSON.parse(fs.readFileSync('./golden_bible_verses.json', 'gb2312'));
//         console.log(results);


//         // var hrefs = _.remove(hrefs, function(n) {
//         //     return n.path.indexOf("biblexpo") !== -1;
//         // });




//         // x(url, 'div', [{
//         //         // "path": 'a@href',
//         //         "title": "li"
//         //     }])
//         //     (function(err, titles) {


//         //         var titles = _.remove(titles, function(n) {
//         //             return n.title.indexOf("第") !== -1;
//         //         });
//         //         console.log(titles);

//         //         titles.forEach(function(audio, arrayIndex) {

//         //             audio.title = audio.title.trim();
//         //             audio.path = hrefs[arrayIndex].path;
//         //             audio.duration = 1700;
//         //             audio.size = "5M";
//         //             audio.albumName = "《真道分解》2010年复活节特辑：与主同死同埋葬同复活";
//         //             audio.albumId = 497;
//         //             audio.id = 497888180 + arrayIndex;
//         //             // audio.id = _.last(results).id + 1 + arrayIndex;

//         //             audio.albumtitle = "《真道分解》2010年复活节特辑：与主同死同埋葬同复活(" + (audio.id - 497888180 + 1) + ")";


//         //         });


//         //         // var other = _.concat(results, titles);

//         //         fs.writeFile("./2010fhjtj.json", JSON.stringify(titles, null, '\t'));
//         //     });


//     });