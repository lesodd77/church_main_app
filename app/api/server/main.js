import { Meteor } from 'meteor/meteor';
import { Migrations } from 'meteor/percolate:migrations';
import '../db/migrations';

import '../collections/contacts.collection';
import '../collections/posts.collection';
import '../collections/NotifyEmailsCollection';

import '../methods/posts.methods';
import '../methods/NotifyEmailsMethods';
import '../methods/contacts.methods';

import '../publications/posts.publication';
import '../publications/contacts.publication';
import '../publications/NotifyEmailsPublication';

import '../infra/CustomError';

Meteor.startup(() => {
  Migrations.migrateTo('latest');
  
});
