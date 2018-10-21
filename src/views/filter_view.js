const PubSub = require('../helpers/pub_sub')

const FilterView = function(dropElement){
  this.dropElement = dropElement;
}

FilterView.prototype.bindEvents = function(){
  PubSub.subscribe('Pokemon:Filtered-Types', (event) => {
    const uniqueTypes = event.detail;
    this.addType(uniqueTypes)
  });

  this.dropElement.addEventListener('change', handleChangeType)
}

FilterView.prototype.addType = function(uniqueTypes){
  uniqueTypes.forEach((type, index) => {
    const option = document.createElement('option');
    option.textContent = type.name;
    option.value = index + 1;
    this.dropElement.appendChild(option);
  });
}

const handleChangeType = function(event){
  const typeIndex = event.target.value
  PubSub.publish('FilterView:TypeIndex', typeIndex)
}
module.exports = FilterView;
