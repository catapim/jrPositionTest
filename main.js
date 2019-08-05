const express = require('express')
const app = express()
const port = 3000

// app.get('/hello', (req, res) => {
//     res.send('Hello World!')
// })

const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
 
// Connection URL
const url = 'mongodb://localhost:27017';
 
// Database Name
const dbName = 'myproject';

// Use connect method to connect to the server
MongoClient.connect(url, function(err, client) {
  assert.equal(null, err);
  console.log("Conectado a la db");
 
  const db = client.db(dbName);
 
  client.close();
});

var data = [
    {"name":"pikachu","type":"electric","number":25,"img": "http://www.serebii.net/pokemongo/pokemon/025.png"},
    {"name":"Bulbasaur","type":"grass","number":01,"img": "http://www.serebii.net/pokemongo/pokemon/001.png"},
    {"name":"caterpie","type":"bug","number":11,"img": "http://www.serebii.net/pokemongo/pokemon/010.png"}
];

app.get('/pkmns.json', (req, res) => {
      res.json(data)
})

app.put('pkmn_put', (req, res)=> {
    console.log('aqui se crea pokemon');
    res.send()
})



app.use(express.static('dist'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))