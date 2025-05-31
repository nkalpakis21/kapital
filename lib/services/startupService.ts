import { FirestoreService } from '../firebase/firestore'

export interface Startup {
  id?: string
  name: string
  industry: string
  userId: string
  createdAt?: string
  updatedAt?: string
  // Add any additional fields you need
  description?: string
  website?: string
  logo?: string
}

export class StartupService {
  private firestore: FirestoreService
  private collectionName = 'startups'

  constructor() {
    this.firestore = FirestoreService.getInstance()
  }

  async createStartup(data: Omit<Startup, 'id' | 'createdAt' | 'updatedAt'>): Promise<string> {
    try {
      const startupId = await this.firestore.create<Startup>(
        this.collectionName,
        data
      )
      return startupId
    } catch (error) {
      console.error('Error creating startup:', error)
      throw new Error('Failed to create startup')
    }
  }

  async getStartupById(id: string): Promise<Startup | null> {
    try {
      return await this.firestore.getById<Startup>(this.collectionName, id)
    } catch (error) {
      console.error('Error fetching startup:', error)
      throw new Error('Failed to fetch startup')
    }
  }

  async getStartupsByUserId(userId: string): Promise<Startup[]> {
    try {
      return await this.firestore.getByField<Startup>(
        this.collectionName,
        'userId',
        userId
      )
    } catch (error) {
      console.error('Error fetching user startups:', error)
      throw new Error('Failed to fetch user startups')
    }
  }
} 