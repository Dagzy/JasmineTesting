var BASE_URL = 'http://localhost:3000'

var request = require('request')

function makeRequest() {
    request
        .get(BASE_URL, function (error, res, body) {
            console.log(res.statusCode)
            return res.statusCode
        })
}
// var result = makeRequest()
// console.log(result)
// new Promise(resolve=>{
//     makeRequest()
//     resolve()
// }).then((res)=>console.log(res))
request.get(BASE_URL,(err, res, body)=>{console.log(res)})




reqPromise = ()=> new Promise(resolve=>{
    let status = ''
    request
    .get(BASE_URL, function (error, res, body) {
        // console.log(res.statusCode)
        return status = res.statusCode
    })
    console.log(status)
    resolve()
}).then((r)=>console.log(r,'wha'))
// reqPromise()

// requestPromise.then(res=>console.log(res))