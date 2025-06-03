import { NextResponse } from 'next/server'
import { FirestoreService } from '@/lib/firebase/firestore'

export async function POST(req: Request) {
  try {
    const { name, email, type, userId } = await req.json()

    // Validate required fields
    if (!name || !email || !type || !userId) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Create LP in database
    const firestore = FirestoreService.getInstance()
    const lpId = await firestore.create('lps', {
      name,
      email,
      type,
      userId,
    })

    return NextResponse.json({ id: lpId }, { status: 201 })
  } catch (error) {
    console.error('Error creating LP:', error)
    return NextResponse.json(
      { error: 'Failed to create LP' },
      { status: 500 }
    )
  }
} 