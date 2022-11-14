// @ts-nocheck
import { Accounts } from 'meteor/accounts-base';
// import { PostsCollection } from '../api/collections/posts.collection';
import { Meteor } from 'meteor/meteor';
import { ServiceConfiguration } from 'meteor/service-configuration';

function getEmailFromUser(user) {
  if (user.services?.google) {
    return user.services.google.email;
  }
  return user.emails[0].address;
}

Accounts.onCreateUser((options, user) => {
  const customizedUser = { ...user };

  // TODO: Figurue out what we want to insert in the posts collection when a user is created
  // PostsCollection.insert({ userId: user._id, createdAt: new Date() });
  console.log(user);
  console.log(options);
  customizedUser.email = getEmailFromUser(user);
  return customizedUser;
});

Accounts.setDefaultPublishFields({
  ...Accounts._defaultPublishFields.projection,
  email: 1,
});

const settings = Meteor.settings || {};

Meteor.startup(() => {
  if (!settings.googleClientId || !settings.googleSecret) {
    throw new Error('googleClientId and googleSecret are required');
  }

  // Accounts.config({ restrictedCreateionByEmailDomain: 'swed.com' });

  ServiceConfiguration.configurations.upsert(
    {
      service: 'google',
    },

    {
      $set: {
        service: 'google',
        clientId: settings.googleClientId,
        secret: settings.googleSecret,
      },
    },
  );
});
