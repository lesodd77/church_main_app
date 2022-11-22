/* eslint-disable no-undef */
// @ts-nocheck
import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { VideoPostsCollection } from '../collections/videoPosts.collection';
import { PostRoles } from '../../infra/PostRoles';

Meteor.methods({
  'videoPosts.insert' ({ title, video, description, date, category, author, image2 }) {
    const { userId } = this;
    if (!userId) {
      throw Meteor.Error('Access denied');
    }
    check(title, String);
    check(video, String);
    check(image2, String);
    check(author, String);
    check(description, String);
    check(category, String);
    check(date, String);

    if (!video) {
      throw new Meteor.Error('Photo is required.');
    }

    if (!image2) {
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

    return VideoPostsCollection.insert({
      title,
      video,
      date,
      description,
      author,
      image2,
      category,
      createdAt: new Date(),
      userId,
    });
  },
  'videoPosts.remove' (postId) {
    const { userId } = this;
    if (!userId) {
      throw Meteor.Error('Access denied');
    }
    check(postId, String);

    if (!Roles.userIsInRole(userId, PostRoles.ADMIN)) {
      throw new Error('Permision denied');
    }

    return VideoPostsCollection.remove(postId);
  },
});
