// @ts-nocheck
import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { NotifyEmailsCollection } from '../collections/NotifyEmailsCollection';

Meteor.methods({
  'notifyemails.insert' ({ notifyemail }) {
    check(notifyemail, String);

    if (!notifyemail) {
      throw new Meteor.Error('Email is required.');
    }

    return NotifyEmailsCollection.insert({
      notifyemail,

      createdAt: new Date(),
    });
  },
  'notifyemails.archive' ({ notifyemailId }) {
    check(notifyemailId, String);

    NotifyEmailsCollection.update(
      { _id: notifyemailId },
      { $set: { archived: true } },
    );
  },
  'notifyemails.remove' ({ notifyemailId }) {
    check(notifyemailId, String);

    NotifyEmailsCollection.remove(notifyemailId);
  },
  'notifyemails.update' ({ notifyemailId }) {
    check(notifyemailId, String);

    NotifyEmailsCollection.update(notifyemailId);
  },
});
