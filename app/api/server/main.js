import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';
import { Migrations } from 'meteor/percolate:migrations';
import '../db/migrations';

import '../collections/posts.collection';
import '../methods/posts.methods';
import '../publications/posts.publication';
import '../collections/contacts.collection';
import '../methods/contacts.methods';
import '../publications/contacts.publication';

const SEED_USERNAME = 'meteorite';
const SEED_PASSWORD = 'password';

Meteor.startup(() => {
  Migrations.migrateTo('latest');
  if (!Accounts.findUserByUsername(SEED_USERNAME)) {
    Accounts.createUser({
      username: SEED_USERNAME,
      password: SEED_PASSWORD,
    });
  }
  const user = Accounts.findUserByUsername(SEED_USERNAME);


});
