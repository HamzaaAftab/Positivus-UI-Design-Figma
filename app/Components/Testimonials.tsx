'use client'
// TestimonialSlider.tsx
import React, { useState } from 'react';

const testimonials = [
  {
    text: "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.",
    name: "John Smith",
    position: "Marketing Director at XYZ Corp",
  },
  {
    text: "Positivus has been a game-changer for our business. Their expertise in digital marketing helped us reach new heights. We couldn't be happier with the results!",
    name: "Jane Doe",
    position: "CEO at ABC Inc.",
  },
  {
    text: "Thanks to Positivus, our online presence has improved drastically. They have been a valuable partner in helping us achieve our marketing goals.",
    name: "Alice Johnson",
    position: "CTO at Acme Solutions",
  },
  {
    text: "The team at Positivus is highly skilled and dedicated. They go above and beyond to ensure our success. Highly recommended!",
    name: "Michael Brown",
    position: "CMO at DEF Corp",
  },
];

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className='pt-8 py-4 md:py-12'>

      {/* 1st Div */}
      <div className="sm:flex sm:items-center sm:justify-center  md:gap-x-12 md:space-y-0 space-y-4 sm:w-[76%] md:pb-12 sm:px-2 mb-8 mt-4">
        <h1 className="bg-[#B9FF66] px-1 sm:w-[33%] md:w-[40%] w-[71%] mx-auto rounded-md font-medium text-3xl md:text-4xl tracking-wide ">
             Testimonials
        </h1>

        <p className='hidden sm:block sm:text-sm md:tracking-wide text-center w-full md:text-left tracking-wider text-[12px]'>At Hear from Our Satisfied Clients: Read Our Testimonials <br/> to Learn More about Our Digital Marketing Services</p>

        <p className='block sm:hidden sm:text-sm md:tracking-wide text-center w-full md:text-left tracking-wider text-[12px]'>At Hear from Our Satisfied Clients: Read Our Testimonials to Learn More about Our Digital Marketing Services</p>
      </div>

    <div className="bg-[#B9FF66] hidden md:block px-12 py-6 rounded-[60px] max-w-screen-lg mx-auto text-center">
     
     <div className="relative">
       <div className="p-8">
         <p className="text-black text-lg mb-4">{testimonials[currentIndex].text}</p>
         <div className="text-black font-semibold">{testimonials[currentIndex].name}</div>
         <div className="text-blue-800">{testimonials[currentIndex].position}</div>
       </div>

       {/* Navigation Controls */}
       <div className="absolute -inset-6 mt-8 flex items-center justify-between ">
         <button
           onClick={handlePrev}
           className="bg-gray-800 text-[#B9FF66] p-2 rounded-full hover:bg-gray-700 focus:outline-none"
         >
           &#8592;
         </button>
         <button
           onClick={handleNext}
           className=" bg-gray-800 text-[#B9FF66] p-2 rounded-full hover:bg-gray-700 focus:outline-none"
         >
           &#8594;
         </button>
       </div>

       {/* Indicator Dots */}
       <div className="flex justify-center mt-4 space-x-2">
         {testimonials.map((_, index) => (
           <span
             key={index}
             className={`h-3 w-3 rounded-full ${index === currentIndex ? 'bg-green-500' : 'bg-gray-500'}`}
           ></span>
         ))}
       </div>
     </div>
    </div>

    </div>
  );
};

export default Testimonials;
