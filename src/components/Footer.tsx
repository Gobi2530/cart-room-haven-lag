
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-white border-t py-12">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-4">LAG</h3>
            <p className="text-muted-foreground">
              Luxury accommodation for all your needs. Experience comfort like never before.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-lag-600">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/rooms" className="text-muted-foreground hover:text-lag-600">
                  Rooms
                </Link>
              </li>
              <li>
                <Link to="/bookings" className="text-muted-foreground hover:text-lag-600">
                  My Bookings
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Rooms</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/rooms?type=single" className="text-muted-foreground hover:text-lag-600">
                  Single Cart Rooms
                </Link>
              </li>
              <li>
                <Link to="/rooms?type=double" className="text-muted-foreground hover:text-lag-600">
                  Double Cart Rooms
                </Link>
              </li>
              <li>
                <Link to="/rooms?category=premium" className="text-muted-foreground hover:text-lag-600">
                  Premium Rooms
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <address className="not-italic text-muted-foreground">
              <p>123 Booking Street</p>
              <p>LAG City, 10001</p>
              <p className="mt-2">info@lag-rooms.com</p>
              <p>+1 (555) 123-4567</p>
            </address>
          </div>
        </div>
        
        <div className="border-t mt-8 pt-8 text-center text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} LAG Rooms. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
