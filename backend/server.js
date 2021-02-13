const express = require('express')
const path = require('path')
const app = express()

app.use(express.static(path.join(__dirname, 'build')))

app.get('/ping', (req, res) => {
    console.log("in backend")
    return res.send('pong')
})


app.listen(8080, console.log("Running backend!"))