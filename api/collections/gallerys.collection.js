// @ts-nocheck
import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';

export const GallerysCollection = new Mongo.Collection('gallerys');

const GallerysSchema = new SimpleSchema({
  branch: {
    type: String,
  },

  url: {
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

GallerysCollection.attachSchema(GallerysSchema);
