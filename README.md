## Api Example
1. `npm install socket-io`
```js
let { getQuotes, getNames, newQuote } = require('./path-to-api-file-from-this-repo')

;;(async()=>{
    await newQuote('gigachad', "The government can't add you to a list if you're already on all of them")
    let quotes = await getQuotes("gigachad")
    console.log("quotes are:", quotes)
    global.socket.close()
})();;
```