// @ts-nocheck
import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';

export const PostsCollection = new Mongo.Collection('posts');

const PostsSchema = new SimpleSchema({
  message: {
    type: String,
   
  },
  title: {
    type: String,
   
  },
  category: {
    type: String,
   
  },
  url: {
    type: String,
   
  },
  authorUrl: {
    type: String,
   
  },

  author: {
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
