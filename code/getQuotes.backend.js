let { database, saveData } = require('./backend.js')

module.exports = async (who, filter_by) => {
    if (!who) {
        return database
    }
    // make sure the person exists
    if (!(database[who] instanceof Array)) {
        return []
    } else {
        try {
            quotes = database[who]
            if (filter_by) {
                quotes = quotes.filter(each => each.quote.match(RegExp(filter_by)))
            }
            return quotes
        } catch (e) {
            console.log(`e is:`,e)
            throw e
        }
    }
}