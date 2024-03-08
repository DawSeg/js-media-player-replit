import { select, templates } from '../settings.js';
import utils from '../utils.js';
import AudioPlayer from './audioPlayer.js';

class DiscoverPage {
  constructor(element, data) {
    const thisDiscoverPage = this;

    thisDiscoverPage.data = data;
    thisDiscoverPage.audioPlayer = null;
    thisDiscoverPage.randomSong = null;
    thisDiscoverPage.render(element);
    thisDiscoverPage.getRandomSong();
  }

  render(element) {
    const thisDiscoverPage = this;

    const generatedHTML = templates.discoverPage();
    thisDiscoverPage.dom = {};
    thisDiscoverPage.dom.wrapper = element;
    thisDiscoverPage.dom.wrapper.innerHTML = generatedHTML;
    thisDiscoverPage.element = utils.createDOMFromHTML(generatedHTML);

    utils.capitalizeFirstLetterInElement('.discover-page-header');
    utils.capitalizeFirstLetterInElement('.discover-page h3');
  }

  getRandomSong() {
    const thisDiscoverPage = this;

    const discoverLink = document.querySelector(select.nav.discoverLink);
    discoverLink.addEventListener('click', () => {
      const randomIndex = Math.floor(Math.random() * thisDiscoverPage.data.length);
      thisDiscoverPage.randomSong = thisDiscoverPage.data[randomIndex];
      if (thisDiscoverPage.randomSong) {
        console.log(this.randomSong);
      }
      thisDiscoverPage.clearPlaylist();
      thisDiscoverPage.initPlaylist();
    });
  }

  initAudioPlayer () {

    // eslint-disable-next-line no-undef
    GreenAudioPlayer.init({
      selector: '.random-song .player',
      stopOthersOnPlay: true
    });
  }

  initPlaylist () {
    const thisDiscoverPage = this;

    new AudioPlayer (
      thisDiscoverPage.randomSong.id,
      thisDiscoverPage.randomSong,
      document.querySelector(select.containerOf.playList.discover)
    );
    thisDiscoverPage.initAudioPlayer();
  }

  clearPlaylist() {
    const playlistContainer = document.querySelector(select.containerOf.playList.discover);
    playlistContainer.innerHTML = '';
  }
}

export default DiscoverPage;