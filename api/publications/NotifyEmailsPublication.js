import { Meteor } from 'meteor/meteor';
import { NotifyEmailsCollection } from '../collections/NotifyEmailsCollection';

Meteor.publish('allNotifyEmails', function publishAllNotifyEmails () {
  return NotifyEmailsCollection.find();
});
