export const select = {
  templateOf: {
    homePage: '#template-home-page',
    searchPage: '#template-search-page',
    discoverPage: '#template-discover-page',
    joinPage: '#template-join-page',
    AudioPlayer: '#template-audio-player',
  },
  
  containerOf: {
    pages: '#pages',
    homePage: '.home-page-wrapper',
    discoverPage: '.discover-page-wrapper',
    searchPage: {
      form: '.search-form form',
      wrapper: '.search-page-wrapper',
      formInput: '.search-form form input',
      header: '.search-page h3',
    },
    joinPage: '.join-page-wrapper',
    playList: {
      home:'.home-play-list',
      search: '.search-song',
      discover: '.random-song',
    },
    categories: '.categories',
    homeCategories: '.home-categories',
  },
  classNames: {
    active: 'active',
  },
  nav: {
    links: '.nav-wrapper a',
    joinLink: '.join-link',
    discoverLink: '#discover-link',
  }
};

export const templates = {
  searchPage: Handlebars.compile(
    document.querySelector(select.templateOf.searchPage).innerHTML),
  homePage: Handlebars.compile(
    document.querySelector(select.templateOf.homePage).innerHTML),
  discoverPage: Handlebars.compile(
    document.querySelector(select.templateOf.discoverPage).innerHTML),
  joinPage: Handlebars.compile(
    document.querySelector(select.templateOf.joinPage).innerHTML),
  audioPlayer: Handlebars.compile(
    document.querySelector(select.templateOf.AudioPlayer).innerHTML)
};

export const settings = {
  db: {
    url: '//' + window.location.hostname +
      (window.location.hostname == 'localhost' ? ':3131' : ''),
    songs: 'songs',
  }
};
