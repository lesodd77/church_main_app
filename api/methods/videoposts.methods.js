// @ts-nocheck
import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { VideoPostsCollection } from '../collections/videoposts.collection';

Meteor.methods({
  'videoposts.insert'({
    title,
    video,
    message,
    date,
    category,
    author,
    authorImage,
  }) {
    const { userId } = this;
    if (!userId) {
      throw Meteor.Error('Access denied');
    }
    check(title, String);
    check(video, String);
    check(authorImage, String);
    check(author, String);
    check(category, String);
    check(date, String);
    check(message, String);

    if (!video) {
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
      authorImage,
      category,
      createdAt: new Date(),
      userId,
    });
  },
  'videoposts.archive'({ videopostId }) {
    check(videopostId, String);

    VideoPostsCollection.update(
      { _id: videopostId },
      { $set: { archived: true } },
    );
  },
  'videoposts.remove'({ videopostId }) {
    check(videopostId, String);
  },
  'videoposts.update'({ videopostId }) {
    check(videopostId, String);
  },
});
