import * as React from 'react';
import UserItem from './UserItem.tsx';
import { IUser } from '../../types';

interface Props {
  users: IUser[]
}

const Users: React.FC<Props> = ({users}) => {
  return (
    <>
      {users.map((user) => (
        <UserItem key={user.id} user={user} />
      ))}

    </>
  );
};

export default Users;