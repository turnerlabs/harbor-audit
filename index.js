const express = require('express')
const app = express()
const cors = require('cors')

app.use(cors())
app.use(express.static(__dirname + '/public'))

app.get('/health', (req, res) => {
  res.send('healthy\n')
})

app.get('/config', (req, res) => {
  res.send({
    shipItApi: process.env.SHIPIT_API
  })
})

let port = process.env.PORT || 5000
app.listen(port, _ => {
  console.log('app is running')
})