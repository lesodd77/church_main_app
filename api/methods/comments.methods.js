// @ts-nocheck
import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { CommentsCollection } from '../collections/comments.collection';

Meteor.methods({
  'comments.insert' ({ date, comment, author }) {
    const { userId } = this;
    if (!userId) {
      throw Meteor.Error('Access denied');
    }
    check(date, String);
    check(comment, String);
    check(author, String);

    if (!author) {
      throw new Meteor.Error('Name is required.');
    }
    if (!comment) {
      throw new Meteor.Error('comment is required.');
    }
    if (!date) {
      throw new Meteor.Error('Subject is required.');
    }

    return CommentsCollection.insert({
      author,
      comment,
      date,

      createdAt: new Date(),
      userId,
    });
  },
  'comments.archive' ({ commentId }) {
    check(commentId, String);

    CommentsCollection.update({ _id: commentId }, { $set: { archived: true } });
  },
  'comments.remove' ({ commentId }) {
    check(commentId, String);

    CommentsCollection.remove(commentId);
  },
  'comments.update' ({ commentId }) {
    check(commentId, String);

    CommentsCollection.update(commentId);
  },
});
