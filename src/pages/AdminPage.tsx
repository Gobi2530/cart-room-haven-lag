
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AdminLogin from "@/components/AdminLogin";
import AdminRoomTable from "@/components/AdminRoomTable";
import Dashboard from "@/components/Dashboard";
import { mockRooms, dashboardStats } from "@/data/mockData";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Room } from "@/components/RoomCard";
import { useToast } from "@/components/ui/use-toast";

const AdminPage = () => {
  const { toast } = useToast();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [rooms, setRooms] = useState<Room[]>(mockRooms);
  
  const handleAddRoom = (newRoom: Omit<Room, "id">) => {
    const id = (rooms.length + 1).toString();
    setRooms([...rooms, { id, ...newRoom }]);
    toast({
      title: "Room Added",
      description: "The new room has been added successfully.",
    });
  };
  
  const handleUpdateRoom = (id: string, updatedRoom: Partial<Room>) => {
    setRooms(
      rooms.map(room => (room.id === id ? { ...room, ...updatedRoom } : room))
    );
    toast({
      title: "Room Updated",
      description: "The room has been updated successfully.",
    });
  };
  
  const handleDeleteRoom = (id: string) => {
    setRooms(rooms.filter(room => room.id !== id));
    toast({
      title: "Room Deleted",
      description: "The room has been deleted successfully.",
    });
  };
  
  if (!isLoggedIn) {
    return (
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <AdminLogin onLogin={() => setIsLoggedIn(true)} />
        </main>
        <Footer />
      </div>
    );
  }
  
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow container py-8">
        <div className="mb-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold">Admin Dashboard</h1>
            <p className="text-muted-foreground">
              Manage rooms, bookings, and view statistics
            </p>
          </div>
          
          <Button variant="outline" onClick={() => setIsLoggedIn(false)}>
            Logout
          </Button>
        </div>
        
        <Dashboard stats={dashboardStats} />
        
        <div className="mt-8">
          <Tabs defaultValue="rooms">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="rooms">Room Management</TabsTrigger>
              <TabsTrigger value="bookings">Booking Management</TabsTrigger>
            </TabsList>
            <TabsContent value="rooms" className="mt-6">
              <AdminRoomTable 
                rooms={rooms}
                onAddRoom={handleAddRoom}
                onUpdateRoom={handleUpdateRoom}
                onDeleteRoom={handleDeleteRoom}
              />
            </TabsContent>
            <TabsContent value="bookings" className="mt-6">
              <div className="text-center py-8 bg-white rounded-lg border">
                <p className="text-muted-foreground">
                  Booking management interface would be displayed here.
                </p>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default AdminPage;
