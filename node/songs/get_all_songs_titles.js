const Xray = require('x-ray');
const x = Xray();
const fs = require('fs');
const download = require('download');
const _ = require('lodash');

const allSongsTitle = [];
const url = 'http://www.729ly.net/Common/Reader/Channel/ShowPage.jsp?Cid=1929&Pid=67&Version=0&Charset=gb2312&page=';

// var results = JSON.parse(fs.readFileSync('./2010fhjtj.json', 'utf8'));


// x(url, '#body #left td p', [{
//         "content": '',
//         // "title": "li"
//     }])
for (i = 0; i < 22; i++) {

    var done2 = false;


    x(url + i, '#body script', [{
        "content": '',
    }])

    (function(err, titles) {


        var titles = _.remove(titles, function(n) {
            return n.content.indexOf("origURL") !== -1;
        });

        // console.log(titles);

        var done = false;



        titles.forEach(function(title, arrayIndex) {

            var mp3Url = title.content.substring(title.content.indexOf("origURL =") + 11, title.content.indexOf('gb2312') + 6);
            // console.log('http://www.729ly.net' + mp3Url);
            var title = title.content.substring(title.content.indexOf("title=") + 7, title.content.indexOf('target=') - 2);
            // finalResult.path = "http://www.729ly.net/Template/Shared/songs" + mp3Url;
            // console.log(title);
            var finalResult = {};

            finalResult.title = title;
            finalResult.mp3Url = 'http://www.729ly.net' + mp3Url;
            allSongsTitle.push(finalResult);
            console.log(finalResult);

            done = true;
        });

        require('deasync').loopWhile(function() { return !done; });


        done2 = true;

        // fs.writeFile("./title_result.json", JSON.stringify(finalResult, null, '\t'));
        // fs.writeFile("./all_songs_titles_result.json", JSON.stringify(allSongsTitle, null, '\t'));


    });


    require('deasync').loopWhile(function() { return !done2; });


    // fs.writeFile("./title_result.json", JSON.stringify(finalResult, null, '\t'));
    fs.writeFile("./all_songs_titles_result.json", JSON.stringify(allSongsTitle, null, '\t'));

}