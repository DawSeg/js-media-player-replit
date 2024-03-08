import { templates } from '../settings.js';
import utils from '../utils.js';

class AudioPlayer {
  constructor(id, data, element) {
    const thisAudioPlayer = this;
    thisAudioPlayer.id = id;
    thisAudioPlayer.data = data;
    thisAudioPlayer.categories = thisAudioPlayer.data.categories;
    thisAudioPlayer.renderPlayList(element);
  }

  renderPlayList(element) {
    const thisAudioPlayer = this;
    const generatedHTML = templates.audioPlayer(thisAudioPlayer.data);
    thisAudioPlayer.element = utils.createDOMFromHTML(generatedHTML);
    element.appendChild(thisAudioPlayer.element);

    let categoriesElements = document.querySelectorAll('.categories');
    categoriesElements.forEach(function(element) {
      let categoriesText = element.textContent;
      let modifiedCategoriesText = categoriesText.charAt(0).toUpperCase() + categoriesText.slice(1);
      let categoriesArray = modifiedCategoriesText.split(',');
      let formattedCategories = categoriesArray.map(category => category.trim()).join(', ');
      element.textContent = formattedCategories;
    });
  }
}

export default AudioPlayer;