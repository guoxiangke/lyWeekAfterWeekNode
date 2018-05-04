const Xray = require('x-ray');
const x = Xray();
const fs = require('fs');

// var results = JSON.parse(fs.readFileSync('../../artist.json', 'utf8'));
// var newArtists = JSON.parse(fs.readFileSync('../../artist.json', 'utf8'));
// newArtists.length = 0; // remove all item


x('http://txly2.net/hd', '.category-list .article-info + div', [{
        "text": 'p',
    }])
    // .write('results.json')
    (function(err, artistdesc) {

        if (err === null) {
            // var index = audio.downUrl.indexOf('?');
            // var sub = audio.downUrl.substring(0, index);
            // var lastIndex = audio.downUrl.lastIndexOf('/');
            // var fileName = sub.substring(lastIndex + 1);
            // audio.downUrl = sub;
            // audio.time = audio.time.substring(audio.time.lastIndexOf('-') + 1);
            // console.log(moment().format('MMMM Do YYYY, h:mm:ss a') + artist.name + audio.time)
            //     // var today = dateFormat(new Date(), "yyyymmdd");
            // var today = moment().format("YYYYMMDD");


            console.log(artistdesc);
            // artist.description = artistdesc;
            // newArtists += artist;
            // fs.writeFileSync("./newartist.json", JSON.stringify(newArtists, null, '\t'));

        }
    })

// results.forEach(function(artist) {

//     // if (artist.id == 49) { // 空中门训
//     //     return;
//     // }
//     x('http://txly2.net/' + artist.shortName, '.category-list .article-info + div', [{
//             "text": 'p',
//         }])
//         // .write('results.json')
//         (function(err, artistdesc) {

//             if (err === null) {
//                 // var index = audio.downUrl.indexOf('?');
//                 // var sub = audio.downUrl.substring(0, index);
//                 // var lastIndex = audio.downUrl.lastIndexOf('/');
//                 // var fileName = sub.substring(lastIndex + 1);
//                 // audio.downUrl = sub;
//                 // audio.time = audio.time.substring(audio.time.lastIndexOf('-') + 1);
//                 // console.log(moment().format('MMMM Do YYYY, h:mm:ss a') + artist.name + audio.time)
//                 //     // var today = dateFormat(new Date(), "yyyymmdd");
//                 // var today = moment().format("YYYYMMDD");
//                 artist.description = artistdesc;
//                 newArtists += artist;
//                 fs.writeFileSync("./newartist.json", JSON.stringify(newArtists, null, '\t'));

//                 // // if (audio.time === today) {
//                 // if (true) {

//                 //     var file = '../../' + artist.shortName + '/' + fileName;

//                 //     // if (!fs.existsSync(file)) { //
//                 //     if (true) { //
//                 //         // Do something

//                 //         // console.log(moment().format('MMMM Do YYYY, h:mm:ss a') + "downloading..." + file);

//                 //         // // var data = require('child_process').execFileSync('curl', ['--silent', '-L', audio.downUrl]);
//                 //         // // var data = downloadFileSync(audio.downUrl)

//                 //         // mkdirp.sync('../../' + artist.shortName);

//                 //         // // fs.writeFileSync('../../' + artist.shortName + '/' + fileName, data);

//                 //         // var commitTag = artist.shortName + audio.time

//                 //         // var year = moment().format('YYYY');
//                 //         // var week = moment().format('WW');

//                 //         // audio.duration = artist.duration;
//                 //         // audio.size = artist.size;
//                 //         // audio.artistId = artist.id;
//                 //         // audio.artistName = artist.name;
//                 //         // audio.path = "https://rawcdn.githack.com/quiet324/LiangYouRadioResource" + year + week + "/" + commitTag + "/" + artist.shortName + "/" + fileName;
//                 //         // audio.id = artist.id * 1000000 + parseInt(audio.time.substring(2), 10);

//                 //         fs.writeFileSync("./" + artist.shortName + audio.time + ".json", JSON.stringify(audio, null, '\t'));

//                 //         // if (!shell.which('git')) {
//                 //         //     shell.echo('Sorry, this script requires git');
//                 //         //     shell.exit(1);
//                 //         // }

//                 //         // if (shell.exec('git add ../../.').code !== 0) {
//                 //         //     shell.echo('Error: Git add failed');
//                 //         //     shell.exit(1);
//                 //         // }

//                 //         // if (shell.exec('git commit -m "Auto-commit"').code !== 0) {
//                 //         //     shell.echo('Error: Git commit failed');
//                 //         //     shell.exit(1);
//                 //         // }

//                 //         // if (shell.exec('git tag ' + artist.shortName + audio.time).code !== 0) {
//                 //         //     shell.echo('Error: Git tag failed');
//                 //         //     shell.exit(1);
//                 //         // }

//                 //         // if (shell.exec('git push').code !== 0) {
//                 //         //     shell.echo('Error: Git push failed');
//                 //         //     shell.exit(1);
//                 //         // }

//                 //         // if (shell.exec('git push --tags').code !== 0) {
//                 //         //     shell.echo('Error: Git push tags failed');
//                 //         //     shell.exit(1);
//                 //         // }



//                 //     } else {
//                 //         console.log(file + " exit");
//                 //     }


//                 // }

//             }
//         });
// });