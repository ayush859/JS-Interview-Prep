/* 
Create basic web servers
        Send HTML, JSON, or plain text responses
        Example: http.createServer((req, res) => {...})

Handle different routes & methods
         Check req.url and req.method to serve different pages or APIs

Send files
        Read files from disk (fs module) and send as HTTP response
 */
const http = require('http')

const server = http.createServer((req,res)=>{
    res.end('Hello , I am responding from SERVER Side')
})

const port =3000;

server.listen(port,()=>{
    console.log('server is listening on port',port);
    
})