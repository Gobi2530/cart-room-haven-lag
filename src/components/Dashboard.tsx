
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { 
  BedDoubleIcon, 
  BedSingleIcon, 
  CalendarIcon,
  GuestIcon,
  PremiumIcon
} from "@/components/Icons";

interface DashboardProps {
  stats: {
    totalRooms: number;
    availableRooms: number;
    totalBookings: number;
    activeBookings: number;
    singleRooms: number;
    doubleRooms: number;
    premiumRooms: number;
    normalRooms: number;
  };
}

const Dashboard = ({ stats }: DashboardProps) => {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Total Rooms</CardTitle>
          <BedDoubleIcon className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{stats.totalRooms}</div>
          <p className="text-xs text-muted-foreground">
            {stats.availableRooms} currently available
          </p>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Room Types</CardTitle>
          <div className="flex space-x-1">
            <BedSingleIcon className="h-4 w-4 text-muted-foreground" />
            <BedDoubleIcon className="h-4 w-4 text-muted-foreground" />
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex justify-between items-center">
            <div>
              <div className="text-2xl font-bold">{stats.singleRooms}</div>
              <p className="text-xs text-muted-foreground">Single Cart</p>
            </div>
            <div>
              <div className="text-2xl font-bold">{stats.doubleRooms}</div>
              <p className="text-xs text-muted-foreground">Double Cart</p>
            </div>
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Room Categories</CardTitle>
          <PremiumIcon className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="flex justify-between items-center">
            <div>
              <div className="text-2xl font-bold">{stats.normalRooms}</div>
              <p className="text-xs text-muted-foreground">Normal</p>
            </div>
            <div>
              <div className="text-2xl font-bold">{stats.premiumRooms}</div>
              <p className="text-xs text-muted-foreground">Premium</p>
            </div>
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Bookings</CardTitle>
          <CalendarIcon className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{stats.totalBookings}</div>
          <p className="text-xs text-muted-foreground">
            {stats.activeBookings} active bookings
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default Dashboard;
