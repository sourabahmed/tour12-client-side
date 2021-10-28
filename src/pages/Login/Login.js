import React from 'react';
import useFirebase from '../hooks/useFirebase';

const Login = () => {
    const {signInWithGoogle} = useFirebase();
    
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