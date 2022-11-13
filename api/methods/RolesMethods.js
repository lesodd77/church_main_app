// @ts-nocheck
import { Meteor } from 'meteor/meteor';
import { Roles } from 'meteor/alanning:roles';
import { PostRoles } from '../../infra/PostRoles';

Meteor.methods({
  'roles.isAdmin'() {
    const { userId } = this;
    if (!userId) {
      throw new Error('Access denied');
    }
    return Roles.usersIsInRole(userId, PostRoles.ADMIN);
  },
});
