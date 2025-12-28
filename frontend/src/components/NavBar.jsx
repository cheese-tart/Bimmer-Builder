import { Link } from 'react-router';

import LogoutButton from '../auth/LogoutButton';

import '../css/NavBar.css';

function NavBar() {
    return <nav className="navbar">
        <Link to="/" className="logo">Home</Link>

        <ul>
            <li><LogoutButton></LogoutButton></li>
        </ul>
    </nav>
}

export default NavBar;
