/* eslint-disable no-undef */
import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { ContactsCollection } from '../collections/contacts.collection';
import { PostRoles } from '../../infra/PostRoles';

Meteor.methods({
  'contacts.insert' ({ name, email, agreed, subject, message }) {
    const { userId } = this;
    if (!userId) {
      throw new Meteor.Error('Access denied');
    }
    check(name, String);
    check(email, String);
    check(subject, String);
    check(agreed, Boolean);

    if (!name) {
      throw new Meteor.Error('Name is required.');
    }
    if (!email) {
      throw new Meteor.Error('Email is required.');
    }
    if (!subject) {
      throw new Meteor.Error('Subject is required.');
    }
    if (!message) {
      throw new Meteor.Error('Message is required.');
    }
    if (!agreed) {
      throw new Meteor.Error('Message is required.');
    }

    return ContactsCollection.insert({
      name,
      email,
      agreed,
      subject,
      message,
      createdAt: new Date(),
      userId,
    });
  },
  'contacts.remove' (postId) {
    const { userId } = this;
    if (!userId) {
      throw new Meteor.Error('Access denied');
    }
    check(postId, String);

    // @ts-ignore
    if (!Roles.userIsInRole(userId, PostRoles.ADMIN)) {
      throw new Error('Permision denied');
    }
    return ContactsCollection.remove(postId);
  },
});
