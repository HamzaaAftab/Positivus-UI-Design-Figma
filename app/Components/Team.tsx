import React from 'react'
import TeamCard from './TeamCard'

const teamCardData =[
    {
    title: "John Smith",
    imageSrc: "/team1.png",
    role: "CEO and Founder",
    description: "10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy",
  
    },
    {
        title: "Jane Doe",
        imageSrc: "/team2.png",
        role: "Director of Operations",
        description: "7+ years of experience in project management and team leadership. Strong organizational and communication skills",
       
    },
    {
        title: "Micheal Brown",
        imageSrc: "/team3.png",
        role: "Senior SEO Specialist",
        description: "5+ years of experience in SEO and content creation. Proficient in keyword research and on-page optimization",
        
    },
    {
        title: "Emily Johnson",
        imageSrc: "/team4.png",
        role: "PPC Manager",
        description: "3+ years of experience in paid search advertising. Skilled in campaign management and performance analysis",
        
    },
    {
        title: "Brian Williams",
        imageSrc: "/team5.png",
        role: "Social Media Specialist",
        description: "4+ years of experience in social media marketing. Proficient in creating and scheduling content, analyzing metrics, and building engagement",
        
    },
    {
        title: "Sarah Kim",
        imageSrc: "/team6.png",
        role: "Content Creator",
        description: "2+ years of experience in writing and editing Skilled in creating compelling, SEO-optimized content for various industries",
        
    },
]

const Team = () => {
  return (
    <div className='py-8 md:py-12 '>
        
        <div className="sm:flex sm:items-center sm:justify-center  md:gap-x-12 md:space-y-0 space-y-4 sm:w-[76%] md:pb-12 sm:px-2 mb-8">
        <h1 className="bg-[#B9FF66] px-1 md:w-[14%] w-[31%] mx-auto rounded-md font-medium text-3xl md:text-4xl tracking-wide ">
             Team
        </h1>
        <p className="hidden sm:block  sm:text-sm md:tracking-wide w-full text-center md:text-left text-[12px] tracking-wide">
        Meet the skilled and experienced team behind our <br />successful digital marketing strategies 
        </p>

        <p className="blockk md:hidden sm:text-sm md:tracking-wide  text-center md:text-left text-[12px] tracking-wide">
        Meet the skilled and experienced team behind oursuccessful digital marketing strategies 
        </p>
      </div>

      {/* Cards */}

        <div className='grid gap-12 grid-cols-1 md:grid-cols-3'>
            {teamCardData.map((card,index)=>{
                return(
                    <TeamCard
                        key={index}
                        title={card.title}
                        imageSrc={card.imageSrc}
                        role={card.role}
                        description={card.description}
                      
                    />
                )
            })}

        </div>

        <div className='relative mt-6'>
        <button className='bg-black absolute text-white font-light py-3 px-2 rounded-[18px] border border-black md:w-[18%] right-0'>See all team</button>
        </div>

    </div>
  )
}

export default Team 
