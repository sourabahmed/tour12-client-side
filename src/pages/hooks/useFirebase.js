import { getAuth, onAuthStateChanged, signOut, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from '../Firebase/firebase.init'



initializeAuthentication();
const useFirebase = () => {
    const [user, setUser] = useState();
    console.log(user);

    const auth = getAuth();
    const signInWithGoogle = () => {
        const googleProvider = new GoogleAuthProvider();
        signInWithPopup(auth, googleProvider)
        .then(result => {
            const user = result.user;
            setUser(user);
        })
    }
    const logOut = () => {
        signOut(auth)
        .then(() => {})
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            }
            else {
                setUser({});
            }
        });
        return () => unsubscribe;
    }, [])
    return{
        user,
        signInWithGoogle,
        logOut
    }
}
export default useFirebase;