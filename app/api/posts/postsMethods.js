import { Meteor } from "meteor/meteor";
import { searchPosts, popularPosts } from "./postsRest";
import { PostsCollection } from "../collection/posts.collection";

Meteor.methods({
  postsSearch(query) {
    return searchPosts({ query });
  },
  postsPopular() {
    return popularPosts();
  },
  posts() {
    return PostsCollection.find({}, { sort: { title: 1 } }).fetch();
  },
  postSave(post) {
    return PostsCollection.save(post);
  },
  postRemove(post) {
    return PostsCollection.remove({ id: post.id });
  }
});