import { Element as PolymerElement } from '../../../node_modules/@polymer/polymer/polymer-element.js';
import PostsService from '../../services/posts-service';

import PostsListTemplate from './posts-list.html';

class CustomElement extends PolymerElement {
  constructor() {
    super();

    this.maxPosts = 2;
    this.posts = new PostsService().getPosts();
  }

  // function formatTimeForPosts(posts) {
  //   let formattedPosts = [];
  //
  //   posts.forEach(post => {
  //     post.createdTimeFormatted = _.unix(post.createdTime).format('MMMM Do YYYY, h:mm:ss a');
  //
  //     formattedPosts.push(post);
  //   });
  //
  //   return posts;
  // }

  static get is() {
    return 'tgh-posts-list';
  }

  static get template() {
    return PostsListTemplate;
  }
}

customElements.define(CustomElement.is, CustomElement);