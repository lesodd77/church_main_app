// @ts-nocheck
import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';

export const NotifyEmailsCollection = new Mongo.Collection('notifyemails');

const NotifyEmailsSchema = new SimpleSchema({

  email: {
    type: String,
    regEx: SimpleSchema.RegEx.Email,
  },

  archived: {
    type: Boolean,
    defaultValue: false,
  },
  createdAt: {
    type: Date,
  },
});

NotifyEmailsCollection.attachSchema(NotifyEmailsSchema);
