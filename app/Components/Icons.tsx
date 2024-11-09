import React from 'react'
import Image from 'next/image';
import logo1 from '../../assets/Company logo.png'
import logo2 from '../../assets/Companylogo1.png'
import logo3 from '../../assets/Companylogo2.png'
import logo4 from '../../assets/Companylogo3.png'
import logo5 from '../../assets/Companylogo4.png'
import logo6 from '../../assets/Companylogo5.png'
// interface Icons {
//     name: string;
//     url: string;
//   }
  
//   const icons: Icons[] = [
//     { name: 'About us', url:"" },
//     { name: 'Services', url:"" },
//     { name: 'Use Cases', url:"" },
//     { name: 'Pricing', url:"" },
//     { name: 'Blog', url:"" },
//   ];
const Icons = () => {
  return (
    <div className='md:py-16 py-8 grid md:flex md:justify-between md:items-center  grid-cols-3 gap-4'>
       
        <Image src={logo1} width={100}  alt='hero'/>
        <Image src={logo2} width={100}  alt='hero'/>
        <Image src={logo3} width={100}  alt='hero'/>
        <Image src={logo4} width={100}  alt='hero'/>
        <Image src={logo5} width={100}  alt='hero'/>
        <Image src={logo6} width={100}  alt='hero'/>

    </div>
  )
}

export default Icons
