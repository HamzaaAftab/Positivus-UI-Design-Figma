import React from 'react'
import ServiceCard from './ServiceCard';

const servicesData = [
    {
      title: 'Search engine optimization',
      bgColor: 'bg-[#F3F3F3]',
      imageSrc: '/Illustration.png', // Replace with your icon paths
      textbg: 'bg-[#B9FF66]', 
      arrowBg: 'bg-black',
      arrowColor: 'text-[#B9FF66]',
    },
    {
      title: 'Pay-per-click advertising',
      bgColor: 'bg-[#B9FF66]',
      imageSrc: '/Illustration1.png',
      textbg: 'bg-[#fff]', // Replace with your
      arrowBg: 'bg-black',
      arrowColor: 'text-[#B9FF66]',
    },
    {
      title: 'Social Media Marketing',
      bgColor: 'bg-black text-white',
      imageSrc: '/Illustration3.png',
      textbg: 'bg-[#fff]',
      arrowBg: 'bg-white',
      arrowColor: 'text-black',
    },
    {
      title: 'Email Marketing',
      bgColor: 'bg-[#F3F3F3]',
      imageSrc: '/Illustration4.png', // Replace with your icon paths
      textbg: 'bg-[#B9FF66]', 
      arrowBg: 'bg-black',
      arrowColor: 'text-[#B9FF66]',
    },
    {
      title: 'Content Creation',
      bgColor: 'bg-[#B9FF66]',
      imageSrc: '/Illustration5.png',
      textbg: 'bg-[#fff]', // Replace with your
      arrowBg: 'bg-black',
      arrowColor: 'text-[#B9FF66]',
    },
    {
        title: 'Analytics and Tracking',
        bgColor: 'bg-black text-white',
        imageSrc: '/Illustration6.png',
        textbg: 'bg-[#B9FF66]',
        arrowBg: 'bg-white',
        arrowColor: 'text-black',
    },
  ];
const Services = () => {
  return (
    <div className='pb-12 md:pb-16'>

        {/* Services First Section */}

        <div className='sm:flex sm:items-center sm:justify-between md:gap-x-12 md:space-y-0 space-y-4 sm:w-[67%] md:pb-12 mb-8'>

            <h1 className='bg-[#B9FF66] md:px-2 md:w-[44%] w-[46%] mx-auto rounded-md font-medium text-3xl md:text-4xl tracking-wide '>SERVICES</h1>
            <p className='sm:text-sm md:tracking-wide text-center md:text-left text-[12px] tracking-wide'>At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:</p>

        </div>


        {/* Cards Section */}

        <div className="grid gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
      {servicesData.map((service, index) => (
        <ServiceCard
          key={index}
          title={service.title}
          bgColor={service.bgColor}
          imageSrc={service.imageSrc}
          textbg={service.textbg}
          arrowBg={service.arrowBg}
          arrowColor={service.arrowColor}
        />
      ))}
    </div>

    </div>
  )
}

export default Services

