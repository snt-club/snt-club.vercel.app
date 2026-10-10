import { NextResponse } from 'next/server';
import { connectDB } from '@/lib/db';
import EventRegistration from '@/models/EventRegistration';

export async function GET(
  request: Request,
  { params }: { params: { event: string } }
) {
  try {
    await connectDB();
    
    // Count existing registrations for this specific event
    const count = await EventRegistration.countDocuments({ eventId: params.event });
    const MAX_LIMIT = 100;
    const isFull = count >= MAX_LIMIT;

    return NextResponse.json({
      success: true,
      count,
      maxLimit: MAX_LIMIT,
      isFull,
      remainingSeats: Math.max(0, MAX_LIMIT - count)
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Failed to fetch status' },
      { status: 500 }
    );
  }
}