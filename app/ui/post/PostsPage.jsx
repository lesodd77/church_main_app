import { Meteor } from 'meteor/meteor';
import React, { useState } from 'react';
import { useTracker, useFind, useSubscribe } from 'meteor/react-meteor-data';

import { PostItems } from './PostItems';
import { PostsCollection } from '../../api/collections/posts.collection';

/* eslint-disable import/no-default-export */
export default function PostsPage() {
  const [hideDone, setHideDone] = useState(false);
  const isLoading = useSubscribe('postsByLoggedUser');
  const userId = useTracker(() => Meteor.userId());
  const filter = hideDone ? { done: { $ne: true }, userId } : { userId };
  const posts = useFind(
    () => PostsCollection.find(filter, { sort: { createdAt: -1 } }),
    [hideDone]
  );
  const pendingCount = PostsCollection.find({
    done: { $ne: true },
    userId,
  }).count();

  return (
    <>
     
      <PostItems
        isLoading={isLoading}
        posts={posts}
        pendingCount={pendingCount}
        hideDone={hideDone}
        setHideDone={setHideDone}
      />
    </>
  );
}
