//
// Setup Head
//
document.head = <head>
    {/* Add a title */}
    <title>Quotr!</title>
</head>

// example of how to include a local style sheet (should work with css, sass, less)
require("./code/style.scss")

//
// Setup Pages
//
let HomePage = require("./code/homePage")
let LoginPage = require("./code/style.scss")

// Create the page-loading function (This is what you use to switch pages)
history.loadPage = function(path) {
    
    // [you can add page loading animations here if you feel like it]
    
    // Homepage
    if (path == "" || path == "home") {
        document.body = HomePage  
        // you dont have to assign document.body every time
        // you could just replace a specific peice instead of replacing the entire body
    // 404 page
    } else {
        document.body = <body>I'm not sure what page you're trying to reach :/</body>
    }
}

// actually load the current page (home/login/etc wherever the user goes first) after setting up the head and pages
let currentUrl = window.location.pathname.replace("/","")
history.loadPage(currentUrl)