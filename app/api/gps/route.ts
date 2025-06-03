import { NextResponse } from 'next/server'
import { GPService } from '@/lib/services/gpService'

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

    // Create GP using the service
    const gpService = new GPService()
    const gpId = await gpService.createGP({
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
