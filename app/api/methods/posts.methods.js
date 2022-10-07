// @ts-nocheck
import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { PostsCollection } from '../collections/posts.collection';

Meteor.methods({
  'posts.insert'({ title, url, message, date, category, author, authorUrl }) {
    check(title, String);
    check(url, String);
    check(authorUrl, String);
    check(author, String);
    check(category, String);
    check(date, String);
    check(message, String);
  
  
  
  
  
    if (!url) {
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
    if (!authorUrl) {
      throw new Meteor.Error('VideoUrl Content is required.');
    }
    if (!message) {
      throw new Meteor.Error('VideoUrl Content is required.');
    }
   
   
   
    return PostsCollection.insert({
        title,
         url,
         date,
         author,
         message,
         authorUrl, 
          category,
          createdAt: new Date(),
    });
  },
  'posts.archive'({ postId }) {
    check(postId, String);

    PostsCollection.update({ _id: postId }, { $set: { archived: true } });
  },
  'posts.remove'({ postId }) {
    check(postId, String);

    PostsCollection.remove(postId);
  },
  'posts.update'({ postId }) {
    check(postId, String);

    PostsCollection.update(postId);
  },
});
