
import { connectToDatabase } from '@/lib/mongodb';
import { Booking, BookingInput } from '@/models/Booking';
import { ObjectId } from 'mongodb';

export async function getBookings(): Promise<Booking[]> {
  try {
    const { db } = await connectToDatabase();
    const bookings = await db.collection('bookings').find({}).toArray();
    
    // Convert MongoDB ObjectId to string for client-side use
    return bookings.map(booking => ({
      ...booking,
      _id: booking._id.toString(),
    }));
  } catch (error) {
    console.error('Error fetching bookings:', error);
    throw error;
  }
}

export async function getBookingById(id: string): Promise<Booking | null> {
  try {
    const { db } = await connectToDatabase();
    const booking = await db.collection('bookings').findOne({ _id: new ObjectId(id) });
    
    if (!booking) return null;
    
    return {
      ...booking,
      _id: booking._id.toString(),
    };
  } catch (error) {
    console.error(`Error fetching booking with id ${id}:`, error);
    throw error;
  }
}

export async function createBooking(booking: BookingInput): Promise<Booking> {
  try {
    const { db } = await connectToDatabase();
    const newBooking = {
      ...booking,
      id: new ObjectId().toString().substring(0, 8), // Generate a shorter ID
    };
    
    const result = await db.collection('bookings').insertOne(newBooking);
    
    return {
      ...newBooking,
      _id: result.insertedId.toString(),
    };
  } catch (error) {
    console.error('Error creating booking:', error);
    throw error;
  }
}

export async function updateBooking(id: string, booking: Partial<BookingInput>): Promise<Booking | null> {
  try {
    const { db } = await connectToDatabase();
    
    await db.collection('bookings').updateOne(
      { _id: new ObjectId(id) },
      { $set: booking }
    );
    
    const updatedBooking = await getBookingById(id);
    return updatedBooking;
  } catch (error) {
    console.error(`Error updating booking with id ${id}:`, error);
    throw error;
  }
}

export async function deleteBooking(id: string): Promise<boolean> {
  try {
    const { db } = await connectToDatabase();
    const result = await db.collection('bookings').deleteOne({ _id: new ObjectId(id) });
    return result.deletedCount > 0;
  } catch (error) {
    console.error(`Error deleting booking with id ${id}:`, error);
    throw error;
  }
}
