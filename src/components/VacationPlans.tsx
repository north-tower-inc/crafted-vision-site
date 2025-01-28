import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const plans = [
  {
    id: 1,
    location: "Rome, Italy",
    price: "$748k",
    image: "https://images.unsplash.com/photo-1482881497185-d4a9ddbe4151?auto=format&fit=crop&w=400",
    rating: 4.5,
    duration: "7 Day Trip"
  },
  {
    id: 2,
    location: "India, Delhi",
    price: "$748k",
    image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=400",
    rating: 4.8,
    duration: "7 Day Trip"
  },
  {
    id: 3,
    location: "Usa, Chicago",
    price: "$748k",
    image: "https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&w=400",
    rating: 4.6,
    duration: "7 Day Trip"
  },
  {
    id: 4,
    location: "UK, London",
    price: "$748k",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=400",
    rating: 4.7,
    duration: "7 Day Trip"
  },
];

export const VacationPlans = () => {
  return (
    <div className="container mx-auto px-6 py-16 bg-light-blue">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-2">
        Best <span className="text-navy">Vacation Plan</span>
      </h2>
      <p className="text-gray-600 text-center mb-12">
        Plan your perfect vacation with our travel agency. Choose among hundreds of all-inclusive offer!
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {plans.map((plan) => (
          <div key={plan.id} className="bg-white rounded-3xl overflow-hidden shadow-lg">
            <img
              src={plan.image}
              alt={plan.location}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-semibold text-lg">{plan.location}</h3>
                <span className="text-navy font-bold">{plan.price}</span>
              </div>
              <div className="flex items-center justify-between text-sm text-gray-600">
                <span>{plan.duration}</span>
                <div className="flex items-center">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <span className="ml-1">{plan.rating}</span>
                </div>
              </div>
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