let { database, saveData } = require('./backend.js')

module.exports = async (who, what) => {
    console.log(`who is:`,who)
    console.log(`what is:`,what)
    // make sure the person exists
    if (!(database[who] instanceof Array)) {
        database[who] = []
    }
    // if its a string then put in in an object
    if (typeof what == 'string') {
        what = {
            quote: what
        }
    }
    // add it to the database
    database[who].push({
        ...what,
        date: (new Date()).toString()
    })
    // save it
    saveData()
}