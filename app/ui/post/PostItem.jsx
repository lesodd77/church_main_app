import React, { memo } from 'react';

export const PostItem = memo(({ post, onMarkAsDone, onDelete }) => (
  <div className="relative flex items-start">
        <div className="flex h-5 items-center"
      >
      <Checkbox
        isChecked={post.done}
        onChange={() => onMarkAsDone(post._id)}
        >
        {post.title}
        {post.author}
        {post.authorUrl}
        {post.message}
        {post.url}  
        {post.category}
        {post.date}
        </Checkbox>
      </div>
      <div className='w-20 justify-center flex-end direction-row'>
     
    </div>
  </div>
));
