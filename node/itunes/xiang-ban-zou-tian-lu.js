const Xray = require('x-ray');
const x = Xray();
const fs = require('fs');
const download = require('download');

x('https://itunes.apple.com/cn/podcast/%E7%9B%B8%E4%BC%B4%E8%B5%B0%E5%A4%A9%E8%B7%AF/id660587872?mt=2', 'tbody tr', [{
        "path": '@audio-preview-url',
        "title": '@preview-title'
    }])
    (function(err, results) {
        results = results.reverse();
        results.forEach(function(audio, arrayIndex) {

            audio.duration = 1760;
            audio.size = "14.1M";
            audio.albumName = "相伴走天路";
            audio.albumId = 195;
            audio.id = 195888180 + arrayIndex;
            audio.albumtitle = "相伴走天路(" + (arrayIndex + 1) + ")";

        });

        fs.writeFile("./gvxbztl.json", JSON.stringify(results, null, '\t'));
    });