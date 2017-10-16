import { Element as PolymerElement } from '../../../node_modules/@polymer/polymer/polymer-element.js';
import '../../components/posts-list/posts-list';
import HomeTemplate from './home.html';

class CustomElement extends PolymerElement {
  constructor() {
    super();

    this.form = {
      name: ''
    };
  }

  submitForm() {
    console.log('onFormSubmit', this.form); // eslint-disable-line
    return false;
  }

  resetForm() {
    console.log('resetForm', this.form); // eslint-disable-line
    this.form = {
      name: ''
    };
  }

  shouldDisplayGreeting() {
    return this.name !== '';
  }

  static get is() {
    return 'tgh-home';
  }

  static get template() {
    return HomeTemplate;
  }
}

customElements.define(CustomElement.is, CustomElement);