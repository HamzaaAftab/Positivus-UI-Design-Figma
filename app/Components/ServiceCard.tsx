// components/ServiceCard.tsx

import Image from 'next/image';
import { GoArrowUpRight } from "react-icons/go";
type ServiceCardProps = {
  title: string;
  bgColor: string;
  imageSrc: string;
  textbg: string;
  arrowBg: string;
  arrowColor: string;
};

const ServiceCard = ({ title, bgColor, imageSrc, textbg, arrowBg, arrowColor }: ServiceCardProps) => (
  
  <div className={`px-10 py-12 rounded-[30px] shadow-md shadow-black border-b-2 border-black ${bgColor} flex justify-between items-center `}>
    {/* 1st Div */}
    <div className="flex flex-col space-y-16">

      <div className='w-[201px]'>
      <h3 className={`font-semibold tracking-wider px-2 text-black mb-2 ${textbg} text-2xl`}>{title}</h3>
      </div>

      

      <div className='w-[170px] tracking-wide flex space-x-4 items-center'>
            <GoArrowUpRight className={`${arrowBg} ${arrowColor} text-3xl font-extrabold rounded-full p-1`}   />
            <h3 className='font-medium'>Learn More</h3>
      </div>

    </div>



    <div className='w-[180px] mr-2'>
    <Image src={imageSrc} alt={`${title} icon`} width={170} height={12} className="mb-4 hidden lg:block " />
    </div>
  </div>

);

export default ServiceCard;
