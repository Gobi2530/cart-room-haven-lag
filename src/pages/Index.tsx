
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { BedSingleIcon, BedDoubleIcon, PremiumIcon, ArrowRightIcon } from "@/components/Icons";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="hero-pattern py-20 md:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-lag-950 tracking-tight">
                  Find Your Perfect <span className="text-lag-600">Room</span> at LAG
                </h1>
                <p className="text-muted-foreground text-lg md:text-xl max-w-[600px]">
                  Experience comfort and luxury with our specially designed rooms for both unmarried couples and married guests.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Link to="/rooms">
                    <Button size="lg" className="w-full sm:w-auto">
                      Browse Rooms
                    </Button>
                  </Link>
                  <Link to="/admin">
                    <Button size="lg" variant="outline" className="w-full sm:w-auto">
                      Admin Panel
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="rounded-lg overflow-hidden shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1578683010236-d716f9a3f461?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
                  alt="Featured Room" 
                  className="w-full h-full object-cover aspect-video lg:aspect-auto"
                />
              </div>
            </div>
          </div>
        </section>
        
        {/* Features Section */}
        <section className="py-16 bg-white">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Room Types</h2>
              <p className="text-muted-foreground max-w-3xl mx-auto">
                We offer various room types to suit your needs and marital status.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="overflow-hidden hover:shadow-md transition-shadow">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1566665797739-1674de7a421a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80" 
                    alt="Room for Unmarried Couples"
                    className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-semibold">Rooms for Unmarried Couples</h3>
                    <BedSingleIcon className="h-6 w-6 text-lag-600" />
                  </div>
                  <p className="text-muted-foreground mb-6">
                    Designed for unmarried couples, our rooms offer comfort and privacy with all essential amenities.
                  </p>
                  <Link to="/rooms?type=unmarried">
                    <Button variant="outline" className="group w-full">
                      View Rooms for Unmarried Couples
                      <ArrowRightIcon className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
              
              <Card className="overflow-hidden hover:shadow-md transition-shadow">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1590490360182-c33d57733427?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80" 
                    alt="Double Cart Room"
                    className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-semibold">Double Cart Rooms</h3>
                    <BedDoubleIcon className="h-6 w-6 text-lag-600" />
                  </div>
                  <p className="text-muted-foreground mb-6">
                    Specially designed for married couples, our double cart rooms provide spacious comfort and privacy.
                  </p>
                  <Link to="/rooms?type=double">
                    <Button variant="outline" className="group w-full">
                      View Double Rooms
                      <ArrowRightIcon className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        
        {/* Categories Section */}
        <section className="py-16 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Room Categories</h2>
              <p className="text-muted-foreground max-w-3xl mx-auto">
                Choose between our standard and premium offerings
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="overflow-hidden hover:shadow-md transition-shadow">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
                    alt="Normal Room Category"
                    className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-semibold mb-4">Normal Rooms</h3>
                  <p className="text-muted-foreground mb-6">
                    Comfortable and affordable rooms with all the essentials for a pleasant stay.
                  </p>
                  <Link to="/rooms?category=normal">
                    <Button variant="outline" className="group w-full">
                      View Normal Rooms
                      <ArrowRightIcon className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
              
              <Card className="overflow-hidden hover:shadow-md transition-shadow">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1578683010236-d716f9a3f461?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
                    alt="Premium Room Category"
                    className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-semibold">Premium Rooms</h3>
                    <PremiumIcon className="h-6 w-6 text-amber-500" />
                  </div>
                  <p className="text-muted-foreground mb-6">
                    Luxury accommodations with premium amenities, services, and unforgettable experiences.
                  </p>
                  <Link to="/rooms?category=premium">
                    <Button variant="outline" className="group w-full">
                      View Premium Rooms
                      <ArrowRightIcon className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 bg-lag-600 text-white">
          <div className="container px-4 md:px-6 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Book Your Stay?</h2>
            <p className="max-w-3xl mx-auto mb-8 opacity-90">
              Experience the comfort and luxury of our rooms. Book now for the best rates and availability.
            </p>
            <Link to="/rooms">
              <Button size="lg" variant="secondary" className="bg-white text-lag-600 hover:bg-lag-50">
                Book Your Room Now
              </Button>
            </Link>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
