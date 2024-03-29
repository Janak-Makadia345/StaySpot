import "./navbar.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import useFetch from "../../hooks/useFetch";

const Navbar = () => {

  const { loading } = useFetch("https://fronted-f8ne.onrender.com/api/hotels/countByType");
  const { user } = useContext(AuthContext);

  // Function to handle logout
  const handleLogout = () => {
    // Remove the user from localStorage
    localStorage.removeItem('user');
    window.location.reload();
    // You can also perform any additional logout logic here (e.g., clearing the user context)
  };

  return (
    <div className="navbar">
      <div className={`loading ${loading ? 'show' : ''}`}>Please wait while data is being fetched</div>
      <div className="navContainer">
        <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
          <span className="logo">Janaks's BookingApp</span>
        </Link>
        {user ? (
          <div className="userContainer">
            <span className="username">{user.username}</span>
            <button className="navButton" onClick={handleLogout}>Logout</button>
          </div>
        ) : (
          <div className="navItems">
            {/* Link to Register */}
            <Link to="/register" style={{ textDecoration: "none" }}>
              <button className="navButton">Register</button>
            </Link>
            {/* Link to Login */}
            <Link to="/login" style={{ textDecoration: "none" }}>
              <button className="navButton">Login</button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
