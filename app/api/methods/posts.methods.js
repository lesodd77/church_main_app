// @ts-nocheck
import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { PostsCollection } from '../collections/posts.collection';

Meteor.methods({
  'posts.insert'({ title, url, textarea,  category, author, image1Url }) {
    check(title, String);
    check(url, String);
    check(image1Url, String);
    check(author, String);
    check(textarea, String);
    check(category, String);
  
  
  
    if (!url) {
      throw new Meteor.Error('Photo is required.');
    }
    if (!title) {
      throw new Meteor.Error('Title is required.');
    }
   

    return PostsCollection.insert({
        title,
         url,
         textarea,
         author,
         image1Url, 
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
