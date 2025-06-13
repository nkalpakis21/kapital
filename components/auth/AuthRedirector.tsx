"use client"

import { useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { useAuth } from "@/contexts/AuthContext";

interface AuthRedirectorProps {
  children: React.ReactNode;
}

export function AuthRedirector({ children }: AuthRedirectorProps) {
  const { currentUser, loading } = useAuth();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (!loading && currentUser) {
      // If user is logged in, redirect them to the dashboard
      // unless they are already on a dashboard-related path
      if (!pathname.startsWith("/dashboard")) {
        router.push("/dashboard");
      }
    }
  }, [currentUser, loading, router, pathname]);

  // Optionally, you can render a loading spinner or null while loading
  if (loading) {
    return <div>Loading authentication...</div>; // Or a more sophisticated loading component
  }

  return <>{children}</>;
} 