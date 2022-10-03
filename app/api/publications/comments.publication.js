import { Meteor } from 'meteor/meteor';
import { CommentsCollection } from '../collections/comments.collection';


Meteor.publish('allComments', function publishAllComments() {
    return CommentsCollection.find(); 
});
