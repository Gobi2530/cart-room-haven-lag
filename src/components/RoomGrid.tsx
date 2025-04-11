
import React, { useState } from "react";
import RoomCard, { Room } from "@/components/RoomCard";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { FilterIcon, SearchIcon } from "@/components/Icons";

interface RoomGridProps {
  rooms: Room[];
}

const RoomGrid = ({ rooms }: RoomGridProps) => {
  const [roomType, setRoomType] = useState<string>("all");
  const [roomCategory, setRoomCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  
  const filteredRooms = rooms.filter((room) => {
    // Filter by type
    if (roomType !== "all" && room.type !== roomType) return false;
    
    // Filter by category
    if (roomCategory !== "all" && room.category !== roomCategory) return false;
    
    // Filter by search query
    if (searchQuery && !room.name.toLowerCase().includes(searchQuery.toLowerCase())) return false;
    
    return true;
  });

  return (
    <div>
      <div className="mb-6 p-4 bg-white border rounded-lg shadow-sm">
        <div className="flex flex-col md:flex-row gap-4 items-start md:items-center">
          <div className="flex-1 w-full">
            <div className="relative">
              <SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search rooms..."
                className="pl-9"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
            <div className="w-full sm:w-40">
              <Select value={roomType} onValueChange={setRoomType}>
                <SelectTrigger>
                  <SelectValue placeholder="Room Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Types</SelectItem>
                  <SelectItem value="single">Single Cart</SelectItem>
                  <SelectItem value="double">Double Cart</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="w-full sm:w-40">
              <Select value={roomCategory} onValueChange={setRoomCategory}>
                <SelectTrigger>
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  <SelectItem value="normal">Normal</SelectItem>
                  <SelectItem value="premium">Premium</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <Button 
              variant="outline" 
              className="w-full sm:w-auto"
              onClick={() => {
                setRoomType("all");
                setRoomCategory("all");
                setSearchQuery("");
              }}
            >
              <FilterIcon className="mr-2 h-4 w-4" />
              Reset Filters
            </Button>
          </div>
        </div>
      </div>
      
      {filteredRooms.length === 0 ? (
        <div className="text-center py-16 bg-white rounded-lg border">
          <p className="text-lg text-muted-foreground">No rooms match your search criteria.</p>
          <Button 
            variant="link" 
            onClick={() => {
              setRoomType("all");
              setRoomCategory("all");
              setSearchQuery("");
            }}
          >
            Clear all filters
          </Button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredRooms.map((room) => (
            <RoomCard key={room.id} room={room} />
          ))}
        </div>
      )}
    </div>
  );
};

export default RoomGrid;
