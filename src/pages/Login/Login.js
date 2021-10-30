import React from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../hooks/useAuth'
import './Login.css'

const Login = () => {
    const { signInWithGoogle, user } = useAuth();
    console.log(user);
    const history = useHistory();
    const location = useLocation();
    const redirect_url = location.state?.from || 'home'
    const signIn = () => {
        signInWithGoogle()
            .then(result => {
                history.push(redirect_url);
            })
            .catch(error => {
                console.log(error.message);
            })
    }
    return (
        <div className="google-login">
            <div className="login">
                <h5>Please Login</h5>
                <button onClick={signIn}><i class="fab fa-google"></i> Google sign in</button>
            </div>
        </div>
    );
};

export default Login;