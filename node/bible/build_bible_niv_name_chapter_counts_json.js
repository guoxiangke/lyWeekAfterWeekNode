const fs = require('fs');


const bible_with_chapter_counts = [];

var bibles = JSON.parse(fs.readFileSync('./bible_niv_names.json', 'utf8'));
var xinyiben_bibles = JSON.parse(fs.readFileSync('./bible_xin_yi_ben_names_with_chapter_counts.json', 'utf8'));
console.log(xinyiben_bibles);

bibles.forEach(function(file, arrayIndex) {
    console.log(file);

    const audio = {};
    audio.name = file;
    audio.chapterCount = xinyiben_bibles[arrayIndex].chapterCount;
    bible_with_chapter_counts.push(audio);

});


fs.writeFile("./bible_niv_names_with_chapter_counts.json", JSON.stringify(bible_with_chapter_counts, null, '\t'));


// fs.writeFile("./voschildrenbible.json", JSON.stringify(results, null, '\t'));