

import { Link } from 'react-router-dom'; 
import './NavBar.css';

function Navbar() {
  return (
    <nav>
      <Link to="/loginForm">Login</Link>
      <Link to="/register">Register</Link>
      <Link to="/">Home</Link>
    </nav>
  );
}

export default Navbar; 