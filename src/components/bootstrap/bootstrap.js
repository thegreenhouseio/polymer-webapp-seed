import { Element as PolymerElement } from '../../../node_modules/@polymer/polymer/polymer-element.js';

import '../../components/footer/footer';
import '../../components/header/header';
import '../../components/posts-list/posts-list';
import BootstrapTemplate from './bootstrap.html';

class CustomElement extends PolymerElement {
  constructor() {
    super();
    this.textContent = 'I\'m the bootstrap-element.';
  }

  static get is() {
    return 'tgh-bootstrap';
  }

  static get template() {
    return BootstrapTemplate;
  }
}

customElements.define(CustomElement.is, CustomElement);