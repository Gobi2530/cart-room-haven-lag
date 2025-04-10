
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BookingForm from "@/components/BookingForm";
import { Room } from "@/components/RoomCard";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { ArrowRightIcon, BedDoubleIcon, BedSingleIcon, CalendarIcon, PremiumIcon } from "@/components/Icons";
import { mockRooms } from "@/data/mockData";

const RoomDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const [room, setRoom] = useState<Room | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    // In a real app, this would be an API call
    setIsLoading(true);
    setTimeout(() => {
      const foundRoom = mockRooms.find(r => r.id === id) || null;
      setRoom(foundRoom);
      setIsLoading(false);
    }, 500);
  }, [id]);
  
  if (isLoading) {
    return (
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow container py-12 flex items-center justify-center">
          <div className="text-center">
            <p className="text-lg text-muted-foreground">Loading room details...</p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
  
  if (!room) {
    return (
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow container py-12 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Room Not Found</h1>
            <p className="text-muted-foreground mb-6">
              The room you're looking for doesn't exist or has been removed.
            </p>
            <Link to="/rooms">
              <Button>
                Browse All Rooms
              </Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
  
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow container py-8">
        <div className="mb-4 flex items-center gap-2 text-sm text-muted-foreground">
          <Link to="/" className="hover:text-foreground">Home</Link>
          <ArrowRightIcon className="h-3 w-3" />
          <Link to="/rooms" className="hover:text-foreground">Rooms</Link>
          <ArrowRightIcon className="h-3 w-3" />
          <span className="text-foreground">{room.name}</span>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <div className="rounded-lg overflow-hidden">
              <img 
                src={room.imageUrl || "/placeholder.svg"} 
                alt={room.name}
                className="w-full h-auto aspect-video object-cover"
              />
            </div>
            
            <div className="space-y-4">
              <div className="flex flex-wrap gap-2 items-start justify-between">
                <h1 className="text-3xl font-bold">{room.name}</h1>
                <div className="flex gap-2">
                  <Badge 
                    variant={room.type === "single" ? "default" : "secondary"}
                    className={room.type === "double" ? "bg-lag-200 text-lag-800 hover:bg-lag-300 hover:text-lag-800" : ""}
                  >
                    {room.type === "single" ? (
                      <span className="flex items-center gap-1">
                        <BedSingleIcon className="h-3 w-3" />
                        Single Cart
                      </span>
                    ) : (
                      <span className="flex items-center gap-1">
                        <BedDoubleIcon className="h-3 w-3" />
                        Double Cart
                      </span>
                    )}
                  </Badge>
                  
                  {room.category === "premium" && (
                    <Badge className="bg-amber-500 hover:bg-amber-600 flex items-center gap-1">
                      <PremiumIcon className="h-3 w-3" />
                      Premium
                    </Badge>
                  )}
                </div>
              </div>
              
              <p className="text-lg text-muted-foreground">{room.description}</p>
              
              <div className="flex flex-wrap gap-4 bg-muted p-4 rounded-lg">
                <div>
                  <p className="text-sm text-muted-foreground">Price</p>
                  <p className="font-semibold text-xl">${room.price}<span className="text-sm font-normal text-muted-foreground">/night</span></p>
                </div>
                
                <div>
                  <p className="text-sm text-muted-foreground">Availability</p>
                  <p className="font-semibold text-xl">{room.availableRooms} rooms</p>
                </div>
                
                <div>
                  <p className="text-sm text-muted-foreground">Room Type</p>
                  <p className="font-semibold">{room.type === "single" ? "Single Cart" : "Double Cart"}</p>
                  <p className="text-xs text-muted-foreground">
                    {room.type === "single" ? "For unmarried guests only" : "For married guests only"}
                  </p>
                </div>
                
                <div>
                  <p className="text-sm text-muted-foreground">Category</p>
                  <p className="font-semibold">{room.category === "normal" ? "Normal" : "Premium"}</p>
                </div>
              </div>
            </div>
            
            <Tabs defaultValue="features">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="features">Features</TabsTrigger>
                <TabsTrigger value="policies">Policies</TabsTrigger>
                <TabsTrigger value="location">Location</TabsTrigger>
              </TabsList>
              <TabsContent value="features" className="space-y-4 mt-4">
                <h3 className="text-lg font-semibold">Room Features</h3>
                <ul className="grid grid-cols-2 gap-2 text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-lag-600"></span>
                    Air Conditioning
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-lag-600"></span>
                    Free Wi-Fi
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-lag-600"></span>
                    Flat-screen TV
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-lag-600"></span>
                    Private bathroom
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-lag-600"></span>
                    Towels and linens
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-lag-600"></span>
                    Desk and chair
                  </li>
                  {room.category === "premium" && (
                    <>
                      <li className="flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-amber-500"></span>
                        Mini bar
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-amber-500"></span>
                        Bathrobe and slippers
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-amber-500"></span>
                        Premium toiletries
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-amber-500"></span>
                        Room service
                      </li>
                    </>
                  )}
                </ul>
              </TabsContent>
              <TabsContent value="policies" className="space-y-4 mt-4">
                <h3 className="text-lg font-semibold">Room Policies</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>
                    <strong>Check-in:</strong> From 14:00
                  </li>
                  <li>
                    <strong>Check-out:</strong> Until 12:00
                  </li>
                  <li>
                    <strong>Cancellation:</strong> Free cancellation up to 24 hours before check-in
                  </li>
                  <li>
                    <strong>Payment:</strong> Pay at the property
                  </li>
                  <li>
                    <strong>Age Restriction:</strong> Guests must be at least 18 years old
                  </li>
                  <li>
                    <strong>Room Type Restriction:</strong> {room.type === "single" ? "Single cart rooms are only for unmarried guests" : "Double cart rooms are only for married guests"}
                  </li>
                </ul>
              </TabsContent>
              <TabsContent value="location" className="space-y-4 mt-4">
                <h3 className="text-lg font-semibold">Location</h3>
                <p className="text-muted-foreground">
                  Our property is located in the heart of the city, close to major attractions and transportation hubs.
                </p>
                <div className="aspect-video bg-muted flex items-center justify-center rounded-lg">
                  <p className="text-muted-foreground">Map view would be displayed here</p>
                </div>
              </TabsContent>
            </Tabs>
          </div>
          
          <div className="bg-white p-6 border rounded-lg shadow-sm h-fit sticky top-24">
            <div className="mb-4 flex items-center gap-2">
              <CalendarIcon className="h-5 w-5 text-lag-600" />
              <h2 className="text-xl font-semibold">Book This Room</h2>
            </div>
            <BookingForm room={room} />
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default RoomDetailPage;
