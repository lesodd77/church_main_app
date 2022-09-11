// @ts-nocheck
import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';

export const ContactsCollection = new Mongo.Collection('contacts');

const ContactsSchema = new SimpleSchema({
  name: {
    type: String,
  },
  email: {
    type: String,
    regEx: SimpleSchema.RegEx.Email,
  },
  subject: {
    type: String,
    optional: true,
  },

  message: {
    type: String,
    optional: true,
  },

  agreed: {
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

ContactsCollection.attachSchema(ContactsSchema);
