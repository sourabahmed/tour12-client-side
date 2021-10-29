import { getAuth, onAuthStateChanged, signOut, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from '../Firebase/firebase.init'



initializeAuthentication();
const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    console.log(user);

    const auth = getAuth();
    const signInWithGoogle = () => {
        setIsLoading(true);
        const googleProvider = new GoogleAuthProvider();
        return signInWithPopup(auth, googleProvider);
        
    }
    const logOut = () => {
        signOut(auth)
        .then(() => {})
        .finally(() => setIsLoading(false));
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            }
            else {
                setUser({});
            }
            setIsLoading(false)
        });
        return () => unsubscribe;
    }, [])
    return{
        user,
        signInWithGoogle,
        logOut,
        isLoading
    }
}
export default useFirebase;