import { Element as PolymerElement } from '../../../node_modules/@polymer/polymer/polymer-element.js';
import moment from 'moment';
import PostsListTemplate from './posts-list.html';
import PostsService from '../../services/posts-service';

class CustomElement extends PolymerElement {
  constructor() {
    super();

    this.maxPosts = 2;
    this.posts = new PostsService().getPosts();
  }

  formatPostCreatedTime(createdTime) {
    return moment.unix(createdTime).format('MMMM Do YYYY, h:mm:ss a');
  }

  shouldShowPost(index) {
    return index < this.maxPosts;
  }

  static get is() {
    return 'tgh-posts-list';
  }

  static get template() {
    return PostsListTemplate;
  }
}

customElements.define(CustomElement.is, CustomElement);