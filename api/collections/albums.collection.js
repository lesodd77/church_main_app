// @ts-nocheck
import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';

export const AlbumsCollection = new Mongo.Collection('albums');

const AlbumsSchema = new SimpleSchema({
  image: {
    type: String,
  },
  title: {
    type: String,
  },
  date: {
    type: String,
  },
  archived: {
    type: Boolean,
    defaultValue: false,
  },
  createdAt: {
    type: Date,
  },
  userId: {
    type: String,

  },
});

AlbumsCollection.attachSchema(AlbumsSchema);
