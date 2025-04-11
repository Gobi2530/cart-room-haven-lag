
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import RoomGrid from "@/components/RoomGrid";
import { mockRooms } from "@/data/mockData";

const RoomsPage = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const typeParam = queryParams.get("type");
  const categoryParam = queryParams.get("category");
  
  const [roomType, setRoomType] = useState<string>("all");
  const [roomCategory, setRoomCategory] = useState<string>("all");
  
  useEffect(() => {
    if (typeParam) {
      setRoomType(typeParam);
    }
    
    if (categoryParam) {
      setRoomCategory(categoryParam);
    }
  }, [typeParam, categoryParam]);
  
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow container py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Explore Our Rooms</h1>
          <p className="text-muted-foreground">
            Find the perfect accommodation for your needs
          </p>
        </div>
        
        <RoomGrid rooms={mockRooms} />
      </main>
      
      <Footer />
    </div>
  );
};

export default RoomsPage;
