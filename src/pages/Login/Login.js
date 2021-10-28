import React from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../hooks/useAuth'

const Login = () => {
    const {signInWithGoogle, user} = useAuth();
    console.log(user);
    const history = useHistory();
    const location = useLocation();
    const redirect_url = location.state?.from || 'home'
    const signIn = () => {
        signInWithGoogle()
        .then(result => {
            history.push(redirect_url);
        })
    }
    return (
        <div>
            <h2>This is login</h2>
            <button onClick={signIn}>Google sign in</button>
        </div>
    );
};

export default Login;