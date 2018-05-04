const Xray = require('x-ray');
const x = Xray();
const fs = require('fs');
const download = require('download');
const _ = require('lodash');

const finalSongsWithLrc = [];


var results = JSON.parse(fs.readFileSync('./all_songs_titles_result_no_baomihua.json', 'utf8'));



results.forEach(function(result, arrayIndex) {

    var sync2 = true;

    // var results = JSON.parse(fs.readFileSync('./2010fhjtj.json', 'utf8'));


    // x(url, '#body #left td p', [{
    //         "content": '',
    //         // "title": "li"
    //     }])
    x(result.mp3Url, 'script', [{
        "content": '',
        // "title": "li"
    }])


    (function(err, hrefs) {

        // console.log(hrefs);
        var finalResult = {};

        // console.log(hrefs[0]);
        var hrefs = _.remove(hrefs, function(n) {
            return n.content.indexOf("downloadFile2") !== -1;
        });

        if (hrefs.length === 0) {
            sync2 = false;

            return;
        }

        console.log(hrefs);
        var mp3Url = hrefs[0].content.substring(hrefs[0].content.indexOf("/audio/"), hrefs[0].content.indexOf(".mp3") + 4);
        // console.log("http://www.729ly.net/Template/Shared/songs" + mp3Url);
        finalResult.path = "http://www.729ly.net/Template/Shared/songs" + mp3Url;
        finalResult.title = result.title;
        // console.log(finalResult);

        var sync = true;

        x(result.mp3Url, '#body #left td p', [{
                "content": '',
            }])
            (function(err, titles) {


                // var titles = _.remove(titles, function(n) {
                //     return n.title.indexOf("第") !== -1;
                // });
                // console.log(titles);
                var contentString = "";
                console.log(titles);
                console.log(err);

                if (typeof titles === 'undefined') {
                    sync = false;

                    return;
                }

                titles.forEach(function(title, arrayIndex) {

                    contentString += title.content + '\n';
                });


                finalResult.songLrc = contentString;

                console.log(finalResult);

                finalSongsWithLrc.push(finalResult);
                fs.writeFile("./result_songs_with_lrc_3.json", JSON.stringify(finalSongsWithLrc, null, '\t'));

                sync = false;

                // fs.writeFile("./result_songs_with_lrc.json", JSON.stringify(finalSongsWithLrc, null, '\t'));

            });
        while (sync) { require('deasync').sleep(2000); }

        sync2 = false;



    });


    while (sync2) { require('deasync').sleep(2000); }

    // require('deasync').loopWhile(function() { return !done; });

    // fs.writeFile("./result_songs_with_lrc.json", JSON.stringify(finalSongsWithLrc, null, '\t'));

});