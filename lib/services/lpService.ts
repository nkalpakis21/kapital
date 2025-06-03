import { LPRepository } from '../repositories/lpRepository'

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
  private repository: LPRepository

  constructor() {
    this.repository = new LPRepository()
  }

  async createLP(data: Omit<LP, 'id' | 'createdAt' | 'updatedAt'>): Promise<string> {
    return await this.repository.create(data)
  }

  async getLPById(id: string): Promise<LP | null> {
    return await this.repository.getById(id)
  }

  async getLPByUserId(userId: string): Promise<LP | null> {
    return await this.repository.getByUserId(userId)
  }
} 