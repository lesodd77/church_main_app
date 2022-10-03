import { Meteor } from 'meteor/meteor';

import '../collections/users.collection';
import '../collections/comments.collection';
import '../collections/contacts.collection';
import '../collections/posts.collection';
import '../collections/videoposts.collection';
import '../collections/NotifyEmailsCollection';


import '../methods/users.methods';
import '../methods/posts.methods';
import '../methods/videoposts.methods';
import '../methods/NotifyEmailsMethods';
import '../methods/contacts.methods';
import '../methods/comments.methods';

import '../publications/users.publication';
import '../publications/comments.publication';
import '../publications/posts.publication';
import '../publications/videoposts.publication';
import '../publications/contacts.publication';
import '../publications/NotifyEmailsPublication';


Meteor.startup(() => {

});
