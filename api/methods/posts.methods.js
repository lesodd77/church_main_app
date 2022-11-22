/* eslint-disable no-undef */
/* eslint-disable import/no-unresolved */

// @ts-nocheck
import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { PostsCollection } from '../collections/posts.collection';
import { PostRoles } from '../../infra/PostRoles';

Meteor.methods({
  'posts.insert' ({ title, image1, description, date, category, author, image }) {
    const { userId } = this;
    if (!userId) {
      throw Meteor.Error('Access denied');
    }
    check(title, String);
    check(image1, String);
    check(image, String);
    check(author, String);
    check(description, String);
    check(category, String);
    check(date, String);

    if (!image1) {
      throw new Meteor.Error('Photo is required.');
    }

    if (!image) {
      throw new Meteor.Error('Photo is required.');
    }
    if (!title) {
      throw new Meteor.Error('Title is required.');
    }

    if (!date) {
      throw new Meteor.Error('Date is required.');
    }
    if (!category) {
      throw new Meteor.Error('Category is required.');
    }
    if (!author) {
      throw new Meteor.Error('Author is required.');
    }
    if (!description) {
      throw new Meteor.Error('Content is required.');
    }

    return PostsCollection.insert({
      title,
      image1,
      date,
      description,
      author,
      image,
      category,
      createdAt: new Date(),
      userId,
    });
  },
  'posts.remove' (postId) {
    const { userId } = this;
    if (!userId) {
      throw Meteor.Error('Access denied');
    }
    check(postId, String);

    if (!Roles.userIsInRole(userId, PostRoles.ADMIN)) {
      throw new Error('Permision denied');
    }

    return PostsCollection.remove(postId);
  },
});
