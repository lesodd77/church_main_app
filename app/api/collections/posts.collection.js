// @ts-nocheck
import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';

export const PostsCollection = new Mongo.Collection('posts');

const PostsSchema = new SimpleSchema({

  message: String,
  done: {
    type: Boolean,
    defaultValue: false,
  },

  url: String,
  done: {
    type: Boolean,
    defaultValue: false,
  },
title: String,
  done: {
    type: Boolean,
    defaultValue: false,
  },

  author: String,
  done: {
    type: Boolean,
    defaultValue: false,
  },

  category: String,
  done: {
    type: Boolean,
    defaultValue: false,
  },

  authorUrl: String,
  done: {
    type: Boolean,
    defaultValue: false,
  },
  userId: {
    type: String,
    regEx: SimpleSchema.RegEx.Id,
  },
  createdAt: Date,
});
 
PostsCollection.attachSchema(PostsSchema);
