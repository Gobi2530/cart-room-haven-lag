
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CalendarIcon, ClockIcon, BedDoubleIcon, BedSingleIcon } from "@/components/Icons";
import { mockRooms } from "@/data/mockData";
import { getBookings } from "@/services/bookingService";
import { Booking } from "@/models/Booking";
import { useToast } from "@/components/ui/use-toast";

const BookingsPage = () => {
  const { toast } = useToast();
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  useEffect(() => {
    const fetchBookings = async () => {
      try {
        setIsLoading(true);
        const data = await getBookings();
        setBookings(data);
        setError(null);
      } catch (err) {
        console.error("Failed to fetch bookings:", err);
        setError("Failed to load bookings. Please try again later.");
        toast({
          title: "Error",
          description: "Failed to load bookings. Please try again later.",
          variant: "destructive",
        });
      } finally {
        setIsLoading(false);
      }
    };
    
    fetchBookings();
  }, [toast]);
  
  const sortedBookings = [...bookings].sort((a, b) => {
    const dateA = new Date(a.checkInDate).getTime();
    const dateB = new Date(b.checkInDate).getTime();
    
    return sortOrder === "asc" ? dateA - dateB : dateB - dateA;
  });
  
  const filteredBookings = sortedBookings.filter(booking =>
    booking.guestName.toLowerCase().includes(searchQuery.toLowerCase()) ||
    booking.roomId.includes(searchQuery)
  );
  
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow container py-8">
        <div className="mb-8 flex justify-between items-center">
          <h1 className="text-3xl font-bold">Bookings</h1>
          
          <div className="flex items-center gap-4">
            <div className="relative">
              <CalendarIcon className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                type="date"
                className="pl-10"
              />
            </div>
            
            <div className="relative">
              <ClockIcon className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                type="time"
                className="pl-10"
              />
            </div>
          </div>
        </div>
        
        <div className="mb-4 flex items-center justify-between">
          <div className="flex-1">
            <Input
              type="text"
              placeholder="Search by guest name or room ID..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          
          <div className="ml-4">
            <Label htmlFor="sortOrder" className="mr-2">Sort by Check-in Date:</Label>
            <Select 
              value={sortOrder} 
              onValueChange={(value: "asc" | "desc") => setSortOrder(value)}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select order" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="asc">Ascending</SelectItem>
                <SelectItem value="desc">Descending</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        
        {isLoading ? (
          <div className="flex justify-center items-center p-12">
            <p className="text-lg text-muted-foreground">Loading bookings...</p>
          </div>
        ) : error ? (
          <div className="rounded-md border border-destructive p-6 text-center">
            <p className="text-destructive">{error}</p>
            <Button 
              variant="outline" 
              className="mt-4"
              onClick={() => window.location.reload()}
            >
              Try Again
            </Button>
          </div>
        ) : (
          <div className="rounded-md border">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Booking ID
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Room
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Guest Name
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Check-in Date
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Check-out Date
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {filteredBookings.length > 0 ? (
                    filteredBookings.map((booking) => {
                      const room = mockRooms.find(room => room.id === booking.roomId);
                      
                      return (
                        <tr key={booking.id || booking._id}>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-900">{booking.id}</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            {room ? (
                              <Link to={`/rooms/${room.id}`} className="hover:underline">
                                <div className="text-sm font-medium text-gray-900">
                                  {room.name}
                                </div>
                                <div className="text-xs text-gray-500">
                                  <span className="flex items-center gap-1">
                                    {room.type === "unmarried" ? (
                                      <>
                                        <BedSingleIcon className="h-4 w-4" />
                                        <span>Unmarried Couples</span>
                                      </>
                                    ) : (
                                      <>
                                        <BedDoubleIcon className="h-4 w-4" />
                                        <span>Double Cart</span>
                                      </>
                                    )}
                                  </span>
                                </div>
                              </Link>
                            ) : (
                              <div className="text-sm text-gray-900">Room Not Found</div>
                            )}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-900">{booking.guestName}</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-900">{booking.checkInDate}</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-900">{booking.checkOutDate}</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                              booking.status === 'confirmed' 
                                ? 'bg-green-100 text-green-800'
                                : booking.status === 'active'
                                ? 'bg-blue-100 text-blue-800'
                                : 'bg-gray-100 text-gray-800'
                            }`}>
                              {booking.status}
                            </span>
                          </td>
                        </tr>
                      );
                    })
                  ) : (
                    <tr>
                      <td colSpan={6} className="px-6 py-4 text-center text-sm text-gray-500">
                        No bookings found.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </main>
      
      <Footer />
    </div>
  );
};

export default BookingsPage;
