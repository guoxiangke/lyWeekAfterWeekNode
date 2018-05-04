const Xray = require('x-ray');
const x = Xray();
const fs = require('fs');
const download = require('download');
var shell = require('shelljs');
var dateFormat = require('dateformat');
var async = require('async');
var downloadFileSync = require('download-file-sync');
var schedule = require('node-schedule');

var rule = new schedule.RecurrenceRule();
// rule.dayOfWeek = [0, new schedule.Range(4, 6)];
rule.hour = [0, 1, 6, 9, 11, 14, 17, 21];
rule.minute = 58;




var mkdirp = require('mkdirp');


// var moment = require('moment');
var moment = require('moment-timezone');

moment.tz.setDefault('Asia/Shanghai');

var taskRunningTimes = 1;

var token = JSON.parse(fs.readFileSync('.token', 'utf8')).token;



// var j = schedule.scheduleJob('0 * * * * *', function() { // "Runs job every minute"

// var j = schedule.scheduleJob('*/5 * * * *', function() { // "Runs job every 5 minute"
var j = schedule.scheduleJob(rule, function() { // rule hour at 5 minutes

    var lastYearWeekValue = "";

    var year = moment().format('YYYY');
    // var week = moment().format('WW') + moment().unix();
    var week = moment().format('WW');
    var repoName = "LiangYouRadioResource" + year + week;


    if (fs.existsSync('week.json')) {

        lastYearWeekValue = JSON.parse(fs.readFileSync('week.json', 'utf8')).week;

    } else {
        fs.writeFileSync('week.json', JSON.stringify({ "week": year + week }));
        lastYearWeekValue = year + week;
    }


    // var j = schedule.scheduleJob('0 5 * * * *', function() { // // "Runs job every 5 minute"
    // var j = schedule.scheduleJob('0 0 * * * *', function() { //// "Runs job every hour"
    var now = moment().format('MMMM Do YYYY, h:mm:ss a');
    console.log(now + year + week + ' taskRunningTimes:' + taskRunningTimes++);
    var results = JSON.parse(fs.readFileSync('../../artist.json', 'utf8'));
    results.forEach(function(artist) {

        if (artist.id == 49) { // 空中门训
            return;
        }

        // var done = false;

        // x('http://txly2.net/' + artist.shortName, 'tbody #sermon0', [{
        //         "time": '.ss-title a',
        //         "title": '.ss-title p',
        //         "downUrl": '.ss-dl a@href'
        //     }])

        x('http://txly2.net/' + artist.shortName, 'tbody tr', [{
                "time": '.ss-title a',
                "title": '.ss-title p',
                "downUrl": '.ss-dl a@href'
            }])
            // .write('results.json')
            (function(err, audios) {

                console.log(audios);


                if (err === null) {
                    audios.forEach(function(audio) {


                        console.log(audio);
                        var index = audio.downUrl.indexOf('?');
                        var sub = audio.downUrl.substring(0, index);
                        var lastIndex = audio.downUrl.lastIndexOf('/');
                        var fileName = sub.substring(lastIndex + 1);
                        audio.downUrl = sub;
                        audio.time = audio.time.substring(audio.time.lastIndexOf('-') + 1);
                        console.log(moment().format('MMMM Do YYYY, h:mm:ss a') + artist.name + audio.time)
                            // var today = dateFormat(new Date(), "yyyymmdd");
                        var today = moment().format("YYYYMMDD");
                        var yesterday = moment().add(-1, 'days').format("YYYYMMDD");
                        console.log(yesterday);
                        if (audio.time === today || audio.time === yesterday) {
                            var file = '../../' + artist.shortName + '/' + fileName;

                            if (!fs.existsSync(file)) { //
                                // Do something

                                console.log(moment().format('MMMM Do YYYY, h:mm:ss a') + "downloading..." + file);

                                // var data = require('child_process').execFileSync('curl', ['--silent', '-L', audio.downUrl]);
                                // // var data = downloadFileSync(audio.downUrl)

                                // mkdirp.sync('../../' + artist.shortName);

                                // fs.writeFileSync('../../' + artist.shortName + '/' + fileName, data);

                                var commitTag = artist.shortName + audio.time

                                var year = moment().format('YYYY');
                                var week = moment().format('WW');

                                audio.duration = artist.duration;
                                audio.size = artist.size;
                                audio.artistId = artist.id;
                                audio.artistName = artist.name;
                                audio.path = "https://rawcdn.githack.com/quiet324/LiangYouRadioResource" + year + week + "/" + commitTag + "/" + artist.shortName + "/" + fileName;
                                audio.id = artist.id * 1000000 + parseInt(audio.time.substring(2), 10);

                                console.log(audio);
                                mkdirp.sync('./' + artist.shortName);

                                fs.writeFileSync("./" + artist.shortName + audio.time + ".json", JSON.stringify(audio, null, '\t'));


                            } else {
                                console.log(file + " exit");
                            }


                        }
                    });

                    // done = true;


                }
            });


        // require('deasync').loopWhile(function() { return !done; });

    });

});