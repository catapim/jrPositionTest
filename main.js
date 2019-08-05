const express = require('express')
const app = express()
const port = 3000

// app.get('/hello', (req, res) => {
//     res.send('Hello World!')
// })

app.get('/pkmns.json', (req, res) => {
    var data = [{"nombre":"catalina"},{"nombre": "crstn"}];
    res.json(data)
})

app.use(express.static('dist'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))