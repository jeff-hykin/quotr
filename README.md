## Api Example
1. `npm install socket-io`
```js
let { getQuotes, getNames, newQuote } = require('./path-to-api-file-from-this-repo')

;;(async()=>{
    await newQuote('soygirl', "I'm not drunk I'm tipsey")
    let quotes = await getQuotes("soygirl")
    console.log("quotes are:", quotes)
})();;
```