import React, { memo } from 'react';

export const PostItem = memo(({ post, onMarkAsDone, onDelete }) => (
  <div className="relative flex items-start">
        <div className="flex h-5 items-center"
      >
      <input
        isChecked={post.done}
        onChange={() => onMarkAsDone(post._id)}
        type="checkbox"
        {...title}
        {...author}
        {...authorUrl}
        {...message}
        {...url}  
        {...category}
        {...date}
        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"

        />
      </div>
   
  </div>
));
