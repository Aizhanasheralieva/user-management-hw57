import { useState } from 'react';
import { IUserMutation } from '../../types';

interface Props {
  addNewUser: (newUser: {
    role: "user" | "editor" | "admin";
    name: string;
    id: string;
    isActive: boolean;
    email: string
  }) => void;
}
const UserForm: React.FC<Props> = ({addNewUser}) => {
  const [newUser, setNewUser] = useState<IUserMutation>({
    name: '',
    email: '',
    role: 'user',
    isActive: false,
  });

  const changeUser = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, type, checked, value } = e.target;

    setNewUser(prevState => {
      return {
        ...prevState,
        [name]: type === 'checkbox' ? checked : value,
      }
    });
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (
      newUser.name.trim().length === 0 ||
      newUser.email.trim().length === 0 ||
      newUser.role.trim().length === 0
    ) {
      alert('Fill out all the fields!');
    } else {
      addNewUser({
        id: String(new Date()),
        ...newUser,
      });

      setNewUser({
        name: '',
        email: '',
        role: 'user',
        isActive: false,
      });
    }
  };


  return (
    <form onSubmit={onSubmit}>
      <h4>Add new user</h4>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">Enter your name</label>
        <input
          type="text"
          id="name"
          name="name"
          className="form-control" placeholder="your name"
          value={newUser.name}
          onChange={changeUser}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">Enter your email address</label>
        <input
          type="email"
          className="form-control"
          id="email"
          name="email"
          placeholder="name@example.com"
          value={newUser.email}
          onChange={changeUser}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="role" className="form-label">Role</label>
        <select
          id="role"
          className="form-select"
          name="role"
          value={newUser.role}
          onChange={changeUser}
          >
          <option value>Choose one of the following roles</option>
          <option value="user">User</option>
          <option value="editor">Editor</option>
          <option value="admin">Admin</option>
        </select>
      </div>

      <div className="form-check mb-3">
        <input
          type="checkbox"
          id="isActive"
          className="form-check-input"
          name="isActive"
          checked={newUser.isActive}
          onChange={changeUser}
        />
        <label htmlFor="active" className="form-check-label">Active</label>
      </div>
      <button type="sumbit" className="btn btn-primary">Add User</button>
    </form>
  );
};

export default UserForm;