
import React from "react";
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from "@/components/ui/carousel";
import Testimonial from "./Testimonial";

interface TestimonialData {
  quote: string;
  author: string;
}

interface TestimonialCarouselProps {
  testimonials: TestimonialData[];
  featured?: boolean;
}

const TestimonialCarousel: React.FC<TestimonialCarouselProps> = ({ 
  testimonials,
  featured = false 
}) => {
  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      className="w-full"
    >
      <CarouselContent>
        {testimonials.map((testimonial, index) => (
          <CarouselItem key={index} className="md:basis-1/1 lg:basis-1/1">
            <div className="p-1">
              <Testimonial
                quote={testimonial.quote}
                author={testimonial.author}
                featured={featured}
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className="flex justify-center gap-2 mt-4">
        <CarouselPrevious className="relative static left-0 right-0 translate-y-0" />
        <CarouselNext className="relative static left-0 right-0 translate-y-0" />
      </div>
    </Carousel>
  );
};

export default TestimonialCarousel;
