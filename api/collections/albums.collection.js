// @ts-nocheck
import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';

export const AlbumsCollection = new Mongo.Collection('albums');

const AlbumsSchema = new SimpleSchema({
  branch: {
    type: String,
  },

  image: {
    type: String,
    optional: false,
  },

  archived: {
    type: Boolean,
    defaultValue: false,
  },
  createdAt: {
    type: Date,
  },
});

AlbumsCollection.attachSchema(AlbumsSchema);
