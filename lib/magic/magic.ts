import { Magic } from 'magic-sdk';  // core SDK
import { SolanaExtension } from '@magic-ext/solana';  // Solana wallet extension

//Mainnet: https://api.mainnet-beta.solana.com

// Devnet: https://api.devnet.solana.com

// Testnet: https://api.testnet.solana.com


export const magic = typeof window !== 'undefined'
  ? new Magic(process.env.NEXT_PUBLIC_MAGIC_API_KEY as string, {
      extensions: [new SolanaExtension({ rpcUrl: 'https://api.devnet.solana.com' })],
    })
  : null;
