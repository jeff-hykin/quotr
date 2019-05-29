let { backend } = require('quik-client');

let usernameElement, passwordElement
module.exports = <body>
    <div class="card blue-grey darken-1">
        <div class="card-content white-text">
            <span class="card-title">Login</span>
            {usernameElement = <input type="text"     placeholder="username"/>}
            {passwordElement = <input type="password" placeholder="password"/>}
        </div>
        <div class="card-action">
            <a onclick={onclick}>
                Submit
            </a>
        </div>
    </div>
</body>

async function onclick(eventObject) {
    try {
        // call the function that is inside the check.backend.js file
        let backendResponse = await backend.loginFolder.check({
            username: usernameElement.value, 
            password: passwordElement.value
        })
        alert(backendResponse)
    } catch (error) {
        alert(`The backend thew an error: ${error}`)
    }
}