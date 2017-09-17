import { Element as PolymerElement } from '../../../node_modules/@polymer/polymer/polymer-element.js';

import FooterTemplate from './footer.html';

class CustomElement extends PolymerElement {
  constructor() {
    super();
    this.name = 'Footer';
  }

  static get is() {
    return 'tgh-footer';
  }

  static get template() {
    return FooterTemplate;
  }
}

customElements.define(CustomElement.is, CustomElement);