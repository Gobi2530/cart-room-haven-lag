
import { Room } from "@/components/RoomCard";

export const mockRooms: Room[] = [
  {
    id: "1",
    name: "Cozy Room for Unmarried Couples",
    type: "unmarried",
    category: "normal",
    price: 7390,
    availableRooms: 12,
    imageUrl: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
    description: "A comfortable room with all essential amenities for unmarried couples.",
  },
  {
    id: "2",
    name: "Deluxe Double Room",
    type: "double",
    category: "normal",
    price: 10720,
    availableRooms: 8,
    imageUrl: "https://images.unsplash.com/photo-1590490360182-c33d57733427?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
    description: "Spacious double cart room perfect for married couples with a king-size bed and city views.",
  },
  {
    id: "3",
    name: "Premium Suite for Unmarried Couples",
    type: "unmarried",
    category: "premium",
    price: 12390,
    availableRooms: 5,
    imageUrl: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    description: "Luxury suite for unmarried couples with premium amenities, a workspace, and complimentary breakfast.",
  },
  {
    id: "4",
    name: "Premium Double Suite",
    type: "double",
    category: "premium",
    price: 16570,
    availableRooms: 3,
    imageUrl: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    description: "Our most luxurious double cart accommodation for married couples with premium services and amenities.",
  },
  {
    id: "5",
    name: "Economy Room for Unmarried Couples",
    type: "unmarried",
    category: "normal",
    price: 5740,
    availableRooms: 15,
    imageUrl: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    description: "Budget-friendly room for unmarried couples with all the essentials for a comfortable stay.",
  },
  {
    id: "6",
    name: "Family Double Room",
    type: "double",
    category: "normal",
    price: 12390,
    availableRooms: 7,
    imageUrl: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
    description: "Spacious double cart room ideal for married couples with children, featuring two queen beds.",
  },
];

export const dashboardStats = {
  totalRooms: 50,
  availableRooms: 35,
  totalBookings: 204,
  activeBookings: 18,
  singleRooms: 32,
  doubleRooms: 18,
  premiumRooms: 15,
  normalRooms: 35,
};

export const mockBookings = [
  {
    id: "b1",
    roomId: "3",
    guestName: "John Smith",
    checkInDate: "2025-04-20",
    checkOutDate: "2025-04-25",
    status: "confirmed"
  },
  {
    id: "b2",
    roomId: "4",
    guestName: "Emily Johnson",
    checkInDate: "2025-04-18",
    checkOutDate: "2025-04-22",
    status: "active"
  },
  {
    id: "b3",
    roomId: "1",
    guestName: "Michael Brown",
    checkInDate: "2025-05-01",
    checkOutDate: "2025-05-03",
    status: "confirmed"
  }
];
