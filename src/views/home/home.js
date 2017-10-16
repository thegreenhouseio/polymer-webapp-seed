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

  submitForm(event) {
    console.debug('onFormSubmit', this.form); // eslint-disable-line
    event.preventDefault();
  }

  resetForm() {
    console.debug('resetForm', this.form); // eslint-disable-line
    this.form = {
      name: ''
    };
  }

  static get is() {
    return 'tgh-home';
  }

  static get template() {
    return HomeTemplate;
  }
}

customElements.define(CustomElement.is, CustomElement);