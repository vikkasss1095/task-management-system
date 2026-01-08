export default function Navbar({ user, setUser }) {
 const logout = () => {
  localStorage.removeItem("user");
  window.location.reload(); 
};

  

  return (
    <div className="navbar">
      <div className="navbar-left">
        <div className="logo-circle">TM</div>
        <h4>Task Manager</h4>
      </div>

      <div className="navbar-right">
        <div className="user-info">
          <div className="user-avatar">
            {user?.name?.charAt(0).toUpperCase()}
          </div>
          <div>
            <div className="user-name">{user?.name}</div>
            <div className="user-email">{user?.email}</div>
          </div>
        </div>

        <button className="btn btn-danger btn-sm" onClick={logout}>
          Logout
        </button>
      </div>
    </div>
  );
}
