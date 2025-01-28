import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const destinations = [
  {
    id: 1,
    name: "Mountain Peak",
    image: "https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&w=400",
  },
  {
    id: 2,
    name: "Amazon",
    image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=400",
  },
  {
    id: 3,
    name: "Coastal Town",
    image: "https://images.unsplash.com/photo-1482881497185-d4a9ddbe4151?auto=format&fit=crop&w=400",
  },
  {
    id: 4,
    name: "Mountain View",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=400",
  },
];

export const Destinations = () => {
  return (
    <div className="container mx-auto px-6 py-16">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-2">
        Find Your Best <span className="text-navy">Destination</span>
      </h2>
      <p className="text-gray-600 text-center mb-8">
        We have more than 2000 destination you can choose
      </p>
      
      <div className="max-w-xl mx-auto relative mb-12">
        <Input
          type="text"
          placeholder="Search Destination"
          className="w-full pl-12 py-6 rounded-full border-gray-300"
        />
        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {destinations.map((dest) => (
          <div
            key={dest.id}
            className="relative rounded-3xl overflow-hidden group cursor-pointer"
          >
            <img
              src={dest.image}
              alt={dest.name}
              className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
              <p className="text-white p-4 font-semibold">{dest.name}</p>
            </div>
          </div>
        ))}
      </div>
      
      <div className="text-center mt-8">
        <Button variant="link" className="text-navy">
          See more
        </Button>
      </div>
    </div>
  );
};