import { IUser } from '../../types';

interface Props {
  user: IUser
}
const UserItem: React.FC<Props> = ({user}) => {
  return (
    // <div className="card mb-3">
    //   <div className="row">
    //     <div>
    //
    //     </div>
    //     <div>
    //       <h5 className="card-title">User</h5>
    //       <p className="card-text">User name</p>
    //       <p className="card-text">User email</p>
    //       <p className="card-text">User active</p>
    //       <p className="card-text">User role</p>
    //     </div>
    //   </div>
    // </div>
    <ul className="list-group">
      <h5 className="card-title mt-2 mb-2">User</h5>
      <li className="list-group-item">{user.name}</li>
      <li className="list-group-item">{user.email}</li>
      <li className="list-group-item">Status: {user.isActive ? 'Active' : 'Inactive'}</li>
      <li className="list-group-item">{user.role}</li>
    </ul>
  );
};

export default UserItem;