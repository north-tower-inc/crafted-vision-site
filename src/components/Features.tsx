import { Plane, MapPin, Hotel, Camera } from "lucide-react";

export const Features = () => {
  const features = [
    {
      icon: <Plane className="w-8 h-8" />,
      title: "Flight Booking",
      description: "Easy and fast flight booking with great deals and offers"
    },
    {
      icon: <MapPin className="w-8 h-8" />,
      title: "Tour Guide",
      description: "Local expertise to guide you through amazing destinations"
    },
    {
      icon: <Hotel className="w-8 h-8" />,
      title: "Hotel Booking",
      description: "Comfortable stays at the best prices guaranteed"
    },
    {
      icon: <Camera className="w-8 h-8" />,
      title: "Photo Gallery",
      description: "Capture and share your memorable moments"
    }
  ];

  return (
    <div className="container mx-auto px-6 py-16">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-2">
        Why Choose <span className="text-navy">Daily Travel</span>
      </h2>
      <p className="text-gray-600 text-center mb-12">
        We offer the best services for all your travel needs
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, index) => (
          <div key={index} className="flex flex-col items-center text-center p-6 bg-white rounded-3xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 flex items-center justify-center bg-light-blue rounded-full mb-4 text-navy">
              {feature.icon}
            </div>
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};