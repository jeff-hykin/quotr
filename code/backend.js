databasePath = 'database.yaml'

// get data
module.exports.database = yaml.safeLoad(fs.readFileSync(databasePath, 'utf8')) || {}

// save data
module.exports.saveData = () => {
    fs.writeFile(databasePath, yaml.safeDump(JSON.parse(JSON.stringify(module.exports.database))), (err) => {
        if (err) {
            return console.log(err)
        } else {
            console.log("The file was saved!");
        }
    })
}