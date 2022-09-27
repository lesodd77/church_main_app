// @ts-nocheck
import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { VideoPostsCollection } from '../collections/videoposts.collection';

Meteor.methods({
  'videoposts.insert'({ title, videoUrl,message, date, category, author, image1Url }) {
    check(title, String);
    check(videoUrl, String);
    check(image1Url, String);
    check(author, String);
    check(category, String);
    check(date, String);
    check(message, String);
  
  
  
  
  
    if (!videoUrl) {
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
    if (!videoUrl) {
      throw new Meteor.Error('VideoUrl Content is required.');
    }
    if (!message) {
      throw new Meteor.Error('VideoUrl Content is required.');
    }
   
   
   
    return VideoPostsCollection.insert({
        title,
         videoUrl,
         date,
         author,
         message,
         image1Url, 
          category,
      createdAt: new Date(),
    });
  },
  'videoposts.archive'({ videopostId }) {
    check(videopostId, String);

    VideoPostsCollection.update({ _id: videopostId }, { $set: { archived: true } });
  },
  'videoposts.remove'({ videopostId }) {
    check(videopostId, String);

    VideoPostsCollection.remove(videopostId);
  },
  'videoposts.update'({ videopostId }) {
    check(videopostId, String);

    VideoPostsCollection.update(videopostId);
  },
  videopostsSearch(query) {
    return searchVideoPosts({ query });
  },
  videopostsPopular() {
    return popularVideoPosts();
  },
  videoposts() {
    return VideoPostsCollection.find({}, { sort: { title: 1 } }).fetch();
  },
  videopostSave(videopost) {
    return VideoPostsCollection.save(videopost);
  },
  videopostRemove(videopost) {
    return VideoPostsCollection.remove({ id: videopost.id });
  }
});
