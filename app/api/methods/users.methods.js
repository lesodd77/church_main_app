// @ts-nocheck
import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { UsersCollection } from '../collections/users.collection';

Meteor.methods({
  'users.insert'({ username, password }) {
 
    check(password, String);
    check(username, String);
   
  
    if (!password) {
      throw new Meteor.Error('Name is required.');
    }


    if (!username) {
      throw new Meteor.Error('comment is required.');
    }
   
  
    return UsersCollection.insert({
      username,
      password,
    
      createdAt: new Date(),
    });
  },
  'users.archive'({ userId }) {
    check(userId, String);

    UsersCollection.update({ _id: userId }, { $set: { archived: true } });
  },
  'users.remove'({ userId }) {
    check(userId, String);

    UsersCollection.remove(userId);
  },
  'users.update'({ userId }) {
    check(userId, String);

    UsersCollection.update(userId);
  },
});
