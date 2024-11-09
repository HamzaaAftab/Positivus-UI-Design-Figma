import Image from 'next/image'
import React from 'react'

const Working = () => {
  return (
    <div className='py-4'>
      
      {/* First Section */}
      <div className="sm:flex sm:items-center sm:justify-between md:gap-x-12 md:space-y-0 space-y-4 sm:w-[75%] md:pb-12 sm:px-2 mb-4">
        <h1 className="bg-[#B9FF66] px-1 sm:w-[100%] w-[93%] mx-auto rounded-md font-medium text-2xl md:text-4xl tracking-wide ">
             Our Working Process
        </h1>
        <p className="sm:text-sm md:tracking-wide text-center w-full md:text-left text-[12px] tracking-wide">
        Step-by-Step Guide to Achieving <br/> Your Business Goals 
        </p>
      </div>

    {/* Only for Larger Screens */}
      <div className='hidden md:flex md:flex-col space-y-6 rounded-[450px] md:rounded-[30px] px-16 py-8 bg-[#B9FF66] relative shadow-sm shadow-black border-b-[3px] border-black '>
            
            <div className='flex justify-between items-center'>
                <div className='flex items-center space-x-7 '>
                        <h1 className='text-5xl font-semibold  ' >01</h1>
                        <p className='text-2xl font-medium' >Consultation</p>
                </div>

                <div className='absolute right-16'>
                    <Image src="/negative.png" alt="" width={53} height={50} />
                </div>

            </div>

            <div className='border-t-[1px] pt-8 border-black w-full'>
                <p>During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.</p>
            </div>
            
      </div>

      
    {/* Only for smaller screens */}
    <div className='md:hidden flex my-6 bg-[#F3F3F3] px-8 py-4 md:px-16 md:py-8 rounded-[30px]  shadow-black border-b-[3px] border-black shadow-sm justify-between items-center relative'>
                <div className='flex items-center space-x-4 '>
                        <h1 className='md:text-5xl text-3xl font-semibold' >01</h1>
                        <p className='md:text-2xl text-md  font-medium' >Consultation</p>
                </div>

                <div className='absolute md:right-16 right-7 '>
                    <Image src="/plus.png" alt="" width={28} height={30} />
                </div>

    </div>

    {/*  */}
    <div className='flex my-6 bg-[#F3F3F3] px-8 py-4 md:px-16 md:py-8 rounded-[30px]  shadow-black border-b-[3px] border-black shadow-sm justify-between items-center relative'>
                <div className='flex items-center md:space-x-7 space-x-4 '>
                        <h1 className='md:text-5xl text-3xl font-semibold' >02</h1>
                        <p className='md:text-2xl text-sm  font-medium' >Research and Strategy Development</p>
                </div>

                <div className='absolute md:right-16 right-7 '>
                    <Image src="/plus.png" alt="" width={28} height={30} className='md:w-[40px]' />
                </div>

    </div>

    {/*  */}
    <div className='flex my-6 bg-[#F3F3F3] px-8 py-4 md:px-16 md:py-8 rounded-[30px]  shadow-black border-b-[3px] border-black shadow-sm justify-between items-center relative'>
                <div className='flex items-center md:space-x-7 space-x-4 '>
                        <h1 className='md:text-5xl text-3xl font-semibold' >03</h1>
                        <p className='md:text-2xl text-sm  font-medium' >Implementation</p>
                </div>

                <div className='absolute md:right-16 right-7 '>
                    <Image src="/plus.png" alt="" width={28} height={30} className='md:w-[40px]' />
                </div>

    </div>

    {/*  */}
    <div className='flex my-6 bg-[#F3F3F3] px-8 py-4 md:px-16 md:py-8 rounded-[30px]  shadow-black border-b-[3px] border-black shadow-sm justify-between items-center relative'>
                <div className='flex items-center md:space-x-7 space-x-4 '>
                        <h1 className='md:text-5xl text-3xl font-semibold' >04</h1>
                        <p className='md:text-2xl text-sm  font-medium' >Monitoring and Optimization</p>
                </div>

                <div className='absolute md:right-16 right-7 '>
                    <Image src="/plus.png" alt="" width={28} height={30} className='md:w-[40px]' />
                </div>

    </div>

    {/*  */}
    <div className='flex my-6 bg-[#F3F3F3] px-8 py-4 md:px-16 md:py-8 rounded-[30px]  shadow-black border-b-[3px] border-black shadow-sm justify-between items-center relative'>
                <div className='flex items-center md:space-x-7 space-x-4 '>
                        <h1 className='md:text-5xl text-3xl font-semibold' >05</h1>
                        <p className='md:text-2xl text-[13px]  font-medium' >Reporting and Communication</p>
                </div>

                <div className='absolute md:right-16 right-7 '>
                    <Image src="/plus.png" alt="" width={28} height={30} className='md:w-[40px]' />
                </div>

    </div>

    {/*  */}
    <div className='flex my-6 bg-[#F3F3F3] px-8 py-4 md:px-16 md:py-8 rounded-[30px]  shadow-black border-b-[3px] border-black shadow-sm justify-between items-center relative'>
                <div className='flex items-center md:space-x-7 space-x-4 '>
                        <h1 className='md:text-5xl text-3xl font-semibold' >06</h1>
                        <p className='md:text-2xl text-sm  font-medium' >Continual Improvement</p>
                </div>

                <div className='absolute md:right-16 right-7 '>
                    <Image src="/plus.png" alt="" width={28} height={30} className='md:w-[40px]' />
                </div>

    </div>
    </div>
  )
}

export default Working 
