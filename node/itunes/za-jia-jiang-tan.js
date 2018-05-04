const Xray = require('x-ray');
const x = Xray();
const fs = require('fs');
const download = require('download');

x('https://itunes.apple.com/cn/podcast/%E5%92%B1%E5%AE%B6%E8%AE%B2%E5%9D%9B/id609411634?mt=2', 'tbody tr', [{
        "path": '@audio-preview-url',
        "title": '@preview-title'
    }])
    (function(err, results) {
        results = results.reverse();
        results.forEach(function(audio, arrayIndex) {

            audio.duration = 1760;
            audio.size = "14.1M";
            audio.albumName = "《生活无国界》咱家讲坛";
            audio.albumId = 197;
            audio.id = 197888180 + arrayIndex;
            audio.albumtitle = "咱家讲坛(" + (arrayIndex + 1) + ")";

        });

        fs.writeFile("./gvzjjt.json", JSON.stringify(results, null, '\t'));
    });