//http
const http=require("http");

http.createServer((req,resp)=>{
    //req=requst process
    //resp= for writing response
    resp.writeHead(200,{"content-type":"text/html"});
    resp.write("<h1>Wowo this is response from first server </h1>");
    resp.write("<h2>Ok nice work</h2>");
    resp.write("<button>click here</button>");
    resp.end("ok bye bey");

}).listen(9898);