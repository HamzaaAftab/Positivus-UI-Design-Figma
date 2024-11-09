import Image from 'next/image'
import React from 'react'
import { FaLinkedinIn } from 'react-icons/fa'


type TeamCardProps = {
    title: string,
    imageSrc: string,
    role: string,
    description: string,
    
}

const TeamCard = ({title, imageSrc, role, description, }:TeamCardProps) => {
  return (
    <div className='px-11 py-6 rounded-[30px] shadow-md shadow-black border-b-2 border-black flex flex-col ' >
        
        {/* 1st Div */}
        <div className='flex items-center relative mt-2'>
            <Image src={imageSrc} width={90} height={100} alt="" />
            <FaLinkedinIn className='bg-black text-[#B9FF66] text-2xl absolute top-0 right-1 p-[4px] rounded-[9px] ' />
            <div className='flex flex-col md:mt-12 mt-12 md:leading-4 leading-4 '>
              <h3 className='ml-4 md:text-[15px] text-md font-bold text-black'>{title}</h3>
              <h3 className='ml-4 md:text-sm text-[12px] w-full text-black'>{role}</h3>
            </div>
        </div>

        {/* Description div */}
        <div>
            <p className=' mt-4 text-sm py-4 border-t-[1px] border-black'>{description}</p>
        </div>

    </div>
  )
}



export default TeamCard
