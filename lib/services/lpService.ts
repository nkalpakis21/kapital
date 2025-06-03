import { FirestoreService } from '../firebase/firestore'

export interface LP {
  id?: string
  name: string
  email: string
  type: string
  userId: string
  createdAt?: string
  updatedAt?: string
  // Additional fields
  walletAddress?: string
  investmentPreferences?: string[]
  kycStatus?: 'pending' | 'verified' | 'rejected'
}

export class LPService {
  private firestore: FirestoreService
  private collectionName = 'lps'

  constructor() {
    this.firestore = FirestoreService.getInstance()
  }

  async createLP(data: Omit<LP, 'id' | 'createdAt' | 'updatedAt'>): Promise<string> {
    try {
      const lpId = await this.firestore.create<LP>(
        this.collectionName,
        data
      )
      return lpId
    } catch (error) {
      console.error('Error creating LP:', error)
      throw new Error('Failed to create LP')
    }
  }

  async getLPById(id: string): Promise<LP | null> {
    try {
      return await this.firestore.getById<LP>(this.collectionName, id)
    } catch (error) {
      console.error('Error fetching LP:', error)
      throw new Error('Failed to fetch LP')
    }
  }

  async getLPByUserId(userId: string): Promise<LP | null> {
    try {
      const lps = await this.firestore.getByField<LP>(
        this.collectionName,
        'userId',
        userId
      )
      return lps[0] || null
    } catch (error) {
      console.error('Error fetching LP by user ID:', error)
      throw new Error('Failed to fetch LP')
    }
  }
} 