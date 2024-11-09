import Image from 'next/image'
import React from 'react'

const Things = () => {
  return (
    <div className=' bg-[#F3F3F3] flex justify-between items-center rounded-[36px] md:px-16 md:py-8 px-8 py-6  '>
        
        <div className='md:flex md:flex-col md:w-[60%] space-y-6'>
            <h1 className='md:text-3xl text-xl font-semibold tracking-wide'>Let’s make things happen</h1>
            <p className='text-[13px] sm:w-[65%] w-full tracking-normal '>Contact us today to learn more about how our digital marketing services can help your business grow and succeed online.</p>
            <button className='bg-black text-white font-light py-3 px-2 rounded-[18px] border border-black md:w-[48%]'>Get your free Proposal</button>
        </div>

        <Image src="/things.png" alt="" width={350} height={300} className='hidden absolute right-24 md:block' />


    </div>
  )
}

export default Things
