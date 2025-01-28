import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Facebook, Twitter, Instagram } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-navy text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-xl mb-4">Powered By</h3>
            <p className="text-gray-300">Use Matter</p>
            <div className="mt-4 space-y-2">
              <a href="#" className="block text-gray-300 hover:text-white">Privacy Policy</a>
              <a href="#" className="block text-gray-300 hover:text-white">Cookies</a>
            </div>
          </div>
          
          <div>
            <h3 className="font-bold text-xl mb-4">Call center</h3>
            <p className="text-gray-300">International call center</p>
          </div>
          
          <div>
            <h3 className="font-bold text-xl mb-4">Subscribe to newsletter</h3>
            <div className="flex gap-2">
              <Input
                type="email"
                placeholder="Email address"
                className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
              />
              <Button variant="secondary">Join Now</Button>
            </div>
          </div>
          
          <div>
            <h3 className="font-bold text-xl mb-4">Download our mobile app</h3>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-gray-300 hover:text-white">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <Instagram className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-12 pt-8 text-center text-gray-300">
          <p>© 2024 Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};