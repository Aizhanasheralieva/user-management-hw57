
const UserForm = () => {
  return (
    <form>
      <h4>Add new user</h4>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">Enter your name</label>
        <input
          type="text"
          id="name"
          name="name"
          className="form-control" placeholder="your name"/>
      </div>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">Enter your email address</label>
        <input
          type="email"
          className="form-control"
          id="email"
          placeholder="name@example.com"/>
      </div>
      <div className="mb-3">
        <label htmlFor="role" className="form-label">Role</label>
        <select
          id="role"
          className="form-select"
          >
          <option selected>Choose one of the following roles</option>
          <option value="user">User</option>
          <option value="editor">Editor</option>
          <option value="admin">Admin</option>
        </select>
      </div>

      <div className="form-check mb-3">
        <input
          type="checkbox"
          id="active"
          className="form-check-input"
        />
        <label htmlFor="active" className="form-check-label">Active</label>
      </div>
      <button type="button" className="btn btn-primary">Add User</button>
    </form>
  );
};

export default UserForm;