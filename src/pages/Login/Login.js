import React from 'react';
import useAuth from '../hooks/useAuth'

const Login = () => {
    const {signInWithGoogle, user} = useAuth();
    console.log(user);
    const signIn = () => {
        signInWithGoogle();
    }
    return (
        <div>
            <h2>This is login</h2>
            <button onClick={signIn}>Google sign in</button>
        </div>
    );
};

export default Login;