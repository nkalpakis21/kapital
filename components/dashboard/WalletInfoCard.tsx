"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { magic } from "@/lib/magic/magic" // Import Magic instance
import { useAuth } from "@/contexts/AuthContext" // To check if the user is logged in
import { Connection, PublicKey } from "@solana/web3.js" // For Solana balance fetching
import { toast } from "sonner" // For notifications

export function WalletInfoCard() {
  const { currentUser, loading, activeProvider } = useAuth()
  const [walletAddress, setWalletAddress] = useState<string | null>(null)
  const [solBalance, setSolBalance] = useState<number | null>(null)
  const [isLoadingWallet, setIsLoadingWallet] = useState(true)

  useEffect(() => {
    const fetchWalletInfo = async () => {
      if (!loading && currentUser && activeProvider === "magic") {
        setIsLoadingWallet(true)
        try {
          if (!magic) {
            toast.error("Magic SDK is not initialized.")
            setWalletAddress(null)
            setSolBalance(null)
            return
          }

          // Correctly get the public address from magic.user.getInfo()
          const metadata = await (magic.user as any).getInfo();
          const publicAddress = metadata?.publicAddress;

          if (!publicAddress) {
            toast.error("Could not retrieve Magic wallet address.")
            setWalletAddress(null)
            setSolBalance(null)
            return;
          }

          setWalletAddress(publicAddress)

          // Fetch Solana balance
          try {
            const connection = new Connection("https://api.devnet.solana.com") // Use your desired Solana RPC URL
            const publicKey = new PublicKey(publicAddress)
            const balanceLamports = await connection.getBalance(publicKey)
            setSolBalance(balanceLamports / 1_000_000_000) // Convert lamports to SOL
          } catch (balanceError) {
            console.error("Failed to fetch Solana balance:", balanceError)
            toast.error("Failed to fetch Solana balance.")
            setSolBalance(null)
          }
        } catch (error) {
          console.error("Failed to fetch wallet address:", error)
          toast.error("Failed to fetch wallet address.")
          setWalletAddress(null)
          setSolBalance(null)
        } finally {
          setIsLoadingWallet(false)
        }
      } else if (!loading && activeProvider !== "magic") {
        // If not using Magic.js, clear wallet info
        setWalletAddress(null)
        setSolBalance(null)
        setIsLoadingWallet(false)
      }
    }

    fetchWalletInfo()
  }, [currentUser, loading, activeProvider])

  if (isLoadingWallet) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Wallet Information</CardTitle>
          <CardDescription>Loading wallet details...</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="text-muted-foreground">Please wait...</div>
        </CardContent>
      </Card>
    )
  }

  if (activeProvider !== "magic") {
    return null; // Don't render if Magic.js is not the active provider
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Wallet Information</CardTitle>
        <CardDescription>Your connected Magic.js wallet details.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <h3 className="font-semibold">Wallet Address:</h3>
          <p className="break-all text-sm">{walletAddress || "Not connected"}</p>
        </div>
        <div>
          <h3 className="font-semibold">SOL Balance:</h3>
          <p className="text-sm">{solBalance !== null ? `${solBalance} SOL` : "N/A"}</p>
        </div>
      </CardContent>
    </Card>
  )
} 