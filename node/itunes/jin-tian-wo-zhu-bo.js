const Xray = require('x-ray');
const x = Xray();
const fs = require('fs');
const download = require('download');

x('https://itunes.apple.com/cn/podcast/%E4%BB%8A%E5%A4%A9%E6%88%91%E4%B8%BB%E6%92%AD/id660588137?mt=2', 'tbody tr', [{
        "path": '@audio-preview-url',
        "title": '@preview-title'
    }])
    (function(err, results) {
        results = results.reverse();
        results.forEach(function(audio, arrayIndex) {

            audio.duration = 1760;
            audio.size = "14.1M";
            audio.albumName = "《生活无国界》今天我主播";
            audio.albumId = 196;
            audio.id = 196888180 + arrayIndex;
            audio.albumtitle = "今天我主播(" + (arrayIndex + 1) + ")";

        });

        fs.writeFile("./gvjtwzb.json", JSON.stringify(results, null, '\t'));
    });