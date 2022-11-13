// @ts-nocheck
import { Meteor } from 'meteor/meteor';
import { PostRoles } from './PostRoles';
import { Roles } from 'meteor/alanning:roles';

Roles.createRole(PostRoles.ADMIN, { unlessExists: true });

Meteor.startup(() => {
    const user = Meteor.users.findOne({ email: 'fadecsolution@gmail.com' });

    if (!user || Roles.userIsInRole(user._id, PostRoles.ADMIN)) {
        return;
    }
    Roles.addUsersToRoles(user._id, PostRoles.ADMIN);
});
