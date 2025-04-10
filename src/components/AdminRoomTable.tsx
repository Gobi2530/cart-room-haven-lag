
import { useState } from "react";
import { Room } from "@/components/RoomCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell
} from "@/components/ui/table";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter
} from "@/components/ui/dialog";
import { 
  EditIcon, 
  DeleteIcon, 
  AddIcon, 
  BedSingleIcon, 
  BedDoubleIcon, 
  PremiumIcon
} from "@/components/Icons";
import { useToast } from "@/components/ui/use-toast";

interface AdminRoomTableProps {
  rooms: Room[];
  onAddRoom: (room: Omit<Room, "id">) => void;
  onUpdateRoom: (id: string, room: Partial<Room>) => void;
  onDeleteRoom: (id: string) => void;
}

const AdminRoomTable = ({ rooms, onAddRoom, onUpdateRoom, onDeleteRoom }: AdminRoomTableProps) => {
  const { toast } = useToast();
  const [searchQuery, setSearchQuery] = useState("");
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [roomToDelete, setRoomToDelete] = useState<string | null>(null);
  
  const filteredRooms = rooms.filter(room => 
    room.name.toLowerCase().includes(searchQuery.toLowerCase())
  );
  
  const handleDeleteClick = (id: string) => {
    setRoomToDelete(id);
    setIsDeleteDialogOpen(true);
  };
  
  const confirmDelete = () => {
    if (roomToDelete) {
      onDeleteRoom(roomToDelete);
      toast({
        title: "Room Deleted",
        description: "The room has been deleted successfully.",
      });
      setIsDeleteDialogOpen(false);
      setRoomToDelete(null);
    }
  };
  
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <div className="relative w-64">
          <Input
            type="text"
            placeholder="Search rooms..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-3"
          />
        </div>
        
        <Button>
          <AddIcon className="mr-2 h-4 w-4" />
          Add New Room
        </Button>
      </div>
      
      <div className="rounded-lg border bg-white overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Type</TableHead>
              <TableHead>Category</TableHead>
              <TableHead>Price</TableHead>
              <TableHead>Available</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredRooms.length > 0 ? (
              filteredRooms.map((room) => (
                <TableRow key={room.id}>
                  <TableCell className="font-medium">{room.name}</TableCell>
                  <TableCell>
                    <Badge 
                      variant={room.type === "single" ? "default" : "secondary"}
                      className={room.type === "double" ? "bg-lag-200 text-lag-800 hover:bg-lag-300 hover:text-lag-800" : ""}
                    >
                      {room.type === "single" ? (
                        <span className="flex items-center gap-1">
                          <BedSingleIcon className="h-3 w-3" />
                          Single
                        </span>
                      ) : (
                        <span className="flex items-center gap-1">
                          <BedDoubleIcon className="h-3 w-3" />
                          Double
                        </span>
                      )}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    {room.category === "premium" ? (
                      <Badge className="bg-amber-500 hover:bg-amber-600 flex items-center gap-1">
                        <PremiumIcon className="h-3 w-3" />
                        Premium
                      </Badge>
                    ) : (
                      <Badge variant="outline">Normal</Badge>
                    )}
                  </TableCell>
                  <TableCell>${room.price}/night</TableCell>
                  <TableCell>
                    <Badge variant="outline" className="font-mono">
                      {room.availableRooms}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right space-x-2">
                    <Button variant="ghost" size="icon">
                      <EditIcon className="h-4 w-4" />
                    </Button>
                    <Button 
                      variant="ghost" 
                      size="icon" 
                      className="text-destructive hover:text-destructive"
                      onClick={() => handleDeleteClick(room.id)}
                    >
                      <DeleteIcon className="h-4 w-4" />
                    </Button>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={6} className="text-center h-24 text-muted-foreground">
                  No rooms found.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      
      <Dialog open={isDeleteDialogOpen} onOpenChange={setIsDeleteDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Confirm Deletion</DialogTitle>
            <DialogDescription>
              Are you sure you want to delete this room? This action cannot be undone.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsDeleteDialogOpen(false)}>
              Cancel
            </Button>
            <Button variant="destructive" onClick={confirmDelete}>
              Delete
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AdminRoomTable;
