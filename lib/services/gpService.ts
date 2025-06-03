import { FirestoreService } from '../firebase/firestore'

export interface GP {
  id?: string
  name: string
  email: string
  focus: string
  userId: string
  createdAt?: string
  updatedAt?: string
  // Additional fields
  walletAddress?: string
  fundSize?: number
  investmentThesis?: string
  kycStatus?: 'pending' | 'verified' | 'rejected'
}

export class GPService {
  private firestore: FirestoreService
  private collectionName = 'gps'

  constructor() {
    this.firestore = FirestoreService.getInstance()
  }

  async createGP(data: Omit<GP, 'id' | 'createdAt' | 'updatedAt'>): Promise<string> {
    try {
      const gpId = await this.firestore.create<GP>(
        this.collectionName,
        data
      )
      return gpId
    } catch (error) {
      console.error('Error creating GP:', error)
      throw new Error('Failed to create GP')
    }
  }

  async getGPById(id: string): Promise<GP | null> {
    try {
      return await this.firestore.getById<GP>(this.collectionName, id)
    } catch (error) {
      console.error('Error fetching GP:', error)
      throw new Error('Failed to fetch GP')
    }
  }

  async getGPByUserId(userId: string): Promise<GP | null> {
    try {
      const gps = await this.firestore.getByField<GP>(
        this.collectionName,
        'userId',
        userId
      )
      return gps[0] || null
    } catch (error) {
      console.error('Error fetching GP by user ID:', error)
      throw new Error('Failed to fetch GP')
    }
  }
} 