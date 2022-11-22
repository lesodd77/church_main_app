// @ts-nocheck
import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';

export const VideoPostsCollection = new Mongo.Collection('videoPosts');

const VideoPostsSchema = new SimpleSchema({
  video: {
    type: String,
  },
  image2: {
    type: String,
  },
  author: {
    type: String,
  },
  message: {
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
