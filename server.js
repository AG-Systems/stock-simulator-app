const express = require('express');
const app = express();
var router = express.Router();
// Run the app by serving the static files
// in the dist directory


app.get('/api/stock/:symbol', function (req, res) {
  let stocksymbol = req.params["symbol"];
  
  res.send(stocksymbol)
})


if(process.argv.length <= 2)
{
    app.use(express.static(__dirname + '/dist'));
    // Start the app by listening on the default
    // Heroku port
    app.listen(process.env.PORT || 8080);
} else {
    router.get('/', (req, res) => res.send('Hello World!'))
    router.get('/api/stock/:symbol', (req, res) => {
      let stocksymbol = req.params["symbol"];
      
      res.send(stocksymbol)
    })
    app.listen(8081, () => console.log('Example app listening on port 3000!'))
}