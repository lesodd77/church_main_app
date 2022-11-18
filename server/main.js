// @ts-nocheck
import { Meteor } from 'meteor/meteor';
import { Cloudinary } from 'meteor/socialize:cloudinary';

import '../api/collections/gallerys.collection';
import '../api/collections/comments.collection';
import '../api/collections/contacts.collection';
import '../api/collections/posts.collection';
import '../api/collections/videoposts.collection';
import '../api/collections/NotifyEmailsCollection';

import '../api/methods/gallerys.methods';
import '../api/methods/posts.methods';
import '../api/methods/RolesMethods';
import '../api/methods/videoposts.methods';
import '../api/methods/NotifyEmailsMethods';
import '../api/methods/contacts.methods';
import '../api/methods/comments.methods';

import '../api/publications/gallerys.publication';
import '../api/publications/comments.publication';
import '../api/publications/posts.publication';
import '../api/publications/videoposts.publication';
import '../api/publications/contacts.publication';
import '../api/publications/NotifyEmailsPublication';

import '../infra/CustomError';
import '../infra/accounts';
import '../infra/roles';

// Rules are bound to the connection from which they are are executed. This means you have a userId available as this.userId if there is a logged in user. Throw a new Meteor.Error to stop the method from executing and propagate the error to the client. If rule is not set a standard error will be thrown.
Cloudinary.rules.delete = function (/** @type {any} */ publicId) {
  if (!this.userId && !publicId) {
    throw new Meteor.Error('Not Authorized', "Sorry, you can't do that!");
  }
};

Cloudinary.rules.sign_upload = function () {
  if (!this.userId) throw new Meteor.Error('Not Authorized', "Sorry, you can't do that!");
};

Cloudinary.rules.private_resource = function (/** @type {any} */ publicId) {
  if (!this.userId && !publicId) {
    throw new Meteor.Error('Not Authorized', "Sorry, you can't do that!");
  }
};

Cloudinary.rules.download_url = function (/** @type {any} */ publicId) {
  if (!this.userId && !publicId) {
    throw new Meteor.Error('Not Authorized', "Sorry, you can't do that!");
  }
};

Meteor.startup(() => {});
