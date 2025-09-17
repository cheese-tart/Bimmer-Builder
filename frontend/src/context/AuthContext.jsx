import { useState, useEffect, createContext } from 'react';
import { useNavigate } from 'react-router';

import {
    auth,
    provider,
    signInWithPopup,
    signOut,
    onAuthStateChanged
} from '../auth/firebaseConfig';
import { createUser } from '../../api/api';

const AuthContext = createContext();

function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [uid, setUid] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, function(currentUser) {
            if (currentUser) {
                setUser(currentUser);
            } else {
                navigate("/login");
            }
        });
        return () => {
            unsubscribe();
        };
    }, []);

    async function handleLogin() {
        try {
            const result = await signInWithPopup(auth, provider);
            const user = result.user;

            setUser({
                name: user.displayName,
                email: user.email,
            });
            console.log(user.displayName);
            console.log(user.email);

            const data = await createUser(user.displayName, user.email);
            const { _id } = data;
            setUid(_id);
            console.log("User id: ", _id);
            localStorage.setItem("uid", _id);
        } catch (error) {
            console.error("Login failed: ", error.message);
        }
    };

    async function handleLogout() {
        try {
            await signOut(auth);
            setUser(null);
            setUid(null);
            localStorage.removeItem("uid");
        } catch (error) {
            console.error("Logout failed: ", error.message);
        }
    };

    return (
        <>
            <AuthContext.Provider
                value={{
                    user,
                    setUser,
                    uid,
                    setUid,
                    handleLogin,
                    handleLogout,
                }}
            >
                {children}
            </AuthContext.Provider>
        </>
    );
};

export { AuthContext, AuthProvider };
