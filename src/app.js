const Pokemon = require('./models/pokemon')
const PokemonListView = require('./views/pokemon_list_view')
const FilterView = require('./views/filter_view')
const PokemonInfoView = require('./views/pokemon_info_view')

document.addEventListener('DOMContentLoaded', () => {

  const displayFullPokeList = document.querySelector('#Poke-List')
  const pokemonListView = new PokemonListView(displayFullPokeList);
  pokemonListView.bindEvents();

  const displaySelected = document.querySelector('#Poke-List')
  const pokemonInfoView = new PokemonInfoView(displaySelected);
  pokemonInfoView.bindEvents();

  const selectDropDown = document.querySelector('#Poke-DropDown')
  const filterView = new FilterView(selectDropDown);
  filterView.bindEvents();


  const pokemon = new Pokemon();
  pokemon.bindEvents();

  const clearButton = document.querySelector('#clear-filter-list-views')
  clearButton.addEventListener('click', (event) => {
    event.preventDefault();
    console.log('clicked');
    const selectDropDown = document.querySelector('#Poke-DropDown')
    selectDropDown.selectedIndex = 0; // Reset drop-down menu

    pokemon.bindEvents();
  })
  // Button is not working the way I expect it to.



});
