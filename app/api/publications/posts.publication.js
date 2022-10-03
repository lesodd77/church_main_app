import { Meteor } from 'meteor/meteor';
import { PostsCollection } from '../collections/posts.collection';


Meteor.publish('postsByLoggedUser', function publishPosts() {
    return PostsCollection.find({ userId: this.userId });
  });