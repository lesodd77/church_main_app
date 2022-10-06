import { Meteor } from 'meteor/meteor';
import { GallerysCollection } from '../collections/gallerys.collection';


Meteor.publish('allGallerys', function publishAllGallerys() {
  return GallerysCollection.find(); 
});
