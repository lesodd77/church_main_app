// @ts-nocheck
import { Meteor } from 'meteor/meteor';
import { VideoPostsCollection } from '../collections/videoPosts.collection';

Meteor.publish('myVideoPosts', function publishAllVideoPosts () {
  const { userId } = this;
  if (!userId) {
    throw Meteor.Error('Access denied');
  }
  return VideoPostsCollection.find(
    { userId, archived: { $ne: true } },
    {
      fields: {
        createdAt: false,
      },
    },
  );
});
