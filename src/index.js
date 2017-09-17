import { Element as PolymerElement } from '../node_modules/@polymer/polymer/polymer-element.js';

// Define the class for a new element called custom-element
class CustomElement extends PolymerElement {
  static get is() {
    return 'custom-element';
  }

  constructor() {
    super();
    this.textContent = 'I\'m a custom-element.';
  }
}

// Register the new element with the browser
customElements.define(CustomElement.is, CustomElement);