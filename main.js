const express = require('express')
const app = express()
const port = 3000
const fs = require('fs');
const path = './newpokemons.json';

// app.get('/hello', (req, res) => {
//     res.send('Hello World!')
// })

var data = [
    {"name":"pikachu","type":"electric","number":25,"img": "http://www.serebii.net/pokemongo/pokemon/025.png"},
    {"name":"Bulbasaur","type":"grass","number":01,"img": "http://www.serebii.net/pokemongo/pokemon/001.png"},
    {"name":"caterpie","type":"bug","number":11,"img": "http://www.serebii.net/pokemongo/pokemon/010.png"}
];

app.get('/pkmns.json', (req, res) => {
      res.json(data)
})

app.put('/pkmn_put', (req, res)=> {
    console.log('aqui se crea pokemon');
    res.json({success:true});
    fs.access(path, fs.F_OK, (err) => {
        if (err) {
          console.log('archivo no existe');
          let newpokemons = [];
          let dataString = JSON.stringify(newpokemons);
          fs.writeFile(path, dataString, (err) => {
            if (err) console.log(err);
            //se hace un string del json
            console.log("Successfully Written to File.");
          });
        } else {
            console.log('archivo si existe');
            fs.readFile(path, (err,buf) => {
                //variable que guarda contenido de var path
                let content_from_json = buf.toString();
                let pokemon_read_data = JSON.parse(content_from_json);
                console.log(content_from_json);
                console.log(pokemon_read_data);
              });
        }
      });
})



app.use(express.static('dist'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))