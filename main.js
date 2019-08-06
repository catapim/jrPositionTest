const express = require('express')
const app = express()
const port = 3000
const request = require('request');

// app.get('/hello', (req, res) => {
//     res.send('Hello World!')
// })

const options = {  
    url: './pokemon.json',
    method: 'GET'
};


app.get("/api", function(req, res)  { 
    request(options, function(err, response, body) {  
      var json = JSON.parse(body);
      console.log(json); // Logging the output within the request function
      res.json(json) //then returning the response.. The request.json is empty over here
    }); //closing the request function      
  });


app.put('pkmn_put', (req, res)=> {
    console.log('aqui se crea pokemon');
    res.send()
})



app.use(express.static('dist'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))