////////by using this way u can create ur own web server/////////////////////
const http = require('http')
const url=require('url')

const data=[
    {name:'aliza',age:'20',role:'student'},
    {name:'ali',age:'10',role:'professor'},
    {name:'alina',age:'22',role:'engineer'},
    {name:'azhar',age:'23',role:'developer'},
    {name:'asma',age:'24',role:'teacher'},
]

 const server=http.createServer((req,res)=>{
     //write head ma status likhty hain wo 200 hi hota h hamsha ,or usma content-tyope define krty hain kia h
    res.writeHead(200,{'Content-Type':'application\json'}) 
    //json stringify islye use kra h becoz data array ma string m  nae h json ma sb string chaye hota h
     res.end(JSON.stringify(data))
    //  console.log(req.url)
    // if(req.url=="/"){
    //     res.end('hello to the server side')
    // } else if (req.url=='/about') {
    //     res.end('hello to the about data')
    // } else if(req.url=='/data'){
    //     res.end("there is a list of data")
    // }
    // else{
    //     res.end('404 page not found')
    // }
 })

server.listen(8000,"127.0.0.1",()=>{
    console.log('listening to the port 8000')
})

//so after doing this write (/path name) in local host tab and then first time refresh and secnd time enter clck