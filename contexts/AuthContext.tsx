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
  import { magic } from '../lib/magic/magic'; // Import magic
  
  interface AuthContextType {
    currentUser: User | null;
    login: (email: string, password: string) => Promise<void>;
    signup: (email: string, password: string) => Promise<User>;
    logout: () => Promise<void>;
    signInWithGoogle: () => Promise<void>;
    loading: boolean;
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
      const checkMagicLogin = async () => {
        try {
          const isLoggedIn = await magic?.user.isLoggedIn();
          if (isLoggedIn) {
            const metadata = await magic?.user.getInfo();
            console.log(metadata)
            // You might need to map Magic user info to Firebase User type or a common User type
            setCurrentUser({ uid: metadata?.publicAddress, email: metadata?.email, ...metadata } as User); // Simplified mapping
          } else {
            setCurrentUser(null);
          }
        } catch (error) {
          console.error("Magic login check failed:", error);
          setCurrentUser(null);
        } finally {
          setLoading(false);
        }
      };

      // Remove Firebase onAuthStateChanged listener for now, if you want Magic to be the primary check
      // const unsubscribe = onAuthStateChanged(auth, (user) => {
      //   setCurrentUser(user);
      //   setLoading(false);
      // });
      // return unsubscribe;

      checkMagicLogin();

    }, []);
  
    async function signup(email: string, password: string) {
      // This still uses Firebase signup. Consider if you want to use Magic for signup here too.
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      return userCredential.user;
    }
  
    async function login(email: string, password: string) {
      // This still uses Firebase login. Consider if you want to use Magic for login here too.
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
      loading,
    };
  
    return (
      <AuthContext.Provider value={value}>
        {!loading && children}
      </AuthContext.Provider>
    );
  }
