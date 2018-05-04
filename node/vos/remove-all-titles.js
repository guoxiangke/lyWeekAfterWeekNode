const fs = require('fs');

var results = JSON.parse(fs.readFileSync('./biblepsalms.json', 'utf8'));

results.forEach(function(audio, arrayIndex) {


    audio.title = "";


});

fs.writeFile("./biblepsalms-no-title.json", JSON.stringify(results, null, '\t'));