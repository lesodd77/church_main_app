/* eslint-disable no-undef */
// @ts-nocheck
import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { VideoPostsCollection } from '../collections/videoposts.collection';
import { PostRoles } from '../../infra/PostRoles';

Meteor.methods({
  'videoposts.insert' ({
    title,
    video,
    message,
    date,
    category,
    author,
    image,
  }) {
    const { userId } = this;
    if (!userId) {
      throw Meteor.Error('Access denied');
    }
    check(title, String);
    check(video, String);
    check(image, String);
    check(author, String);
    check(category, String);
    check(date, String);
    check(message, String);

    if (!video) {
      throw new Meteor.Error('Video is required.');
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
    if (!video) {
      throw new Meteor.Error('Video Content is required.');
    }
    if (!message) {
      throw new Meteor.Error('Video Content is required.');
    }

    return VideoPostsCollection.insert({
      title,
      video,
      date,
      author,
      message,
      image,
      category,
      createdAt: new Date(),
      userId,
    });
  },
  'videoposts.remove' (postId) {
    const { userId } = this;
    if (!userId) {
      throw new Meteor.Error('Access denied');
    }
    check(postId, String);

    if (!Roles.userIsInRole(userId, PostRoles.ADMIN)) {
      throw new Error('Permision denied');
    }
    return VideoPostsCollection.remove(postId);
  },
});
