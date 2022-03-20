///send file on server//////////////

const http=require('http')
const fs=require('fs')

const server=http.createServer((req,res)=>{
    fs.readFile('index.html',(error,info)=>{
        res.writeHead(200,{'Content-Type':'text/html'})
        if(info){
            console.warn("success",info)
            res.end(info)

        }
        else{
            console.warn('failed',error)
        }
    })
})

server.listen(8000,"127.0.0.1",()=>{
    console.log('listening to the port 8000')
})
