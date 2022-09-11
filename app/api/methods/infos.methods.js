import { Meteor } from 'meteor/meteor';
import { LinksCollection } from '/imports/api/links';

// ... keep the original code, 
// I just skip it here for better readability

Meteor.methods({
  'links.create': function ({ title, url }) {
    return LinksCollection.insert({ title, url })
  },
  'links.update': function ({ _id, title, url }) {
    const $set = {}
    if (title) { $set.title = title }
    if (url) { $set.url = url }
    return LinksCollection.update({ _id }, { $set })
  },
  'links.delete': function ({ _id }) {
    return LinksCollection.remove({ _id })
  }
})