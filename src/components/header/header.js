import { Element as PolymerElement } from '../../../node_modules/@polymer/polymer/polymer-element.js';
import HeaderTemplate from './header.html';

class CustomElement extends PolymerElement {
  constructor() {
    super();
  }

  static get is() {
    return 'tgh-header';
  }

  static get template() {
    return HeaderTemplate;
  }
}

customElements.define(CustomElement.is, CustomElement);