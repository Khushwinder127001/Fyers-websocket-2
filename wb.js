const fs = require('fs');
const WebSocket = require("ws");
const server = new WebSocket.Server({port:8080});

server.on("connection",(ws)=>{
      console.log("New Client Connected!");    
    //   ws.send("fksdfj");


      // Function to read data from a JSON file and send it to connected clients
function sendDataFromFileToClients() {
    fs.readFile('websocket_data.json', 'utf8', (err, data) => {
    
      try {
      
        ws.send(data);
    
  
        console.log('Data sent to WebSocket clients');
      } catch (error) {
        console.error('Error parsing JSON:', error);
      }
    });
  }
  sendDataFromFileToClients();   

});


