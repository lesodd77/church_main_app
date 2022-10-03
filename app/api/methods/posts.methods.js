// @ts-nocheck
import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { PostsCollection } from '../collections/posts.collection';
import { checkLoggedIn } from '../common/auth';

/**
 * Insert a post for the logged user.
 * @param {{ message, url, author, title, category, authorUrl : String }}
 * @throws Will throw an error if user is not logged in.
 */
 const insertPost = ({ message, url, author, title, category, authorUrl  }) => {
  check(message, url, author, title, category, authorUrl , String);
  checkLoggedIn();
  PostsCollection.insert({
    message, url, author, title, category, authorUrl ,
    userId: Meteor.userId(),
    createdAt: new Date(),
  });
};

/**
 * Check if user is logged in and is the post owner.
 * @param {{ postId: String }}
 * @throws Will throw an error if user is not logged in or is not the post owner.
 */
const checkPostOwner = ({ postId }) => {
  check(postId, String);
  checkLoggedIn();
  const post = TasksCollection.findOne({
    _id: postId,
    userId: Meteor.userId(),
  });
  if (!post) {
    throw new Meteor.Error('Error', 'Access denied.');
  }
};

/**
 * Remove a post.
 * @param {{ postId: String }}
 * @throws Will throw an error if user is not logged in or is not the post owner.
 */
export const removePost = ({ postId }) => {
  checkPostOwner({ postId });
  PostsCollection.remove(postId);
};

/**
 * Toggle post as done or not.
 * @param {{ postId: String }}
 * @throws Will throw an error if user is not logged in or is not the post owner.
 */
const togglePostDone = ({ postId }) => {
  checkPostOwner({ postId });
  const post = PostsCollection.findOne(postId);
  PostsCollection.update({ _id: postId }, { $set: { done: !post.done } });
};

/**
 * Register post API methods.
 */
Meteor.methods({
  insertPost,
  removePost,
  togglePostDone,
});