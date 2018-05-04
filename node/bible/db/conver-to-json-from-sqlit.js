// const sqliteJSON = require('sqlite-json');
// const exporter = sqliteJson('bible.db');

// exporter.save('verse', 'json/verse.json', function(err, data) {
//     // Optionally do something else with the JSON.
// });


const SqliteToJson = require('sqlite-to-json');
const sqlite3 = require('sqlite3');
const exporter = new SqliteToJson({
    client: new sqlite3.Database('./bible.db')
});