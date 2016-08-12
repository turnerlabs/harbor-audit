const express = require('express')
const app = express()

app.get('/health', (req, res) => {
  res.send('healthy\n')
})

app.use(express.static(__dirname + '/public'))

let port = process.env.PORT || 5000

app.listen(port, _ => {
  console.log('app is running')
})