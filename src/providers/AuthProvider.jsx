import {
    getAuth,
    signInWithPopup,
    GoogleAuthProvider,
    signOut,
    onAuthStateChanged,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
  } from "firebase/auth";
  import React, { createContext, useState, useEffect } from "react";
  import { app } from "../firebase/firebase.config"; // Ensure correct path to Firebase config
  
  // Create the AuthContext
  export const AuthContext = createContext(null);
  
  // Initialize Firebase Auth using the app instance
  const auth = getAuth(app);
  
  const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
  
    // Google Sign-In function
    const googlePopup = async () => {
      setLoading(true);
      const googleProvider = new GoogleAuthProvider();
      try {
        const result = await signInWithPopup(auth, googleProvider);
        setUser(result.user);
      } catch (error) {
        console.error("Google Sign-In Error: ", error.message);
      } finally {
        setLoading(false);
      }
    };
  
    // Register user with email and password
    const registerUser = async (email, password) => {
      setLoading(true);
      try {
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );
        setUser(userCredential.user);
      } catch (error) {
        console.error("Registration Error:", error.message);
        throw error; // Rethrow the error to handle it in the component
      } finally {
        setLoading(false);
      }
    };
  
    // Log in user with email and password
    const loginUser = async (email, password) => {
      setLoading(true);
      try {
        const userCredential = await signInWithEmailAndPassword(
          auth,
          email,
          password
        );
        setUser(userCredential.user);
      } catch (error) {
        console.error("Login Error:", error.message);
        throw error; // Rethrow the error to handle it in the component
      } finally {
        setLoading(false);
      }
    };
  
    // Sign-Out function
    const logOut = async () => {
      setLoading(true);
      try {
        await signOut(auth);
        setUser(null);
      } catch (error) {
        console.error("Sign-Out Error:", error.message);
      } finally {
        setLoading(false);
      }
    };
  
    // Handle user state changes
    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
        setLoading(false);
      });
  
      // Cleanup subscription on unmount
      return () => unsubscribe();
    }, []);
  
    // Auth context value
    const authInfo = {
      user,
      loading,
      googlePopup,
      registerUser,
      loginUser,
      logOut,
    };
  
    return (
      <AuthContext.Provider value={authInfo}>
        {children}
      </AuthContext.Provider>
    );
  };
  
  export default AuthProvider;
  