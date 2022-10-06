// @ts-nocheck
import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { GallerysCollection } from '../collections/gallerys.collection';

Meteor.methods({
  'gallerys.insert'({ branch, url }) {
    check(branch, String);
    check(url, String);
    

    if (!branch) {
      throw new Meteor.Error('Branch is required.');
    }
    if (!url) {
      throw new Meteor.Error('url is required.');
    }
    

    return GallerysCollection.insert({
      branch,
      url,
    
      createdAt: new Date(),
    });
  },
  'gallerys.archive'({ galleryId }) {
    check(galleryId, String);

    GallerysCollection.update({ _id: galleryId }, { $set: { archived: true } });
  },
  'gallerys.remove'({ galleryId }) {
    check(galleryId, String);

    GallerysCollection.remove(galleryId);
  },
  'gallerys.update'({ galleryId }) {
    check(galleryId, String);

    GallerysCollection.update(galleryId);
  },
});
