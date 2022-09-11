// @ts-nocheck
import SimpleSchema from 'simpl-schema';
import { Meteor } from 'meteor/meteor';

SimpleSchema.defineValidationErrorTransform(error => {
  const ddpError = new Meteor.Error(error.message);
  ddpError.error = 'validation-error';
  ddpError.details = error.details.message;
  return ddpError;
});
