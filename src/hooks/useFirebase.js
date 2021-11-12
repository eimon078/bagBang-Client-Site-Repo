import firebaseInit from "../pages/Login/Firebase/firebase.init";
import { getAuth, createUserWithEmailAndPassword, signOut, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, updateProfile } from "firebase/auth";
import { useEffect, useState } from "react";

firebaseInit();

const useFirebase = () => {
    const [user, setUser] = useState({})
    const [isLoading, setIsLoading] = useState(true);
    const [authError, setAuthError] = useState('');
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    //sign in with google
    const signInWithGoogle = (location, history) => {
        setIsLoading(true);
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const user = result.user;
                saveUser(user.email, user.displayName, 'PUT');
                const destination = location?.state?.from || '/';
                history.replace(destination);
                setAuthError('');
            }).catch((error) => {
                // Handle Errors here.
                const errorMessage = error.message;
                setAuthError(errorMessage);
            })
            .finally(() => setIsLoading(false));;
    }


    // user Register 
    const registerUser = (email, password, name, history) => {
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // one time added to user name 
                const newUser = { email, displayName: name };
                setUser(newUser);

                //Save user info to database
                saveUser(email, name, 'POST');

                // send user name to firebase after creation 
                updateProfile(auth.currentUser, {
                    displayName: name
                })
                    .then(() => {
                        // Profile updated!
                        // ...
                    }).catch((error) => {
                        // An error occurred
                        // ...
                    });

                history.replace('/');
                setAuthError('');
            })
            .catch((error) => {

                const errorMessage = error.message;
                console.log(errorMessage);
                setAuthError(errorMessage);
            })
            .finally(() => setIsLoading(false));
    }

    //user login
    const loginUser = (email, password, location, history) => {
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                setAuthError('');
                const destination = location?.state?.from || '/';
                history.replace(destination);
            })
            .catch((error) => {
                const errorMessage = error.message;
                console.log(errorMessage);
                setAuthError(errorMessage);
            })
            .finally(() => setIsLoading(false));
    }

    // observer 
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setIsLoading(true); //aleart
            if (user) {
                setUser(user);
            } else {
                // User is signed out
                setUser({});
            }
            setIsLoading(false)
        });
        return () => unsubscribe
    }, [])

    //user logout
    const logout = () => {
        setIsLoading(true);
        signOut(auth).then(() => {

        }).catch((error) => {

        })
            .finally(() => setIsLoading(false));
    }

    // Save User Info To Database 
    const saveUser = (email, displayName, method) => {
        const user = { email, displayName };
        fetch('http://localhost:7000/users', {
            method: method,
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })
    }

    return {
        user,
        isLoading,
        authError,
        registerUser,
        logout,
        loginUser,
        signInWithGoogle
    }
}

export default useFirebase;