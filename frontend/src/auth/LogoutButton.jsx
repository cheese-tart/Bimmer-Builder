import { useContext } from 'react';
import Button from '@mui/material/Button';

import { AuthContext } from '../context/AuthContext';

function LogoutButton() {
    const { handleLogout } = useContext(AuthContext);

    return (
        <Button
            onClick={handleLogout}
            className="logout-button"
            variant="contained"
        >
            Log out
        </Button>
    );
}

export default LogoutButton;
