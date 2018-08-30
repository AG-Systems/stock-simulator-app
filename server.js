const express = require('express');
const app = express();
var router = express.Router();
var axios = require("axios");


app.get('/api/stock/:symbol', function (req, res) {
  // https://api.iextrading.com/1.0
  let stocksymbol = req.params["symbol"];
  
  axios.get('https://api.iextrading.com/1.0/stock/' + stocksymbol + '/chart/1d')
  .then(function (response) {
    //console.log(response);
    res.send(response)
  })
  .catch(function (error) {
    console.log(error);
  });
  
  res.send(stocksymbol)
})


if(process.argv.length <= 2)
{
    app.use(express.static(__dirname + '/dist'));
    // Start the app by listening on the default
    // Heroku port
    app.listen(process.env.PORT || 8080);
} else {
    
    app.listen(8082, () => console.log('api listening on port 8082!'))
}