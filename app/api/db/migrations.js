// @ts-nocheck
import { Migrations } from 'meteor/percolate:migrations';
import { Accounts } from 'meteor/accounts-base';

Migrations.add({
  version: 1,
  name: 'Add a seed username and password.',
  up() {
    Accounts.createUser({
      username: 'simon',
      password: 'abc123',
    });
  },
});
