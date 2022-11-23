/* eslint-disable no-undef */
// @ts-nocheck
import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { AlbumsCollection } from '../collections/albums.collection';

Meteor.methods({
  'albums.insert' ({ title, date, image }) {
    check(title, String);
    check(image, String);
    check(date, String);

    if (!image) {
      throw new Meteor.Error('Photo is required.');
    }
    if (!title) {
      throw new Meteor.Error('Title is required.');
    }

    if (!date) {
      throw new Meteor.Error('Date is required.');
    }
    return AlbumsCollection.insert({
      title,
      date,
      image,
      createdAt: new Date(),
      userId,
    });
  },
  'albums.delete' (albumId) {
    const { userId } = this;
    if (!userId) {
      throw Meteor.Error('Access denied');
    }
    check(albumId, String);

    if (Roles.userIsInRole(userId)) {
      throw new Error('Permision denied');
    }

    return albums.AlbumsCollection.delete(albumId);
  },
});
