// @ts-nocheck
import { Meteor } from 'meteor/meteor';
import { CommentsCollection } from '../collections/comments.collection';


Meteor.publish('myComments', function publishAllComments() {
    const { userId } = this;
    if (!userId) {
        throw Meteor.Error('Access denied');
    }
    return CommentsCollection.find({ userId });
});
