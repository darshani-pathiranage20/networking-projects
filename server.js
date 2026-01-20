// Import built-in HTTP module
const http = require("http");

// Create a server
const server = http.createServer((request, response) => {
    
    // This runs when a client connects
    console.log("Client sent a request");

    // Send HTTP response status
    response.writeHead(200, { "Content-Type": "text/plain" });

    // Send response body
    response.end("Hello from the server!, Request received successfully");
});

// Server listens on port 8080
server.listen(8080, () => {
    console.log("Server is running on port 8080");
});
