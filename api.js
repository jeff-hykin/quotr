let quik = {}
;;(async()=>{

            // setup of the "backend" object
            quik.backend = {"getNames":"getNames","getQuotes":"getQuotes","newQuote":"newQuote"}
            global.io = require("socket.io-client")
            global.socket = new io.connect("http://localhost:3000", {
                'reconnection': true
            })
            // a helper for setting nested values 
            function set(obj, attributeList, value) {
                if (attributeList instanceof Array) {
                    try {
                        var lastAttribute = attributeList.pop()
                        for (var elem of attributeList) {
                            // create each parent if it doesnt exist
                            if (!(obj[elem] instanceof Object)) {
                                obj[elem] = {}
                            }
                            // change the object reference be the nested element
                            obj = obj[elem]
                        }
                        obj[lastAttribute] = value
                    } catch (error) {
                    }
                }
            }
            // a helper for getting nested values 
            var get = (obj, keyList) => {
                for (var each of keyList) {
                    try { obj = obj[each] }
                    catch (e) { return null }
                }
                return obj == null ? null : obj
            }
            // a helper for ... well ..recursively getting All Attributes Of an object
            var recursivelyAllAttributesOf = (obj) => {
                // if not an object then add no attributes
                if (!(obj instanceof Object)) {
                    return []
                }
                // else check all keys for sub-attributes
                var output = []
                for (let eachKey of Object.keys(obj)) {
                    // add the key itself (alone)
                    output.push([eachKey])
                    // add all of its children
                    let newAttributes = recursivelyAllAttributesOf(obj[eachKey])
                    // if nested
                    for (let eachNewAttributeList of newAttributes) {
                        // add the parent key
                        eachNewAttributeList.unshift(eachKey)
                        output.push(eachNewAttributeList)
                    }
                }
                return output
            }
            let callBackend = (functionPath, args) => {
                socket.emit("backend", { functionPath, args })
                return new Promise((resolve, reject) => {
                    socket.on("backendResponse", response => resolve(response))
                    socket.on("backendError"   , response => reject(response))
                })
            }
            let createBackendCaller = (backendPath) => (...args) => callBackend(backendPath, args)

            for (let each of recursivelyAllAttributesOf(quik.backend)) {
                let value = get(quik.backend, each)
                if (value instanceof Object) {
                    continue
                }
                // convert it from a string into a function
                set(quik.backend, each, createBackendCaller(value))
            }
        
})();;


let {backend} = quik
module.exports = backend