import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="w-full py-4 px-6 md:px-12 flex items-center justify-between bg-white">
      <Link to="/" className="text-2xl font-bold text-navy">Daily Travel</Link>
      
      <div className="hidden md:flex items-center space-x-8">
        <Link to="/" className="text-navy hover:text-opacity-80">Home</Link>
        <Link to="/destination" className="text-navy hover:text-opacity-80">Destination</Link>
        <Link to="/flight" className="text-navy hover:text-opacity-80">Flight</Link>
        <Link to="/booking" className="text-navy hover:text-opacity-80">Booking</Link>
        <Link to="/blog" className="text-navy hover:text-opacity-80">Blog</Link>
        <Link to="/contact" className="text-navy hover:text-opacity-80">Contact Us</Link>
      </div>

      <div className="flex items-center space-x-4">
        <Button variant="ghost" className="text-navy">Log In</Button>
        <Button className="bg-navy text-white hover:bg-navy/90">Sign Up</Button>
      </div>
    </nav>
  );
};