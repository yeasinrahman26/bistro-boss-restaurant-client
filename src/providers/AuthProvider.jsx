import { Children, createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { app } from "../firebase/Firebase.congif";

export const AuthContext=createContext(null)
const auth=getAuth(app)
const AuthProvider = ({Children}) => {
    const [user, setUser] = useState(null);
    const [loading,setLoading]=useState(false)


    const createUser =(email,password)=> {
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const loginUser=(email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(email,password,auth)
    }
    const logout=()=>{
        setLoading(true);
        return signOut()
    }


    useEffect(()=>{
        const unsubscribe= onAuthStateChanged(auth,currentUser=>{
            setUser(currentUser);
            setLoading(false);
        })
        return()=>{
            return unsubscribe();
        }
    },[])




    const authInfo = {
      user,
      loading,
      setLoading,
      createUser,
      loginUser,
      logout,


    };




    return (  
        <authContext.Provider value={authInfo}>
            {Children}
        </authContext.Provider>
    );
};

export default AuthProvider;