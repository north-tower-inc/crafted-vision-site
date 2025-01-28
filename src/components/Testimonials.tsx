import { Star } from "lucide-react";

export const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Travel Enthusiast",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150",
      content: "The best travel experience I've ever had. The team was incredibly helpful and made everything so easy.",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "Adventure Seeker",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150",
      content: "Exceptional service and amazing destinations. I couldn't have asked for a better travel partner.",
      rating: 5
    },
    {
      name: "Emma Davis",
      role: "Family Traveler",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150",
      content: "Perfect for family trips! They took care of everything and made our vacation unforgettable.",
      rating: 5
    }
  ];

  return (
    <div className="container mx-auto px-6 py-16 bg-light-blue">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-2">
        What Our <span className="text-navy">Travelers Say</span>
      </h2>
      <p className="text-gray-600 text-center mb-12">
        Real experiences from our satisfied travelers
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="bg-white p-6 rounded-3xl shadow-lg">
            <div className="flex items-center mb-4">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-12 h-12 rounded-full object-cover mr-4"
              />
              <div>
                <h3 className="font-semibold">{testimonial.name}</h3>
                <p className="text-sm text-gray-600">{testimonial.role}</p>
              </div>
            </div>
            <div className="flex mb-4">
              {[...Array(testimonial.rating)].map((_, i) => (
                <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
              ))}
            </div>
            <p className="text-gray-600">{testimonial.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};