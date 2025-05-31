import { NextResponse } from 'next/server'
import { FirestoreService } from '@/lib/firebase/firestore'

export async function POST(req: Request) {
  try {
    const { name, industry, userId } = await req.json()

    // Validate required fields
    if (!name || !industry || !userId) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Create startup in database
    const firestore = FirestoreService.getInstance()
    const startupId = await firestore.create('startups', {
      name,
      industry,
      userId,
    })

    return NextResponse.json({ id: startupId }, { status: 201 })
  } catch (error) {
    console.error('Error creating startup:', error)
    return NextResponse.json(
      { error: 'Failed to create startup' },
      { status: 500 }
    )
  }
} 