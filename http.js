const http = require('http');
const server = http.createServer((req, res)=>{
    res.writeHead(200, {"content-type": "application/json"})
    res.end("Welcome to my server")

})





server.listen(3535, ()=>{
    console.log(`Sever is runing on PORT: 3535`)
})