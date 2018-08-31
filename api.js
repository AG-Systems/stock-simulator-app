const express = require('express');
const router = express.Router();

// declare axios for making http requests
const axios = require('axios');
const API = 'https://jsonplaceholder.typicode.com';

/* GET api listing. */
router.get('/', (req, res) => {
  res.send('api works');
});

// Get all posts
router.get('/stocks', (req, res) => {
  // Get posts from the mock api
  // This should ideally be replaced with a service that connects to MongoDB
  axios.get(`${API}/posts`)
    .then(posts => {
      res.status(200).json(posts.data);
    })
    .catch(error => {
      res.status(500).send(error)
    });
});


router.get('/stock/:symbol', (req, res) => {
  // https://api.iextrading.com/1.0
  let stocksymbol = req.params["symbol"];
  
  if(stocksymbol != null && stocksymbol != "")
  {
      axios.get('https://api.iextrading.com/1.0/stock/' + stocksymbol + '/chart/1d')
      .then(function (response) {
        console.log(response.data);
        res.status(200).json(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
      
      res.send(stocksymbol)      
  } else {
      res.send([])
  }
  

})


module.exports = router;