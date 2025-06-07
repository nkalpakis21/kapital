'use client'; // Ensure this is a client-side component

import React, {
    createContext,
    useContext,
    useEffect,
    useState,
    ReactNode,
  } from "react";
  import {
    User,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
    signInWithPopup,
  } from "firebase/auth";
  import { auth, googleProvider } from "../lib/firebaseConfig";
  
  interface AuthContextType {
    currentUser: User | null;
    login: (email: string, password: string) => Promise<void>;
    signup: (email: string, password: string) => Promise<User>;
    logout: () => Promise<void>;
    signInWithGoogle: () => Promise<void>;
  }
  
  const AuthContext = createContext<AuthContextType | undefined>(undefined);
  
  export function useAuth(): AuthContextType {
    const context = useContext(AuthContext);
    if (!context) {
      throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
  }
  
  interface AuthProviderProps {
    children: ReactNode;
  }
  
export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [currentUser, setCurrentUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (user) => {
        setCurrentUser(user);
        setLoading(false);
      });
      return unsubscribe;
    }, []);
  
    async function signup(email: string, password: string) {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      return userCredential.user;
    }
  
    async function login(email: string, password: string) {
      await signInWithEmailAndPassword(auth, email, password);
    }
  
    async function logout() {
      await signOut(auth);
    }
  
    async function signInWithGoogle() {
      await signInWithPopup(auth, googleProvider);
    }
  
    const value: AuthContextType = {
      currentUser,
      signup,
      login,
      logout,
      signInWithGoogle,
    };
  
    return (
      <AuthContext.Provider value={value}>
        {!loading && children}
      </AuthContext.Provider>
    );
  }
