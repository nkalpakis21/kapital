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
  import { AuthProviderType } from "@/lib/auth/authProviders"; // Import AuthProviderType
  import { Magic } from "magic-sdk"; // Ensure Magic type is imported if not already
  import { LPService } from "../lib/services/lpService"; // Import LPService
  import { GPService } from "../lib/services/gpService"; // Import GPService
  
  // Define a simplified Magic user type to include publicAddress
  interface MagicAuthUser {
    uid: string; // For consistency, can derive from publicAddress or use publicAddress directly
    email: string | null;
    publicAddress: string;
    // Add other Magic-specific user info properties here if needed
  }
  
  // Our unified user type for the context
  type CurrentAuthUser = User | MagicAuthUser;
  
  interface UserSignupData {
    name: string;
    email: string;
    password?: string; // Optional for Magic.js
    userType: "lp" | "gp";
    focus?: string; // For GP
    lpType?: string; // For LP
  }
  
  interface AuthContextType {
    currentUser: CurrentAuthUser | null; // Updated: use CurrentAuthUser
    login: (email: string, password?: string) => Promise<void>;
    signup: (data: UserSignupData) => Promise<User>;
    logout: () => Promise<void>;
    signInWithGoogle: () => Promise<void>;
    loading: boolean;
    activeProvider: AuthProviderType;
    setActiveProvider: (provider: AuthProviderType) => void;
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
    const [currentUser, setCurrentUser] = useState<CurrentAuthUser | null>(null); // Updated: use CurrentAuthUser
    const [loading, setLoading] = useState(true);
    const [activeProvider, setActiveProvider] = useState<AuthProviderType>(AuthProviderType.Magic);
  
    // --- Firebase Specific Functions ---
    async function _firebaseSignup(email: string, password: string) {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      return userCredential.user;
    }
  
    async function _firebaseLogin(email: string, password: string) {
      await signInWithEmailAndPassword(auth, email, password);
    }
  
    async function _firebaseLogout() {
      await signOut(auth);
    }
  
    async function _firebaseSignInWithGoogle() {
      await signInWithPopup(auth, googleProvider);
    }
  
    // --- Magic.js Specific Functions ---
    async function _magicLogin(email: string) {
      if (!magic) throw new Error("Magic SDK not initialized.");
      await magic.auth.loginWithEmailOTP({ email });
      const metadata = await (magic.user as any).getInfo();
      // Cast to MagicAuthUser to ensure publicAddress is recognized
      setCurrentUser({ uid: metadata?.publicAddress, email: metadata?.email, publicAddress: metadata?.publicAddress, ...metadata } as MagicAuthUser);
    }
  
    async function _magicLogout() {
      if (!magic) throw new Error("Magic SDK not initialized.");
      await magic.user.logout();
      setCurrentUser(null);
    }
  
    // --- Abstracted Functions ---
    async function signup(data: UserSignupData): Promise<User> { // Keep User as return type as Firebase User is expected
      setLoading(true);
      const { name, email, password, userType, focus, lpType } = data;
      let authenticatedUser: CurrentAuthUser | null = null; // Use CurrentAuthUser
  
      try {
        switch (activeProvider) {
          case AuthProviderType.Firebase:
            if (!password) throw new Error("Password is required for Firebase signup.");
            authenticatedUser = await _firebaseSignup(email, password);
            setCurrentUser(authenticatedUser);
            break;
          case AuthProviderType.Magic:
            await _magicLogin(email);
            // After magic login, currentUser is set by _magicLogin
            authenticatedUser = currentUser; // Get the user set by _magicLogin
            if (!authenticatedUser) throw new Error("Magic login failed to authenticate user.");
            break;
          default:
            throw new Error("Unsupported authentication provider for signup.");
        }
  
        // Create user record in database based on userType
        if (authenticatedUser) {
          let userIdToUse: string | undefined;
          if (activeProvider === AuthProviderType.Firebase) {
            userIdToUse = (authenticatedUser as User).uid; // Explicitly cast to Firebase User
          } else if (activeProvider === AuthProviderType.Magic) {
            userIdToUse = (authenticatedUser as MagicAuthUser).publicAddress; // Explicitly cast to MagicAuthUser
          }
  
          if (userIdToUse) {
              if (userType === "lp") {
                const lpService = new LPService();
                await lpService.createLP({
                  name,
                  email,
                  type: lpType || "",
                  userId: userIdToUse,
                });
              } else if (userType === "gp") {
                const gpService = new GPService();
                await gpService.createGP({
                  name,
                  email,
                  focus: focus || "",
                  userId: userIdToUse,
                });
              }
          } else {
              throw new Error("Could not determine user ID for database record.");
          }
        }
  
        // Return the Firebase User type for consistency with original signup return type
        // If Magic user, you might need to convert or return MagicAuthUser depending on usage
        return authenticatedUser as User; // This might need adjustment based on how `User` is consumed
      } finally {
        setLoading(false);
      }
    }
  
    async function login(email: string, password?: string): Promise<void> {
        setLoading(true);
        try {
            switch (activeProvider) {
                case AuthProviderType.Firebase:
                    if (!password) throw new Error("Password is required for Firebase login.");
                    await _firebaseLogin(email, password);
                    break;
                case AuthProviderType.Magic:
                    await _magicLogin(email);
                    break;
                default:
                    throw new Error("Unsupported authentication provider for login.");
            }
        } finally {
            setLoading(false);
        }
    }
  
    async function logout(): Promise<void> {
      setLoading(true);
      try {
        switch (activeProvider) {
          case AuthProviderType.Firebase:
            await _firebaseLogout();
            setCurrentUser(null);
            break;
          case AuthProviderType.Magic:
            await _magicLogout();
            break;
          default:
            throw new Error("Unsupported authentication provider for logout.");
        }
      } finally {
        setLoading(false);
      }
    }
  
    async function signInWithGoogle(): Promise<void> {
        setLoading(true);
        try {
            if (activeProvider === AuthProviderType.Firebase) {
                await _firebaseSignInWithGoogle();
            } else {
                throw new Error("Google Sign-In is only supported with Firebase provider.");
            }
        } finally {
            setLoading(false);
        }
    }
  
    useEffect(() => {
      const checkAuthStatus = async () => {
        setLoading(true);
        try {
          if (activeProvider === AuthProviderType.Firebase) {
            const unsubscribe = onAuthStateChanged(auth, (user) => {
              setCurrentUser(user);
              setLoading(false);
            });
            return () => unsubscribe();
          } else if (activeProvider === AuthProviderType.Magic) {
            if (magic) {
              const isLoggedIn = await magic.user.isLoggedIn();
              if (isLoggedIn) {
                const metadata = await (magic.user as any).getInfo();
                setCurrentUser({ uid: metadata?.publicAddress, email: metadata?.email, publicAddress: metadata?.publicAddress, ...metadata } as MagicAuthUser);
              } else {
                setCurrentUser(null);
              }
            } else {
                setCurrentUser(null);
            }
            setLoading(false);
          }
        } catch (error) {
          console.error("Auth status check failed:", error);
          setCurrentUser(null);
          setLoading(false);
        }
      };
  
      checkAuthStatus();
    }, [activeProvider]);
  
    const value: AuthContextType = {
      currentUser,
      signup,
      login,
      logout,
      signInWithGoogle,
      loading,
      activeProvider,
      setActiveProvider,
    };
  
    return (
      <AuthContext.Provider value={value}>
        {!loading && children}
      </AuthContext.Provider>
    );
  }
