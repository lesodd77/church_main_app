// @ts-nocheck
import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';

export const UsersCollection = new Mongo.Collection('ursers');

const UsersSchema = new SimpleSchema({

  username: {
    type: String,
     
  },
   password: {
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

UsersCollection.attachSchema(UsersSchema);
