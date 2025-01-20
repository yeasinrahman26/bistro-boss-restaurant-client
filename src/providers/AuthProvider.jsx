import {  useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

import AuthContext from "./AuthContext.jsx";
import auth from "../firebase/firebase.init.js";



const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const loginUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth,email, password, );
  };
  const logout = () => {
    setLoading(true);
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
      return unsubscribe
  }, []);

  const authInfo = {
    user,
    loading,
    setLoading,
    createUser,
    loginUser,
    logout,
  };

  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
