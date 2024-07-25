const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;
app.get('/', function (req, res) {
  const person = {
    name: 'JK new',
    age: 38,
    job: 'superstar',
    fav_pokemon: 'pikapika',
  };
  res.send(person);
});

app.listen(PORT);
