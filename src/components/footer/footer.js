import { Element as PolymerElement } from '../../../node_modules/@polymer/polymer/polymer-element.js';

import './footer.scss';
import FooterTemplate from './footer.html';

class CustomElement extends PolymerElement {
  constructor() {
    super();
    this.year = 2017;
  }

  static get is() {
    return 'tgh-footer';
  }

  static get template() {
    return FooterTemplate;
  }
}

customElements.define(CustomElement.is, CustomElement);