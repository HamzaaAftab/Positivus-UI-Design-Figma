import Image from 'next/image'
import React from 'react'

const Contact = () => {
  return (
    <div className='md:py-12 py-4'>
        {/* 1st Div */}
      <div className="sm:flex sm:items-center sm:justify-center  md:gap-x-12 md:space-y-0 space-y-4 sm:w-[76%] md:pb-8 sm:px-2 mb-8">
        <h1 className="bg-[#B9FF66] px-1 sm:w-[37%] w-[65%] mx-auto rounded-md font-medium text-3xl md:text-4xl tracking-wide ">
             Contact Us
        </h1>

        <p className='hidden sm:block sm:text-sm md:tracking-wide text-center w-full md:text-left tracking-wider text-[12px]'>Connect with Us: Lets Discuss Your <br/> Digital Marketing Needs</p>

        <p className='block sm:hidden sm:text-sm md:tracking-wide text-center w-full md:text-left tracking-wider text-[12px]'>Connect with Us: Lets Discuss Your Digital Marketing Needs</p>
      </div>

      {/* 2nd Div */}
      <div className='bg-[#F3F3F3] relative flex items-center overflow-hidden rounded-[30px]'>

            <div className='flex flex-col w-[100%] md:w-[70%] md:px-16 px-7 py-10 md:py-8  '>

                <div className='flex items-center w-full space-x-7'>
                 <div className='space-x-1'>
                    <input type="radio" defaultChecked id="html" name="fav_language" value="HTML" className=''/>
                    <label>Say Hi</label>
                 </div>

                 <div className='space-x-1'>
                    <input type="radio" id="html" name="fav_language" value="HTML"  />
                    <label>Get a Quote</label>
                 </div>
                </div>

            <div className='mt-6 md:mt-18 space-y-6'>
                {/* Name Div */}
                <div className='space-y-2'>
                    <label>Name</label> <br/>
                <   input type="text" placeholder="Name" className="px-6 py-2 sm:w-[450px] w-[230px] border border-black rounded-xl " />
                </div>

                {/* Email Div */}
                <div className='space-y-2'>
                    <label>Email</label> <br/>
                <   input type="text" placeholder="Email" className="px-6 py-2 sm:w-[450px] w-[230px] border border-black rounded-xl " />
                </div>

                {/* Message Div */}
                <div className='space-y-2'>
                    <label>Message</label> <br/>
                    <textarea name="" id="" cols={10} rows={4} placeholder="Message" className="px-6 py-2 sm:w-[450px] w-[230px] border border-black rounded-xl "></textarea>
                </div>

                <div className=''>
                <button className='bg-black text-white w-full font-light py-3 px-2 rounded-[18px] border border-black md:w-[70%]'>Send Message</button>
                </div>

            </div>

            </div>

            {/* Image */}
            <Image src="/contact.png" alt="" width={500} height={300} className='hidden md:block absolute right-[-235px]   ' />
            




      </div>
    </div>
  )
}

export default Contact
