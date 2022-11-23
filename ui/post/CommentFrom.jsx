/* eslint-disable import/no-unresolved */
/* eslint-disable react/jsx-props-no-multi-spaces */
import React, { useState } from 'react';
import { Meteor } from 'meteor/meteor';
import { ErrorAlert } from '../components/alerts/ErrorAlert';
import { SuccessAlert } from '../components/alerts/SuccessAlert';

export const CommentForm = () => {
  const [author, setAuthor] = useState('');
  const [date, setDate] = useState('');
  const [error, setError] = useState('');
  const [comment, setComment] = useState('');
  const [success, setSuccess] = useState('');

  const showError = ({ message }) => {
    setError(message);
    setTimeout(() => {
      setError('');
    }, 5000);
  };

  // eslint-disable-next-line no-shadow
  const showSuccess = ({ message }) => {
    setSuccess(message);
    setTimeout(() => {
      setSuccess('');
    }, 5000);
  };

  const saveComment = () => {
    Meteor.call(
      'comments.insert',
      { comment, author, date },
      (errorResponse) => {
        if (errorResponse) {
          showError({ message: errorResponse.error });
        } else {
          setDate('');
          setAuthor('');
          setComment('');

          showSuccess({ message: 'Your Post saved and publish.' });
        }
      },
    );
  };
  return (
    <div className="relative max-w-4xl mx-auto ">
      <div className="relative z-20 bg-white dark:bg-slate-900 rounded-lg p-8">
        <form action="">
          {error && <ErrorAlert message={error} />}
          {success && <SuccessAlert message={success} />}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
            <div className="overflow-hidden rounded-lg border border-gray-300 shadow-sm focus-within:border-gray-200 focus-within:ring-1 focus-within:ring-gray-200">
              <textarea
                rows={3}
                name="comment"
                id="comment"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                className="block w-full border-0 py-3 font-serif focus:ring-0 sm:text-sm"
                placeholder="Add your comment..."
                defaultValue=""
              />

              {/* Spacer element to match the height of the toolbar */}
              <div className="py-2" aria-hidden="true">
                <input
                  id="author"
                  type="text"
                  placeholder="Enter your name"
                  value={author}
                  onChange={(e) => setAuthor(e.target.value)}
                  className="p-1 ml-2 bg-gray-200 rounded-md text-primary font-serif sm:text-sm"
                />
                <input
                  id="date"
                  type="date"
                  placeholder="Enter Date"
                  value={date}
                  className="p-1 ml-2 bg-gray-200 rounded-md text-primary font-serif sm:text-sm"
                  onChange={(e) => setDate(e.target.value)}
                />
              </div>
            </div>
          </div>

          <div className="flex-shrink-0">
            <button
              type="submit"
              onClick={saveComment}
              className="mt-4 py-2 px-3 font-serif font-medium text-[18px] text-white bg-tertiaryOne rounded-[10px] outline-none hover:text-white hover:bg-opacity-40 transition ease-in-out duration-150"
            >
              Post comment
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
