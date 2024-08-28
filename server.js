const http = require("http");

// create an instance of a server
const server =  http.createServer((req,res) =>{
        if(req.url === "/getUserData"){
            res.end("Here is the user Data!!!!!");
        }
        res.end("Hey i created my first server");
});

server.listen(9999);