const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const { urlencoded } = require('body-parser')
const app = express()
app.use(cors())
const port = 4000
var serveNum = 0;
let servers = ['http://3.134.92.58:3000', 'http://18.219.222.142:3000', 'http://18.218.234.55:3000']

app.get('/load', (req, res) => {
  serveNum++;
  res.redirect(servers[serveNum % 3] + req.params.id)
})

app.listen(port, () => {
  console.log(`listening on port ${port}`)
})