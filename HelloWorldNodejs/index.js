const http = require("http");
const os = require("os");

const ipv4 = "0.0.0.0";
const port = 9876;
const computerName = os.hostname();

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");  
  res.write("<h1>Hello World! </h1>");
  res.write("from "+computerName);
  res.end();
});

server.listen(port, ipv4, () => {
  console.log(`Server running at http://${ipv4}:${port}/`);
});