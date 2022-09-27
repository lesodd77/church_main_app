// @ts-nocheck
import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { PostsCollection } from '../collections/posts.collection';

Meteor.methods({


  'posts.insert'({ title, authorUrl, message, date, category, author, url }) {
    check(title, String);
    check(url, String);
    check(authorUrl, String);
    check(author, String);
    check(message, String);
    check(category, String);
    check(date, String);

    
 
    

    if (!url) {
      throw new Meteor.Error('Photo is required.');
    }
    if (!authorUrl) {
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
    if (!message) {
      throw new Meteor.Error('Content is required.');
    }
   
   
   
    return PostsCollection.insert({
        title,
         authorUrl,
         date,
         message,
         author,
         url, 
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
  postsSearch(query) {
    return searchPosts({ query });
  },

  posts() {
    return PostsCollection.find({}, { sort: { title: 1 } }).fetch();
  },
  postSave(post) {
    return PostsCollection.save(post);
  },
  postRemove(post) {
    return PostsCollection.remove({ id: post.id });
  }
});
