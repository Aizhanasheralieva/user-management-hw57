import Toolbar from '../../components/Toolbar/Toolbar.tsx';
import UserForm from '../../components/UserForm/UserForm.tsx';
import Users from '../../components/Users/Users.tsx';
import { useState } from 'react';
import { IUser } from '../../types';

const UserManagement = () => {
  const [users, setUsers] = useState<IUser[]>([
    {id: '1', name: 'Beksultan', email: 'name@example.com', role: 'editor', isActive: true},
    {id: '2', name: 'Petr', email: 'name@example.com', role: 'editor', isActive: false},
  ]);

  const addNewUser = (newUser: IUser) => {
    setUsers(prevState => [...prevState, newUser]);
  };

  return (
    <div>
      <header>
        <Toolbar />
      </header>
      <main className="container">
        <div className="row mt-4">
          <div className="col-4 mb-2">
            <UserForm addNewUser={addNewUser} />
          </div>
          <div className="col-8 mb-2">
            <Users users={users} />
          </div>
        </div>
      </main>
    </div>
  );
};

export default UserManagement;
