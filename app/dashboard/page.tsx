"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { useAuth } from "@/contexts/AuthContext"
import { LPService } from "@/lib/services/lpService"
import { GPService } from "@/lib/services/gpService"
import { LPDashboard } from "@/components/dashboard/lp/lp-dashboard"
import { GPDashboard } from "@/components/dashboard/gp/gp-dashboard"
import { DashboardSkeleton } from "@/components/dashboard/dashboard-skeleton"

type UserType = "lp" | "gp" | null

export default function DashboardPage() {
  const { currentUser } = useAuth()
  const router = useRouter()
  const [userType, setUserType] = useState<UserType>(null)
  const [loading, setLoading] = useState(true)
  const [userData, setUserData] = useState<any>(null)

  useEffect(() => {
    async function determineUserType() {
      if (!currentUser) {
        router.push("/login")
        return
      }

      try {
        // Check if user is an LP
        const lpService = new LPService()
        const lpData = await lpService.getLPByUserId(currentUser.uid)

        if (lpData) {
          setUserType("lp")
          setUserData(lpData)
          setLoading(false)
          return
        }

        // Check if user is a GP
        const gpService = new GPService()
        const gpData = await gpService.getGPByUserId(currentUser.uid)

        if (gpData) {
          setUserType("gp")
          setUserData(gpData)
          setLoading(false)
          return
        }

        // If neither LP nor GP, redirect to signup
        router.push("/signup")
      } catch (error) {
        console.error("Error determining user type:", error)
        router.push("/signup")
      }
    }

    determineUserType()
  }, [currentUser, router])

  if (loading) {
    return <DashboardSkeleton />
  }

  if (userType === "lp") {
    return <LPDashboard userData={userData} />
  }

  if (userType === "gp") {
    return <GPDashboard userData={userData} />
  }

  return null
}
