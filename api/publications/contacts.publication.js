// @ts-nocheck
import { Meteor } from 'meteor/meteor';
import { ContactsCollection } from '../collections/contacts.collection';

Meteor.publish('myContacts', function publishAllContacts () {
  const { userId } = this;
  if (!userId) {
    throw Meteor.Error('Access denied');
  }
  return ContactsCollection.find({ userId });
});
