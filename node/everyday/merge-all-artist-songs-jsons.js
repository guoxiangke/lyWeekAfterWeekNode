const fs = require('fs');

var results = JSON.parse(fs.readFileSync('../../all-artists-json-files/artist_1_songs.json', 'utf8'));

for (i = 2; i < 59; i++) {
    results = results.concat(JSON.parse(fs.readFileSync('../../all-artists-json-files/artist_' + i + '_songs.json', 'utf8')));

}
console.log(results);

fs.writeFileSync('all-songs.json', JSON.stringify(results));