// @ts-nocheck
import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';

export const PostsCollection = new Mongo.Collection('posts');

const PostsSchema = new SimpleSchema({
  message: {
    type: String,
    optional: true,
  },
  title: {
    type: String,
    optional: true,
  },
  category: {
    type: String,
    optional: true,
  },
  url: {
    type: String,
    optional: true,
  },
  authorUrl: {
    type: String,
    optional: true,
  },

  author: {
    type: Boolean,
    optional: true,
  },

  date: {
    type: Boolean,
    optional: true,
  },
  archived: {
    type: Boolean,
    defaultValue: false,
  },
  createdAt: {
    type: Date,
  },
});
 
PostsCollection.attachSchema(PostsSchema);
