import Image from 'next/image'
import React from 'react'
import hero from '../../assets/hero.png'

const Hero = () => {
  return (
    <div className='py-4'>
      
        <div className='md:flex sm:justify-center md:items-center md:justify-center'>
            
            <div className='sm:w-[55%] w-full flex flex-col justify-center '>

            <h1 className='text-4xl mt-2 sm:text-4xl sm:w-[80%] md:text-5xl font-medium md:leading-[55px]  '>Navigating the digital landscape for success</h1>

            <Image src={hero} width={300}  alt='hero' className='md:hidden mx-auto mt-4 ' />

            <p  className=' w-full md:w-[68%] text-md tracking-wide mt-6'>Our digital marketing agency helps businesses grow and succeed online through a range of services including SEO, PPC, social media marketing, and content creation.</p>

            <button className='bg-black text-white font-light py-3 px-2 rounded-[18px] border border-black mt-6  md:w-[48%]'>Book a Consultation</button>
            
            </div>

           <div className=' hidden md:flex w-[50%] justify-center items-center mr-8 '>
           <Image src={hero} width={420}  alt='hero'/>
           </div>

        </div>

    </div>
  )
}

export default Hero
