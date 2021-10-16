/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from 'firebase/auth'
import initializeAuthentication from "../firebase/firebase.init";

initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState();

    const googleprovider = new GoogleAuthProvider();
    const auth = getAuth();

    const signInUsingGoogle = () => {
        return signInWithPopup(auth, googleprovider)
    }

    //observe user state change
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            } else {
                setUser({})
            }
        })
        return unsubscribe;
    }, [])

    const logout = () => {
        signOut(auth)
            .then(() => {
                setUser({})
            })
    }

    return {
        user,
        signInUsingGoogle,
        logout
    }
}

export default useFirebase;