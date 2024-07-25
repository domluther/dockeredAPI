const express = require('express');
const app = express();

app.get('/', function (req, res) {
  const person = { name: 'JK new', age: 38 };
  res.send(person);
});

app.listen(3000);
