// @ts-nocheck
import { Meteor } from 'meteor/meteor';
import { GallerysCollection } from '../collections/gallerys.collection';

Meteor.publish('myGallerys', function publishAllGallerys () {
  const { userId } = this;
  if (!userId) {
    throw Meteor.Error('Access denied');
  }
  return GallerysCollection.find({ userId });
});
