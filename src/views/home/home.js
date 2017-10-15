import { Element as PolymerElement } from '../../../node_modules/@polymer/polymer/polymer-element.js';
import '../../components/posts-list/posts-list';
import HomeTemplate from './home.html';

class CustomElement extends PolymerElement {
  constructor() {
    super();
  }

  static get is() {
    return 'tgh-home';
  }

  static get template() {
    return HomeTemplate;
  }
}

customElements.define(CustomElement.is, CustomElement);