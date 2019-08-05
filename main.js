const express = require('express')
const app = express()
const port = 3000

// app.get('/hello', (req, res) => {
//     res.send('Hello World!')
// })

app.get('/pkmns.json', (req, res) => {
    var data = [
        {"name":"pikachu","type":"electric","number":25,"img": "http://www.serebii.net/pokemongo/pokemon/025.png"},
        {"name":"Bulbasaur","type":"grass","number":01,"img": "http://www.serebii.net/pokemongo/pokemon/001.png"},
        {"name":"caterpie","type":"bug","number":11,"img": "http://www.serebii.net/pokemongo/pokemon/010.png"}

    ];
    res.json(data)
})

app.use(express.static('dist'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))