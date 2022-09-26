// @ts-nocheck
import { Migrations } from 'meteor/percolate:migrations';
//import { Accounts } from 'meteor/accounts-base';
import { PostsCollection } from '../collections/posts.collection';


Migrations.add({
  version: 2,
  name: 'Add a few sample posts.',
  up() {
    const createdAt = new Date();
    const { _id: userId } = Accounts.findUserByUsername('simon');
    PostsCollection.insert({
      title: 'Sampnson Abubakari',
      authorUrl: 'https://res.cloudinary.com/dungxxzhh/image/upload/v1663456540/ghf_images/ghf_fl_p3uzla.jpg',
       message: 'Give yourself Jesus for the kingdom of God is at hand', 
       date: 9/9/22,
        category: 'Gospel',
         author: 'Sampnson Abubakar',
         url: 'https://res.cloudinary.com/dungxxzhh/image/upload/v1663456540/ghf_images/ghf_fl_p3uzla.jpg',
      userId,
      createdAt,
    });
    PostsCollection.insert({
      title: 'Sampnson Abubakari',
      authorUrl: 'https://res.cloudinary.com/dungxxzhh/image/upload/v1663456540/ghf_images/ghf_fl_p3uzla.jpg',
       message: 'Give yourself Jesus for the kingdom of God is at hand', 
       date: 9/9/22,
        category: 'Gospel',
         author: 'Sampnson Abubakar',
         url: 'https://res.cloudinary.com/dungxxzhh/image/upload/v1663456540/ghf_images/ghf_fl_p3uzla.jpg',
      userId,
      createdAt,
    });
    PostsCollection.insert({
      title: 'Sampnson Abubakari',
      authorUrl: 'https://res.cloudinary.com/dungxxzhh/image/upload/v1663456540/ghf_images/ghf_fl_p3uzla.jpg',
       message: 'Give yourself Jesus for the kingdom of God is at hand', 
       date: 9/9/22,
        category: 'Gospel',
         author: 'Sampnson Abubakar',
         url: 'https://res.cloudinary.com/dungxxzhh/image/upload/v1663456540/ghf_images/ghf_fl_p3uzla.jpg',
      userId,
      createdAt,
    });
  },
});
