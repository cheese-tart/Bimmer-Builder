import { useContext } from 'react';
import Button from '@mui/material/Button';

import { AuthContext } from '../context/AuthContext';

function LoginButton() {
    const { handleLogin } = useContext(AuthContext);

    return (
        <Button
            onClick={handleLogin}
            className="login-button"
            variant="contained"
        >
            Log in with Google
        </Button>
    );
}

export default LoginButton;
