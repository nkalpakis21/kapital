import { FirestoreService } from '../firebase/firestore'
import { LP } from '../services/lpService'

export class LPRepository {
  private firestore: FirestoreService
  private collectionName = 'lps'

  constructor() {
    this.firestore = FirestoreService.getInstance()
  }

  async create(data: Omit<LP, 'id' | 'createdAt' | 'updatedAt'>): Promise<string> {
    try {
      return await this.firestore.create<LP>(this.collectionName, data)
    } catch (error) {
      console.error('Error creating LP:', error)
      throw new Error('Failed to create LP')
    }
  }

  async getById(id: string): Promise<LP | null> {
    try {
      return await this.firestore.getById<LP>(this.collectionName, id)
    } catch (error) {
      console.error('Error fetching LP:', error)
      throw new Error('Failed to fetch LP')
    }
  }

  async getByUserId(userId: string): Promise<LP | null> {
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