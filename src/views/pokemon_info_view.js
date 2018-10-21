const PubSub = require('../helpers/pub_sub')

const PokemonInfoView = function(listDiv){
  this.listDiv = listDiv;
}

PokemonInfoView.prototype.bindEvents = function(){
  PubSub.subscribe('Pokemon:Selected-Pokemon', (event) => {
    const pokeInfo = event.detail;
    this.showInfo(pokeInfo)
  });
}

PokemonInfoView.prototype.showInfo = function(pokeInfo){
  this.listDiv.innerHTML = "";
  this.getImage();
  console.log(pokeInfo.sprites.front_default);
}

PokemonInfoView.prototype.getImage = function(){
  const img = document.createElement('img')
  img.src = event.detail.sprites.front_default;
  img.alt = event.detail.name;
  img.classList.add("profileImg")
  this.listDiv.appendChild(img);
}

module.exports = PokemonInfoView;
