import { GPRepository } from '../repositories/gpRepository'

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
  private repository: GPRepository

  constructor() {
    this.repository = new GPRepository()
  }

  async createGP(data: Omit<GP, 'id' | 'createdAt' | 'updatedAt'>): Promise<string> {
    return await this.repository.create(data)
  }

  async getGPById(id: string): Promise<GP | null> {
    return await this.repository.getById(id)
  }

  async getGPByUserId(userId: string): Promise<GP | null> {
    return await this.repository.getByUserId(userId)
  }
} 