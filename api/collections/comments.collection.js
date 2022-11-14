// @ts-nocheck
import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';

export const CommentsCollection = new Mongo.Collection('comments');

const CommentsSchema = new SimpleSchema({
  author: {
    type: String,
  },

  date: {
    type: String,
  },

  comment: {
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

CommentsCollection.attachSchema(CommentsSchema);
