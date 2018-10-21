const PubSub = require('../helpers/pub_sub')

const PokemonListView = function(listDiv){
  this.listDiv = listDiv;
}

PokemonListView.prototype.bindEvents = function(){
  PubSub.subscribe('Pokemon:All-Data-Ready', (event) => {
    const allPokemons = event.detail;
    this.renderList(allPokemons)
  });
}

PokemonListView.prototype.renderList = function(allPokemons){
  const listOfPokemons = document.createElement('ul');
  this.populateList(allPokemons, listOfPokemons)
  this.listDiv.appendChild(listOfPokemons);
}

PokemonListView.prototype.populateList = function(allPokemons, list){
  allPokemons.forEach((pokemon, index) => {
    const singlePokemon = document.createElement('li');
    singlePokemon.textContent = pokemon.name;
    singlePokemon.value = index + 1; // JSON file route counter starts at 1
    singlePokemon.addEventListener('click', handleItemClick)
    list.appendChild(singlePokemon);
  });
}

const handleItemClick = function (event){
  const selectedPokemon = event.target.value;
  PubSub.publish('PokemonListView:PokeIndex', selectedPokemon)
}


module.exports = PokemonListView;
