
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BedSingleIcon, BedDoubleIcon, PremiumIcon, ArrowRightIcon } from "@/components/Icons";
import { Link } from "react-router-dom";

export interface Room {
  id: string;
  name: string;
  type: "unmarried" | "double";
  category: "normal" | "premium";
  price: number;
  availableRooms: number;
  imageUrl: string;
  description: string;
}

interface RoomCardProps {
  room: Room;
}

const RoomCard = ({ room }: RoomCardProps) => {
  const { id, name, type, category, price, availableRooms, imageUrl, description } = room;
  
  return (
    <div className="bg-white rounded-md border">
      <div className="h-48 overflow-hidden">
        <img 
          src={imageUrl || "/placeholder.svg"} 
          alt={name}
          className="w-full h-full object-cover"
        />
        {category === "premium" && (
          <div className="absolute top-2 right-2">
            <Badge className="bg-amber-500">
              <PremiumIcon className="h-3 w-3 mr-1" />
              Premium
            </Badge>
          </div>
        )}
      </div>
      
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-medium text-lg">{name}</h3>
          <Badge 
            variant={type === "unmarried" ? "default" : "secondary"}
            className={type === "double" ? "bg-lag-200 text-lag-800" : ""}
          >
            {type === "unmarried" ? (
              <span className="flex items-center gap-1">
                <BedSingleIcon className="h-3 w-3" />
                Unmarried Couples
              </span>
            ) : (
              <span className="flex items-center gap-1">
                <BedDoubleIcon className="h-3 w-3" />
                Double
              </span>
            )}
          </Badge>
        </div>
        
        <p className="text-gray-600 text-sm mb-3">{description}</p>
        
        <div className="flex justify-between items-center border-t pt-3 mt-3">
          <div>
            <p className="text-xl font-bold text-lag-800">${price}<span className="text-sm font-normal text-gray-500">/night</span></p>
            <p className="text-xs text-gray-500">{availableRooms} rooms available</p>
          </div>
          
          <Link to={`/rooms/${id}`}>
            <Button variant="outline">
              View Details
              <ArrowRightIcon className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RoomCard;
