import { Meteor } from 'meteor/meteor';
import { Migrations } from 'meteor/percolate:migrations';
import '../db/migrations';

import '../collections/contacts.collection';
import '../collections/posts.collection';
import '../collections/videoposts.collection';
import '../collections/NotifyEmailsCollection';


import '../methods/posts.methods';
import '../methods/videoposts.methods';
import '../methods/NotifyEmailsMethods';
import '../methods/contacts.methods';

import '../publications/posts.publication';
import '../publications/videoposts.publication';
import '../publications/contacts.publication';
import '../publications/NotifyEmailsPublication';


Meteor.startup(() => {
  Migrations.migrateTo('latest');
});
