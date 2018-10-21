const PubSub = require('../helpers/pub_sub')

const PokemonListView = function(listDiv){
  this.listDiv = listDiv;
}

PokemonListView.prototype.bindEvents = function(){
  PubSub.subscribe('Pokemon:All-Data-Ready', (event) => {
    const allPokemons = event.detail;
    this.renderList(allPokemons)
  });
  PubSub.subscribe('Pokemon:Selected-Type', (event) => {
    const selectedTypeInfo = event.detail
    this.renderTypes(selectedTypeInfo);
  });
}

PokemonListView.prototype.renderList = function(allPokemons){
  const headingType = document.createElement('h2');
  headingType.textContent = `All ${allPokemons.length} Pokemons!`
  this.listDiv.appendChild(headingType)
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

PokemonListView.prototype.renderTypes = function(selectedTypeInfo){
  this.listDiv.innerHTML = "";
  const headingType = document.createElement('h2')
  headingType.textContent = `${selectedTypeInfo.pokemon.length} ${selectedTypeInfo.name} Pokemons`;
  this.listDiv.appendChild(headingType)
  this.listTypes(selectedTypeInfo.pokemon)
}

PokemonListView.prototype.listTypes = function(pokemons){
  const listOfPokemons = document.createElement('ul')
  this.listTypesWithIndex(pokemons, listOfPokemons);
  this.listDiv.appendChild(listOfPokemons)
}

PokemonListView.prototype.listTypesWithIndex = function(pokemons, list){
  pokemons.forEach((poke) => {
    const singlePokemon = document.createElement('li')
    singlePokemon.textContent = poke.pokemon.name
    singlePokemon.value = this.getIndexFromURL(poke.pokemon.url)
    singlePokemon.addEventListener('click', handleItemClick)
    list.appendChild(singlePokemon);
  });
}

PokemonListView.prototype.getIndexFromURL = function(url){
  splitChar = url.split('/')
  return splitChar[6] // returns the index of the pokemon index
}


module.exports = PokemonListView;
