import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaLinkedinIn } from 'react-icons/fa'
import { FaFacebookF, FaTwitter } from 'react-icons/fa6'

const Footer = () => {
  return (
    <div className='py-6 md:py-8  bg-black rounded-[30px]'>
    
      <div className='flex flex-col '>
            {/* NavBar */}
            <div className='flex flex-col md:flex-row items-center justify-between px-8 md:px-16 space-y-3 md:py-2 '>
                   <Image src="/logo.png" alt="" width={100} height={100} className='md:w-[13%] w-[60%] saturate-150 invert' /> 

                   <div className='flex gap-2 md:gap-4 flex-col md:flex-row text-white md:underline md:text-[14px] text-[12px] font-light '  >
                        <Link href='/' className='mx-2'>About us</Link>
                        <Link href='/' className='mx-2'>Services</Link>
                        <Link href='/' className='mx-2'>Use Cases</Link>
                        <Link href='/' className='mx-2'>Pricing</Link>
                        <Link href='/' className='mx-2'>Blog</Link>
                   </div>

                   <div className='md:flex hidden items-center gap-5 text-black'>
                        <FaLinkedinIn  className='bg-white text-2xl  py-1 rounded-lg'/>
                        <FaFacebookF className='bg-white text-2xl  py-1 rounded-lg'/>
                        <FaTwitter className='bg-white text-2xl  py-1 rounded-lg'/>
                   </div>
            </div>

            {/* Content Div Larger Screens */}
            <div className=' hidden md:flex items-center md:py-10 pt-4 justify-center px-8 md:px-16  '>
                <div className='md:w-[45%] md:flex flex-col    '>

                    <span className='bg-[#B9FF66] md:w-[25%] px-2 rounded-md font-medium text-md tracking-wide ' >Contact Us</span> 

                    <div className='flex flex-col py-4 text-white space-y-3 md:text-[14px] text-[12px] '>
                    <p>Email: info@positivus.com</p>
                    <p>Phone: 555-567-8901</p>
                    <p>Address: 1234 Main St <br />
                    Moonstone City, Stardust State 12345</p>
                    </div>   

                </div>

                <div className='bg-gray-800 md:w-[55%] items-center justify-center flex px-6 py-12 rounded-2xl '>

                    <div className='flex items-center justify-center gap-4'>
                        <input type="text" placeholder='Email' className='bg-transparent p-3 border-[1.5px] border-white rounded-[13px] px-4 py-3 '  />
                        <button className='bg-[#B9FF66] text-lg rounded-[13px] px-6 py-3' type="submit">Subscribe to News</button>
                    </div>

            </div>

            </div>

            {/* Content Div for Smaller Screens */}
            <div className='md:hidden flex flex-col items-center py-6 px-4 '>
                <div className='mx-auto flex flex-col items-center justify-center space-y-2' >
                    <h1 className='bg-[#B9FF66] px-1 w-[full] mx-auto rounded-md font-medium text-sm tracking-wide ' >Contact Us</h1>
                    <div className='mx-auto text-center py-4 text-white space-y-3 text-[11px] '>
                    <p>Email: info@positivus.com</p>
                    <p>Phone: 555-567-8901</p>
                    <p>Address: 1234 Main St <br />
                    Moonstone City, Stardust State 12345</p>
                    </div> 
                    
                    
                </div>  

                <div  className='bg-gray-800 w-full rounded-xl flex flex-col items-center justify-center space-y-3 px-4 py-6 '>
                <input type="text" placeholder='Email' className='bg-transparent border-[1.5px] border-white rounded-[10px] px-3 py-1 w-[98%] '  />

                    <button className='bg-[#B9FF66] text-sm rounded-[10px] px-11 py-2' type="submit">Subscribe to News</button>

                </div>

                <div className='flex items-center mt-5 gap-5 text-black'>
                        <FaLinkedinIn  className='bg-white text-2xl  py-1 rounded-lg'/>
                        <FaFacebookF className='bg-white text-2xl  py-1 rounded-lg'/>
                        <FaTwitter className='bg-white text-2xl  py-1 rounded-lg'/>
                   </div>
            </div>

            <div className='hidden md:block text-white py-1 px-8 md:px-16  '>
                <div className='flex space-x-5 border-t-[1px] pt-6  border-[white]  '>
                    <p>© 2023 Positivus. All Rights Reserved.</p>
                    <p className='underline' >Privacy Policy</p>
                </div>

            </div>

            <div className='md:hidden text-white py-1 px-8 md:px-16  '>
                <div className='flex flex-col text-center space-y-3 border-t-[1px] pt-6  border-[white]  '>
                    <p className=' text-[10px]'>© 2023 Positivus. All Rights Reserved.</p>
                    <p className='underline text-[10px]' >Privacy Policy</p>
                </div>

            </div>

            

      </div>


    </div>
  )
}

export default Footer
