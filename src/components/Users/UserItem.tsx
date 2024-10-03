import { IUser } from '../../types';

interface Props {
  user: IUser
}
const UserItem: React.FC<Props> = ({user}) => {
  return (
    <ul className="list-group">
      <h5 className="card-title mt-2 mb-2">User</h5>
      <li className="list-group-item">Name: {user.name}</li>
      <li className="list-group-item">Email: {user.email}</li>
      <li className="list-group-item">Status: {user.isActive ? 'Active' : 'Inactive'}</li>
      <li className="list-group-item">Role: {user.role}</li>
    </ul>
  );
};

export default UserItem;