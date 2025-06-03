import { FirestoreService } from '../firebase/firestore'
import { GP } from '../services/gpService'

export class GPRepository {
  private firestore: FirestoreService
  private collectionName = 'gps'

  constructor() {
    this.firestore = FirestoreService.getInstance()
  }

  async create(data: Omit<GP, 'id' | 'createdAt' | 'updatedAt'>): Promise<string> {
    console.info('[GPRepository] Creating GP:', data)
    try {
      return await this.firestore.create<GP>(this.collectionName, data)
    } catch (error) {
      console.error('Error creating GP:', error)
      throw new Error('Failed to create GP')
    }
  }

  async getById(id: string): Promise<GP | null> {
    console.info('[GPRepository] Fetching GP by id:', id)
    try {
      return await this.firestore.getById<GP>(this.collectionName, id)
    } catch (error) {
      console.error('Error fetching GP:', error)
      throw new Error('Failed to fetch GP')
    }
  }

  async getByUserId(userId: string): Promise<GP | null> {
    console.info('[GPRepository] Fetching GP by userId:', userId)
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