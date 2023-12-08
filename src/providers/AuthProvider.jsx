/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";

import app from '../firebase/firebase.config'
import useAxiosUsers from "../hooks/useAxiosUsers";

export  const AuthContext = createContext(null)

const auth = getAuth(app);


const googleProvider = new GoogleAuthProvider();    


const AuthProvider = ({children}) => {
    const axiosUsers = useAxiosUsers()

const [user, setUser] = useState();
const [loading, setLoading] = useState(true)

    const googleSignIn = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

    const signUp = ( email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password )
    }

    const signIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

const updateUserInfo = (displayName, photoURL) => {
    return updateProfile(auth.currentUser, {
        displayName: displayName,
        photoURL: photoURL
    });
}

    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }

useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      
        setUser(currentUser)
        if (currentUser) {
            const userInfo = {email: currentUser.email}
            axiosUsers.post('/jwt', userInfo)
            .then(res => {
                if (res.data.token) {
                    localStorage.setItem('access-token', res.data.token)
                }
            })
        }else{
            localStorage.removeItem('access-token')
        }
        setLoading(false)
    })
    return (() => {
        return unsubscribe()
    })
},[axiosUsers])

    const AuthInfo = {
        googleSignIn,
        signUp,
        signIn, 
        user,
        logOut, 
        loading,
        updateUserInfo
    }
    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;