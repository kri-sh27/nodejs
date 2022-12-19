const http=require("http");
const url=require("url");

//url.parse()

http.createServer((request,response)=>{
    console.log(request.url);

   const urlOb= url.parse(request.url);

   console.log(urlOb);
//    console.log("path is  ",urlOb.pathname);
}).listen(8082);