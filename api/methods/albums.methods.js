/* eslint-disable no-undef */
// @ts-nocheck
import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { AlbumsCollection } from '../collections/albums.collection';
import { PostRoles } from '../../infra/PostRoles';

Meteor.methods({
  'albums.insert' ({ branch, image }) {
    const { userId } = this;
    if (!userId) {
      throw Meteor.Error('Access denied');
    }
    check(branch, String);
    check(image, String);

    if (!branch) {
      throw new Meteor.Error('Branch is required.');
    }
    if (!image) {
      throw new Meteor.Error('image is required.');
    }

    return AlbumsCollection.insert({
      branch,
      image,
      createdAt: new Date(),
      userId,
    });
  },
  'albums.remove' (postId) {
    const { userId } = this;
    if (!userId) {
      throw new Meteor.Error('Access denied');
    }
    check(postId, String);

    if (!Roles.userIsInRole(userId, PostRoles.ADMIN)) {
      throw new Error('Permision denied');
    }
    return AlbumsCollection.remove(postId);
  },
});
