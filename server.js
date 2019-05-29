app = require("quik-server")
fs   = require('fs')
yaml = require('js-yaml')
app.quikAdd("quik-dom")
app.quikAdd("quik-backend")

database = yaml.safeLoad(fs.readFileSync('./database.yaml', 'utf8'))
global.database = database

app.settings = {
    host: "localhost",
    port: 3000,
    websiteFile: "./website.jsx",
    codeFolder: "./code",
    computerGeneratedFolder: "./computer-generated-code",
}
app.start()