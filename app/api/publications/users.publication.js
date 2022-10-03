import { Meteor } from 'meteor/meteor';
import { UsersCollection } from '../collections/users.collection';


Meteor.publish('allUsers', function publishAllUsers() {
    return UsersCollection.find(); 
});
