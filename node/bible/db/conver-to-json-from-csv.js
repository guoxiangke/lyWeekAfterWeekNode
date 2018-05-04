const csvFilePath = './bible.csv'
const csv = require('csvtojson')
const converter = csv({
    checkType: true
})
converter
    .fromFile(csvFilePath)
    .on('json', (jsonObj) => {
        // combine csv header row and csv line to a json object
        // jsonObj.a ==> 1 or 4
        console.log(jsonObj)

    })
    .on('done', (error) => {
        console.log('end')
    })