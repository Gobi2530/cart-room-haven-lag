
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { mockBookings, mockRooms } from "@/data/mockData";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { CalendarIcon, BedSingleIcon, BedDoubleIcon } from "@/components/Icons";

const BookingsPage = () => {
  const [bookings] = useState(mockBookings);
  
  // In a real app, this would be fetched from an API or state management store
  const getRoomDetails = (roomId: string) => {
    return mockRooms.find(room => room.id === roomId);
  };
  
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow container py-8">
        <div className="mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold">My Bookings</h1>
            <p className="text-muted-foreground">
              View and manage your room bookings
            </p>
          </div>
          
          <Link to="/rooms">
            <Button>
              <CalendarIcon className="mr-2 h-4 w-4" />
              Book a Room
            </Button>
          </Link>
        </div>
        
        {bookings.length > 0 ? (
          <div className="bg-white rounded-lg border overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Room</TableHead>
                  <TableHead>Check-in</TableHead>
                  <TableHead>Check-out</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              
              <TableBody>
                {bookings.map((booking) => {
                  const room = getRoomDetails(booking.roomId);
                  return (
                    <TableRow key={booking.id}>
                      <TableCell>
                        <div className="flex items-center gap-3">
                          {room?.type === "single" ? (
                            <BedSingleIcon className="h-5 w-5 text-lag-600" />
                          ) : (
                            <BedDoubleIcon className="h-5 w-5 text-lag-600" />
                          )}
                          <div>
                            <p className="font-medium">{room?.name || "Unknown Room"}</p>
                            <p className="text-xs text-muted-foreground">
                              {room?.type === "single" ? "Single Cart" : "Double Cart"} • 
                              {room?.category === "premium" ? " Premium" : " Normal"}
                            </p>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>{booking.checkInDate}</TableCell>
                      <TableCell>{booking.checkOutDate}</TableCell>
                      <TableCell>
                        <Badge 
                          variant={booking.status === "active" ? "default" : "outline"}
                          className={
                            booking.status === "active" 
                              ? ""
                              : "border-green-500 text-green-700 hover:bg-green-50"
                          }
                        >
                          {booking.status === "active" ? "Active" : "Confirmed"}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-right">
                        <Link to={`/rooms/${booking.roomId}`}>
                          <Button variant="ghost" size="sm">
                            View Room
                          </Button>
                        </Link>
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </div>
        ) : (
          <div className="text-center py-16 bg-white rounded-lg border">
            <h2 className="text-xl font-semibold mb-2">No Bookings Found</h2>
            <p className="text-muted-foreground mb-6">
              You haven't made any bookings yet.
            </p>
            <Link to="/rooms">
              <Button>
                Browse Rooms
              </Button>
            </Link>
          </div>
        )}
      </main>
      
      <Footer />
    </div>
  );
};

export default BookingsPage;
