import { Meteor } from 'meteor/meteor';
import { Migrations } from 'meteor/percolate:migrations';
import '../db/migrations';

import '../collections/posts.collection';
import '../methods/posts.methods';
import '../publications/posts.publication';
import '../collections/contacts.collection';
import '../methods/contacts.methods';
import '../publications/contacts.publication';
import '../infra/CustomError';

Meteor.startup(() => {
  Migrations.migrateTo('latest');
  
});
