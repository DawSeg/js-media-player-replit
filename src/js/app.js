import HomePage from './components/homePage.js';
import SearchPage from './components/searchPage.js';
import DiscoverPage from './components/discoverPage.js';
import { select, settings } from './settings.js';
import AudioPlayer from './components/audioPlayer.js';
import JoinPage from './components/joinPage.js';

const app = {
  initPages: function () {
    const thisApp = this;

    thisApp.pages = document.querySelector(select.containerOf.pages).children;
    thisApp.navLinks = document.querySelectorAll(select.nav.links);
    const idFromhash = window.location.hash.replace('#/', '');
    let pageMatchingHash = thisApp.pages[0].id;

    for(let page of thisApp.pages) {
      if(page.id == idFromhash) {
        pageMatchingHash = page.id;
        break;
      }
    }

    thisApp.activatePage(pageMatchingHash);

    for (let link of thisApp.navLinks) {
      link.addEventListener('click', function (event) {
        const clickedElement = this;
        event.preventDefault();
        const id = clickedElement.getAttribute('href').replace('#', '');
        thisApp.activatePage(id);
        window.location.hash = '#/' + id;
      });
    }

    const joinLink = document.querySelector(select.nav.joinLink);
    joinLink.addEventListener('click', function(e) {
      e.preventDefault();
      const id = joinLink.getAttribute('href').replace('#', '');
      thisApp.activatePage(id);
      window.location.hash = '#/' + id;
    });
  },
  

  activatePage: function (pageId) {
    const thisApp = this;
    
    for (let page of thisApp.pages) {
      page.classList.toggle(select.classNames.active, page.id == pageId);
    }
    for (let link of thisApp.navLinks) {
      link.classList.toggle(select.classNames.active,
        link.getAttribute('href') == '#' + pageId);
    }
  },

  initHome: function () {
    const thisApp = this;
    
    thisApp.homePage = document.querySelector(select.containerOf.homePage);
    new HomePage(thisApp.homePage);
  },

  initSearch: function () {
    const thisApp = this;

    thisApp.searchPage = document.querySelector(select.containerOf.searchPage.wrapper);
    new SearchPage(thisApp.searchPage, thisApp.data);
  },

  initDiscover: function () {
    const thisApp = this;

    thisApp.discoverPage = document.querySelector(select.containerOf.discoverPage);
    new DiscoverPage(thisApp.discoverPage, thisApp.data);
  },

  initJoin: function () {
    const thisApp = this;

    thisApp.joinPage = document.querySelector(select.containerOf.joinPage);
    new JoinPage(thisApp.joinPage);
  },

  initAudioPlayer: function () {
    // eslint-disable-next-line no-undef
    GreenAudioPlayer.init({
      selector: '.player',
      stopOthersOnPlay: true
    });
  },

  initPlaylist: function () {
    const thisApp = this;
    
    for(let songData in thisApp.data) {
      new AudioPlayer (
        thisApp.data[songData].id,
        thisApp.data[songData],
        document.querySelector(select.containerOf.playList.home)
      );
    }
    thisApp.initAudioPlayer();
  },

  initData: function () {
    const thisApp = this;

    const url = settings.db.url + '/' + settings.db.songs;
    thisApp.data = [];
    fetch(url)
      .then(rawResponse => rawResponse.json())
      .then(parsedResponse => {
        thisApp.data = parsedResponse;
        thisApp.initPlaylist();
        thisApp.initSearch();
        thisApp.initDiscover();
      });
  },

  init: function () {
    const thisApp = this;
    thisApp.initHome();
    thisApp.initData();
    thisApp.initPages();
    thisApp.initJoin();
  }
};

app.init();
