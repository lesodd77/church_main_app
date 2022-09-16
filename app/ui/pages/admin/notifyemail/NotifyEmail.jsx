// @ts-nocheck
import { Meteor } from 'meteor/meteor';
import React, { memo } from 'react'; 
import { NotifyEmailsCollection } from '../../../../api/collections/NotifyEmailsCollection';
import { useSubscribe, useFind } from 'meteor/react-meteor-data';
import { Loading } from '../../../components/spinner/Loading';
import { MailIcon } from '@heroicons/react/solid'


export const NotifyEmail = () => {
    const isLoading = useSubscribe('allNotifyEmails');
    const notifyemails = useFind(() =>
   NotifyEmailsCollection.find(
      { archived: { $ne: true } },
      { sort: { createdAt: -1 } }
    )
    );
    const removeNotifyEmail = (event, _id) => {
      event.preventDefault();
      Meteor.call('notifyemails.remove', { notifyemailId: _id });
    };
    const updateNotifyEmail = (event, _id) => {
      event.preventDefault();
      Meteor.call('notifyemails. update', { notifyemailId: _id });
    };
    if (isLoading()) {
      return <Loading />;
    }

   const NotifyEmailItem = memo(({ notifyemail }) =>  (
    <div className="mt-8 m-7 flex p-1 flex-col bg-sky-50 rounded-lg shadow-lg dark:bg-slate-700 ">
    <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
      <div className="p-5 inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
        <div className="overflow-hidden shadow ring-2-rounded-lg md:rounded-lg">
          <div className="min-w-full divide-y divide-gray-300">
             <dl className="mt-1 flex-grow flex flex-col justify-between">
            
            </dl>
            <div className="mt-5 ml-4 flex items-center justify-between">
            <div>
            <a
              href="#"
              onClick={(event) => removeNotifyEmail(event, notifyemail._id)}
              className="text-red-600 hover:text-red-900"
              
            >
              <span className="bg-sky-50 text-md font-bold shadow-lg shadow-cyan-500/50 relative inline-flex items-center px-3 py-0 border border-transparent dark:text-red-500/80 hover:bg-slate-500/70 dark:hover:text-red-500 rounded-r-full">Delete</span>
            </a>
            </div>
            <div>
            <a
              href="#"
              onClick={(event) =>  updateNotifyEmail(event, notifyemail._id)}
              className="inline-flex items-right text-green-600 hover:text-red-900"
              
            >
              <span className="bg-sky-50 text-md font-bold shadow-lg shadow-cyan-900/50 relative inline-flex items-center px-3 py-0 border border-transparent dark:text-sky-500/80 hover:bg-sky-500/70 dark:hover:text-white rounded-l-full">Update</span>
            </a>
            </div>
            </div>
             
                          <div className="ml-4 grid grid-cols-1 divide-y">
                        
     
                                   <div className="text-left text-slate-700 dark:text-slate-50 text-sm"><span className='text-sky-400'>Emil : </span>&{notifyemail.email}</div>
                                    <div className="-mt-px flex divide-x divide-gray-200">
              <div className="w-0 flex-1 flex">
                <a
                  href={`mainotifyemail.email}`}
                  className="relative -mr-px w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-bl-lg hover:text-gray-500"
                >
                  <MailIcon className="w-5 h-5 text-gray-400" aria-hidden="true" />
                  <span className="ml-3 text-sky-500">Email</span>
                </a>
              </div>
             
            </div>
            
                          </div>
                        </div>
                      </div>

          <div className="min-w-0 flex-1">
             
   
         
          </div>
         
          
          
      </div>
       </div>
            </div>
      
      
   ));
    
  return (
    <div className="bg-white dark:bg-slate-700 w-full divide-y divide-gray-300">
    <div className="mt-10">
      <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
         Notify me Email List
      </h3>
     <ul role="list" className="grid grid-cols-1 gap-y-2 gap-x-2 sm:grid-cols-2 lg:grid-cols-4">
        {notifyemails.map((notifyemail) => (
          <NotifyEmailItem key={notifyemail._id} notifyemail={notifyemail} />
        ))}
      </ul>
    </div>
  </div>
)};

