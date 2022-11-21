// @ts-nocheck
import { Meteor } from 'meteor/meteor';
import { AlbumsCollection } from '../collections/albums.collection';

Meteor.publish('myAlbums', function publishAllAlbums () {
  const { userId } = this;
  if (!userId) {
    throw Meteor.Error('Access denied');
  }
  return AlbumsCollection.find(
    { userId, archived: { $ne: true } },
    {
      fields: {
        createdAt: false,
      },
    },
  );
});
