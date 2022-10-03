import React, { memo  } from 'react';
import { UsersCollection } from '../../api/collections/users.collection'
import { useSubscribe, useFind } from 'meteor/react-meteor-data'
import { Loading } from '../components/spinner/Loading'


export const Profile = () => {
    const isLoading = useSubscribe('allUsers')
    const users = useFind(() =>
      UsersCollection.find(
        { archived: { $ne: true } },
        { sort: { createdAt: -1 } }
      )
    )
    if (isLoading()) {
      return <Loading />
    }

    const UserItem = memo(({ user }) => (
        <div className="border-t border-gray-700 pt-4 pb-3">
        <div className="flex items-center px-4">
          <div className="flex-shrink-0">
            <img className="h-10 w-10 rounded-full" src={user.userUrl} alt="" />
          </div>
          <div className="ml-3">
            <div className="text-base font-medium text-white">{user.username}</div>
            <div className="text-sm font-medium text-gray-400">{user.email}</div>
            <div className="text-sm font-medium text-gray-400">{user.password}</div>
          </div>
         
        </div>
        </div>
  )
)
return (
    
      
    <>
    <ul
      role="list"
      className="grid gap-4 pt-7 mt-5 md:grid-cols-2 lg:grid-cols-2 lg:gap-x-5 lg:gap-y-12"
  >
          {users.map((user) => (
              <UserItem key={user._id} user={user} />
          ))}
      </ul>
      </>
 

)
}
