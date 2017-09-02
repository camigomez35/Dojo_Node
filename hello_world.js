var http = require("http"),
    fs = require("fs");

var html = fs.readFileSync("./index.html");

console.log("Print 1");
http.createServer(function(req, res){
  console.log("Print 2");
  fs.readFile("./index.html", function(err, html){
    res.write(html);
    res.end();
    console.log("Print 3");
  });
  console.log("Print 4");
}).listen(8080);
console.log("Print 5");
