import React from "react";
import { GoArrowUpRight } from "react-icons/go";
const Case = () => {
  return (
    <div className="py-16">
      {/* First Section */}
      
      <div className="sm:flex sm:items-center sm:justify-between md:gap-x-12 md:space-y-0 space-y-4 sm:w-[70%] md:pb-12 sm:px-2 mb-8">
        <h1 className="bg-[#B9FF66] px-1 md:w-[46%] w-[65%] mx-auto rounded-md font-medium text-3xl md:text-4xl tracking-wide ">
             Case Studies
        </h1>
        <p className="sm:text-sm md:tracking-wide text-center md:text-left text-[10px] tracking-wide">
        Explore Real-Life Examples of Our Proven Digital Marketing Success through Our Case Studies 
        </p>
      </div>

      {/* Second Section */}
      
      <div className="grid gap-8 grid-cols-1 md:grid-cols-3 lg:grid-cols-3 md:py-12 py-4 px-4 bg-black rounded-[30px] sm:space-x-8 ">
        {/* Case Study Cards */}
        
        <div className="flex flex-col sm:pl-12 sm:pr-8 px-2 space-y-4 sm:border-r-[1px] sm:border-[#B9FF66] ">
          <p className="text-white text-left text-sm">For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales.</p>
             <div className='tracking-wide flex space-x-1 items-center'>
          <h3 className='font-medium text-[#B9FF66] '>Learn More</h3>
          <GoArrowUpRight className={` text-[#B9FF66] text-3xl font-extrabold p-1`}   />
            </div>
        </div>

        <div className="flex flex-col sm:pl-3 sm:pr-8 px-2 space-y-4 sm:border-r-[1px] sm:border-[#B9FF66]  ">
          <p className="text-white text-left text-sm">For a B2B software company, we developed an SEO strategy that resulted in a first page ranking for key keywords and a 200% increase in organic traffic.</p>
             <div className='tracking-wide flex space-x-1 items-center'>
          <h3 className='font-medium text-[#B9FF66] '>Learn More</h3>
          <GoArrowUpRight className={` text-[#B9FF66] text-3xl font-extrabold p-1`}   />
            </div>
        </div>

        <div className="flex flex-col sm:pl-8 sm:pr-10 px-2 space-y-4 ">
          <p className="text-white text-left text-sm">For a national retail chain, we created a social media marketing campaign that increased followers by 25% and generated a 20% increase in online sales.</p>
             <div className='tracking-wide flex space-x-1 items-center'>
          <h3 className='font-medium text-[#B9FF66] '>Learn More</h3>
          <GoArrowUpRight className={` text-[#B9FF66] text-3xl font-extrabold p-1`}   />
            </div>
        </div>

      </div>



    </div>
  );
};

export default Case;
