const Xray = require('x-ray');
const x = Xray();
const fs = require('fs');
const download = require('download');

x('http://txly2.net/realme_announcer/serie/156-realme_announcer', 'tbody tr', [{
        "title": '.ss-title p',
        "downUrl": '.ss-dl a@href'
    }])
    .paginate('.pagenav@href')
    .limit(2)
    // .write('results.json')
    (function(err, results) {
        results = results.reverse();
        results.forEach(function(audio, arrayIndex) {

            var index = audio.downUrl.indexOf('?');
            var sub = audio.downUrl.substring(0, index);
            var lastIndex = audio.downUrl.lastIndexOf('/');
            var fileName = sub.substring(lastIndex + 1);
            // audio.downUrl = sub;
            // audio.time = audio.time.substring(audio.time.indexOf('-') + 1);
            // download(audio.downUrl).then(data => {
            //     fs.writeFileSync('../cc/' + fileName, data);
            // });

            // if (arrayIndex < 9) {
            //     audio.path = "https://rawcdn.githack.com/quiet324/LiangYouResourceCW2015/170808/cc_CouplesCampC" + '/' + 'cc_CouplesCampC0' + (arrayIndex + 1);
            // } else {
            //     audio.path = "https://rawcdn.githack.com/quiet324/LiangYouResourceCW2015/170808/cc_CouplesCampC" + '/' + 'cc_CouplesCampC' + (arrayIndex + 1);
            // }

            audio.path = "https://rawcdn.githack.com/quiet324/LiangYouAlbums4/170820/realme_announcer" + '/' + fileName;

            audio.duration = 480;
            audio.size = "2M";
            audio.albumId = 6001;
            audio.albumName = "真我的展现：主持篇";
            audio.id = 6001000001 + arrayIndex;
            audio.albumtitle = "真我的展现：主持篇(" + (arrayIndex + 1) + ")";

        });

        fs.writeFile("./realme_announcer.json", JSON.stringify(results, null, '\t'));
    });