const utils = {}; // eslint-disable-line no-unused-vars

utils.createDOMFromHTML = function(htmlString) {
  let div = document.createElement('div');
  div.innerHTML = htmlString.trim();
  return div.firstChild;
};

utils.strContains =  function(str1, str2) {
  return str1.toLowerCase().includes(str2.toLowerCase());
};

utils.capitalizeFirstLetterInElement = function (selector) {
  let element = document.querySelector(selector);
  let text = element.textContent;
  text = text.charAt(0).toUpperCase() + text.slice(1);
  element.textContent = text;
};
  


export default utils;
