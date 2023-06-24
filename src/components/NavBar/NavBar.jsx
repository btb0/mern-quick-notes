import { Link } from "react-router-dom";
import * as userService from '../../utilities/users-service';
import './NavBar.css';

export default function NavBar({ user, setUser }) {
  function handleLogOut() {
    // Delegate to the users-service
    userService.logOut();
    // Update state will also cause a re-render
    setUser(null);
  }
  return (
    <nav>
      <span className="title">Quick Notes</span>
      <span>Welcome, {user.name}</span>
      &nbsp;&nbsp;
      <Link className="logout" to="" onClick={handleLogOut}>Log Out</Link>
    </nav>
  );
}