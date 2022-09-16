// @ts-nocheck
import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';

export const PostsCollection = new Mongo.Collection('posts');

const PostsSchema = new SimpleSchema({
  url: {
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

  textarea: {
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

PostsCollection.attachSchema(PostsSchema);
