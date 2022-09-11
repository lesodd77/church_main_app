import { Meteor } from 'meteor/meteor';
import { ContactsCollection } from '../collections/contacts.collection';


Meteor.publish('allContacts', function publishAllContacts() {
    return ContactsCollection.find();
});
