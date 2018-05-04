const Xray = require('x-ray');
const x = Xray();
const fs = require('fs');
const download = require('download');
const _ = require('lodash');
var iconv = require('iconv-lite');
const request = require('request');

// const url = 'http://www.xueyi.org/goldverselist.php?b_cat=19';

const finalVerses = [];
const bible_with_chapter_counts = [];

var results = JSON.parse(fs.readFileSync('./goldenBibleVerseCategory.json', 'utf8'));




function fetchContent(category, calback) {
    var response = function(err, response, body) {
        //返回的body 直接就是buffer 了...
        var buf = iconv.decode(body, 'gb2312');

        x(buf, 'table', {
                "verse": '.text3',
                // "title": "li"
            })
            (function(err, verses) {



                verses.verse.split("\n\n").forEach(function(oneline, arrayIndex) {
                    // console.log(oneline.split("\n \n "));

                    const tempVerse = {};
                    tempVerse.content = oneline.split("\n \n ")[0].trim();
                    if (_.includes(oneline.split("\n \n ")[1], '\n')) {
                        tempVerse.index = oneline.split("\n \n ")[1].substring(0, oneline.split("\n \n ")[1].indexOf('\n'));
                    } else {
                        tempVerse.index = oneline.split("\n \n ")[1];

                    }

                    tempVerse.categoryId = category.id;
                    tempVerse.id = category.id * 1000 + arrayIndex;
                    // const audio = {};
                    // audio.name = file;
                    // audio.chapterCount = 50;
                    // bible_with_chapter_counts.push(audio);
                    finalVerses.push(tempVerse);
                });
                // console.log(verses);
                // fs.writeFile("./" + category.id + "_golden_bible_verses.json", JSON.stringify(verses, null, '\t'));
                fs.writeFile("./" + category.id + "_build_bible_golden_verses.json", JSON.stringify(finalVerses, null, '\t'));

            });
    }

    request.get({
        url: 'http://www.xueyi.org/goldverselist.php?b_cat=' + category.id,
        encoding: null //让body 直接是buffer
    }, response);
}

results.forEach(function(category, arrayIndex) {
    console.log(category);

    fetchContent(category, null);
});








// bibles.forEach(function(file, arrayIndex) {
//     console.log(file);

//     const audio = {};
//     audio.name = file;
//     audio.chapterCount = 50;
//     bible_with_chapter_counts.push(audio);

// });




// fs.writeFile("./voschildrenbible.json", JSON.stringify(results, null, '\t'));