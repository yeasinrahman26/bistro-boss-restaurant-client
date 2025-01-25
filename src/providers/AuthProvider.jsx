import {  useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";

import AuthContext from "./AuthContext.jsx";
import auth from "../firebase/firebase.init.js";
import useAxiosPublic from "../hooks/useAxiosPublic.jsx";



// eslint-disable-next-line react/prop-types
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const googleProvider= new GoogleAuthProvider();
  const axiosPublic=useAxiosPublic();

// sign up user
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  //login user
  const loginUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth,email, password, );
  };

  const googleSignIn=()=>{
    setLoading(true);
    return signInWithPopup(auth, googleProvider)
  }

  // logout user
  const logout = () => {
    setLoading(true);
    return signOut(auth);
  };



  // setProfile
  const updateUserProfile = (updateData) => {
    return updateProfile(auth.currentUser, updateData);
  };

//observer 
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      if (currentUser) {
        // get token and stored Client
        const userInfo = { email: currentUser.email };
        axiosPublic.post("/jwt", userInfo).then((res) => {
          if (res.data.token) {
            localStorage.setItem("access-token", res.data.token);
          }
        });
      } else {
        localStorage.removeItem("access-token");
      }
      setLoading(false);
    });
    return unsubscribe;
  }, [axiosPublic]);

  const authInfo = {
    user,
    loading,
    setLoading,
    createUser,
    loginUser,
    logout,
    updateUserProfile,
    googleSignIn,
  };

  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
