const Xray = require('x-ray');
const x = Xray();
const fs = require('fs');
const download = require('download');

x('http://www.vos.org.tw/?p=653', 'a', [{
        "title": 'span'
    }])
    (function(err, results) {
        console.log(results);
    });