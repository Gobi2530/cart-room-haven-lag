
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { GuestIcon, BedDoubleIcon, ShieldIcon } from "@/components/Icons";

const Header = () => {
  return (
    <header className="border-b bg-white sticky top-0 z-10">
      <div className="container flex items-center justify-between py-4">
        <Link to="/" className="flex items-center space-x-2">
          <div className="w-8 h-8 rounded-md bg-lag-600 flex items-center justify-center">
            <BedDoubleIcon className="text-white h-5 w-5" />
          </div>
          <span className="text-xl font-bold text-lag-950">LAG</span>
        </Link>
        
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-foreground hover:text-lag-600 font-medium">
            Home
          </Link>
          <Link to="/rooms" className="text-foreground hover:text-lag-600 font-medium">
            Rooms
          </Link>
          <Link to="/bookings" className="text-foreground hover:text-lag-600 font-medium">
            My Bookings
          </Link>
        </nav>
        
        <div className="flex items-center space-x-4">
          <Link to="/admin">
            <Button variant="ghost" size="icon">
              <ShieldIcon className="h-5 w-5" />
            </Button>
          </Link>
          <Link to="/profile">
            <Button variant="ghost" size="icon">
              <GuestIcon className="h-5 w-5" />
            </Button>
          </Link>
          <Link to="/rooms">
            <Button>Book a Room</Button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
