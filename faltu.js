const fs = require('fs');

const FyersSocket = require("fyers-api-v3").fyersDataSocket

var fyersdata= new FyersSocket("Y4PJ649WNP-100:eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJhcGkuZnllcnMuaW4iLCJpYXQiOjE2OTUxOTY3NTMsImV4cCI6MTY5NTI1NjIxMywibmJmIjoxNjk1MTk2NzUzLCJhdWQiOlsieDowIiwieDoxIiwieDoyIiwiZDoxIiwiZDoyIiwieDoxIiwieDowIl0sInN1YiI6ImFjY2Vzc190b2tlbiIsImF0X2hhc2giOiJnQUFBQUFCbENxWlJmNEFJOUJZS0diYnlILU40NEs5a2tpaGZLY3RfQUVZN1JVMlptQ3V1Nm5UcWNfUEFaV3FnM20zMHVib2hMZ2FlT3lOcGFoLU9NUTNNRzBONU12ckR2bkZYMGhkck5IdC13c3N5SVlzREZnVT0iLCJkaXNwbGF5X25hbWUiOiJLSFVTSFdJTkRFUiIsIm9tcyI6IksxIiwiaHNtX2tleSI6IjY2ZTBiYzM3MmQ4ZWVkMmNkNDdhNmJjNmJmYjY4MzY4MWRlN2Q5ZTg1MGU2YTlhYWI5NjgzMTkyIiwiZnlfaWQiOiJYSzAzNDgxIiwiYXBwVHlwZSI6MTAwLCJwb2FfZmxhZyI6Ik4ifQ.sHQy6AomP4g9agShh4HE6f9qeqezs6RkZfxv2HY5_7Q")

function onmsg(message){
          s = message.symbol
          l = message.ltp
    // app.get('/api', (req, res) => {
    //     res.json({symbol:s, ltp:l});
    //   });
      
    console.log("Older",message)

    console.log(message);
    function saveDataToFile() {
        fs.writeFile('websocket_data.json', JSON.stringify(message), (err) => {
          if (err) {
            console.error('Error saving data to JSON file:', err);
          } else {
            console.log('Data saved to JSON file');
          }
        });
      }
      
      // Save data to JSON file every 5 seconds (for example)
    //  // Adjust the interval as needed

    
    }   


function onconnect(){
    fyersdata.subscribe(['MCX:SILVER23DECFUT']) //not subscribing for market depth data
    // fyersdata.subscribe(['NSE:IDEA-EQ','NSE:BANKNIFTY2392046100CE'],true) //subscribing for market depth
    fyersdata.mode(fyersdata.LiteMode) //set data mode to lite mode
    fyersdata.autoreconnect() //enable auto reconnection mechanism in case of disconnection
}

function onerror(err){
    console.log(err)
}

function onclose(){
    console.log("socket closed")
}

fyersdata.on("message",onmsg)
fyersdata.on("connect",onconnect)
fyersdata.on("error",onerror)
fyersdata.on("close",onclose)

fyersdata.connect()



