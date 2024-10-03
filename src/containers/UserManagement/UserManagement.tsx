import Toolbar from '../../components/Toolbar/Toolbar.tsx';
import UserForm from '../../components/UserForm/UserForm.tsx';
import Users from '../../components/Users/Users.tsx';
import { useState } from 'react';
import { IUser } from '../../types';

const UserManagement = () => {
  const [users, setUsers] = useState<IUser[]>([]);

  const addUser = (user: IUser) => {
    setUsers([...users, user]);
  };

  return (
    <div>
      <header>
        <Toolbar/>
      </header>
      <main className="container">
        <div className="row mt-4">
          <div className="col-4 mb-2">
            <UserForm addUser={addUser}/>
          </div>
          <div className="col-4 mb-2">
            <Users users={users}/>
          </div>
        </div>
      </main>
    </div>
  );
};

export default UserManagement;
