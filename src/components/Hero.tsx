import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <div className="container mx-auto px-6 py-12 md:py-24 flex flex-col md:flex-row items-center justify-between">
      <div className="md:w-1/2 space-y-6">
        <h1 className="text-4xl md:text-6xl font-bold text-navy leading-tight">
          Travel Memories<br />You'll Never Forget
        </h1>
        <p className="text-gray-600 text-lg">
          Two prominently seamless distinct when the virtual has reached the end of it travel
        </p>
        <div className="flex space-x-4">
          <Button className="bg-navy text-white hover:bg-navy/90">Find Out More</Button>
          <Button variant="outline" className="border-navy text-navy hover:bg-navy/10">
            Play Demo
          </Button>
        </div>
      </div>
      <div className="md:w-1/2 mt-12 md:mt-0">
        <img
          src="/lovable-uploads/cb604965-8661-4b3f-baab-39940a1466e5.png"
          alt="Travel Illustration"
          className="w-full max-w-md mx-auto"
        />
      </div>
    </div>
  );
};