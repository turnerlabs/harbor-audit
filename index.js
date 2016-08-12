var app = require('express')();

app.get('/', (req, res) => {
  res.send('healthy\n');
});

let port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log('app is running');
});