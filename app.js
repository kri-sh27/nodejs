// const fs=require('fs');


// const userName='Krish';
// fs.writeFile('user-data.txt',"userName: "+userName,(err)=>{
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log("task done");
//     }
// });
// console.log(userName);

const http=require('http');

const server=http.createServer((req,resp)=>{

    console.log('INCOMING REQUEST');
    console.log(req.method,req.url);
    resp.setHeader('Content-Type', 'text/plain')
    resp.end('ggggh')

});

server.listen(5000);
