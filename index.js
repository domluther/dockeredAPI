const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;
app.get('/', function (req, res) {
  const person = {
    name: 'Mr Keating',
    age: 38,
    job: 'superstar',
    fav_pokemon: 'Bulbasaur',
    pokemon_img:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/1.png',
  };
  const html = `<h1>${person.name}</h1>
  <p>${person.job}</p>
  <p>Favourite pokemon? <span>${person.fav_pokemon}</span></p>
  <img src=${person.pokemon_img} >`;
  res.send(html);
});

app.listen(PORT);
