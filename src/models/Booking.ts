
import { ObjectId } from 'mongodb';

export interface Booking {
  _id?: string | ObjectId;
  id: string;
  roomId: string;
  guestName: string;
  checkInDate: string;
  checkOutDate: string;
  status: string;
}

export interface BookingInput {
  roomId: string;
  guestName: string;
  checkInDate: string;
  checkOutDate: string;
  status: string;
}
