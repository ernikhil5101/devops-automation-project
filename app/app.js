const http = require("http");

const server = http.createServer((req, res) => {
  res.write("End-to-End DevOps Automation Project Running");
  res.end();
});

server.listen(5000, "0.0.0.0", () => {
  console.log("Server running on port 5000");
});