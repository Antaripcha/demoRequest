let http = require('http');


http.createServer(function (req, res) {
  res.write('Hello World!'); //write a response to the client
  res.end(); //end the response
}).listen(8080,()=>console.log('App Running On 8080 port'));
