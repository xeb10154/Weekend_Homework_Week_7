const PubSub = require('../helpers/pub_sub')
const Request = require('../helpers/request')

const Pokemon = function(data){
  this.data = []; // Stores full list of pokemons and urls
}

Pokemon.prototype.bindEvents = function(){
  this.getData();
  this.getTypes();
  PubSub.subscribe('PokemonListView:PokeIndex', (event) => {
    const pokemonIndex = event.detail;
    this.findPokemonInfo(pokemonIndex)
  });
  PubSub.subscribe('FilterView:TypeIndex', (event) => {
    const typeIndex = event.detail;
    this.findSelectedTypes(typeIndex)
  });
}

Pokemon.prototype.getData = function(){
  url = `https://pokeapi.co/api/v2/pokemon`;
  const request = new Request(url);
  request.get().then((data) => {
    this.data = data.results
    PubSub.publish('Pokemon:All-Data-Ready', this.data)
  });
}

Pokemon.prototype.findPokemonInfo = function(index){
  url =  `https://pokeapi.co/api/v2/pokemon/${index}`
  const request = new Request(url)
  request.get().then((data) => {
    PubSub.publish('Pokemon:Selected-Pokemon', data)
  });
}

Pokemon.prototype.getTypes = function(){
  url = `https://pokeapi.co/api/v2/type/`
  const request = new Request(url)
  request.get().then((data) => {
    PubSub.publish('Pokemon:Filtered-Types', data.results)
  });
}

Pokemon.prototype.findSelectedTypes = function(index){
  url = `https://pokeapi.co/api/v2/type/${index}`
  const request = new Request(url)
  request.get().then((data) => {
    PubSub.publish('Pokemon:Selected-Type', data)
  });
}



module.exports = Pokemon;
