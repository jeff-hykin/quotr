let { database, saveData } = require('./backend.js')

module.exports = async (who, what) => {
    try {
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
    console.log('about to push')
    // add it to the database
        database[who].push({
            ...what,
            date: Date.now()
        })
        console.log(`pushed data`)
        // save it
        saveData()
    } catch (e) {
        console.log(`e is:`,e)
    }
    console.log(`saved data`)
}