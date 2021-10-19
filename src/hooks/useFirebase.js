import {useEffect, useState} from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut} from "firebase/auth";
import initailizeAuthenticaton from '../components/LogIn/Firebase/firebase.init';

initailizeAuthenticaton();
const useFirebase = () => {
    const [user , setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    const auth = getAuth();
    const googleProvidor = new GoogleAuthProvider();

    const signInUsingGoogle = () =>{
        setIsLoading(true);
        signInWithPopup(auth, googleProvidor)
        .then(result => {
            setUser(result.user)
        } )
        .finally(() => setIsLoading(false));
    }
    const logOut = () => {
        setIsLoading(true);
        signOut(auth)
        .then(() => {
        setUser({})
        .finally(() => setIsLoading(false));
        })
    }
    useEffect( () =>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
            setUser(user);
            } 
            else {
                setUser({});
            }
            setIsLoading(false);

          });
    }, [])
    return{
        user,
        isLoading,
        signInUsingGoogle,
        logOut
    }
}

export default useFirebase;