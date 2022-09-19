import { Meteor } from 'meteor/meteor';
import { VideoPostsCollection } from '../collections/videoposts.collection';


Meteor.publish('allVideoPosts', function publishAllVideoPosts() {
    return VideoPostsCollection.find(); 
});
