import { NextResponse } from 'next/server'
import { FirestoreService } from '@/lib/firebase/firestore'

export async function POST(req: Request) {
  try {
    const { name, email, focus, userId } = await req.json()

    // Validate required fields
    if (!name || !email || !focus || !userId) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Create GP in database
    const firestore = FirestoreService.getInstance()
    const gpId = await firestore.create('gps', {
      name,
      email,
      focus,
      userId,
    })

    return NextResponse.json({ id: gpId }, { status: 201 })
  } catch (error) {
    console.error('Error creating GP:', error)
    return NextResponse.json(
      { error: 'Failed to create GP' },
      { status: 500 }
    )
  }
} 