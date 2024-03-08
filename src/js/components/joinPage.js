import { templates } from '../settings.js';
import utils from '../utils.js';

class JoinPage {
  constructor(element) {
    const thisJoinPage = this;

    thisJoinPage.render(element);
  }

  render (element) {
    const thisJoinPage = this;

    const generatedHTML = templates.joinPage();
    thisJoinPage.dom = {};
    thisJoinPage.dom.wrapper = element;
    thisJoinPage.dom.wrapper.innerHTML = generatedHTML;
    thisJoinPage.element = utils.createDOMFromHTML(generatedHTML);
  }
}

export default JoinPage;