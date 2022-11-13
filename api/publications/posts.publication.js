// @ts-nocheck
import { Meteor } from 'meteor/meteor';
import { PostsCollection } from '../collections/posts.collection';


Meteor.publish('myPosts', function publishAllPosts() {
    const { userId } = this;
    if (!userId) {
        throw Meteor.Error('Access denied');
    }
    return PostsCollection.find(
        { userId, archived: { $ne: true } },
        {
            fields: {
                createdAt: false,
            },
        }
    );
    // console.log(posts);
    // return posts;
});
