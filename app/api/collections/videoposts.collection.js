// @ts-nocheck
import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';

export const VideoPostsCollection = new Mongo.Collection('videoposts');

const VideoPostsSchema = new SimpleSchema({
  video: {
    type: String,
  },
  image1Url: {
    type: String,
  },
  author: {
    type: String,
     
  },
  
  title: {
    type: String,
  },
  date: {
    type: String,
  },

  category: {
    type: String,
  },


  archived: {
    type: Boolean,
    defaultValue: false,
  },
  createdAt: {
    type: Date,
  },
});

VideoPostsCollection.attachSchema(VideoPostsSchema);
