import React from 'react'
import hero from '../../assets/Home/sufiya.png'
const HeroSection = () => {
    return (
        <div className='md:h-[80vh] '>
            <div >
                <div className='md:grid md:grid-cols-2'>
                    <div className='flex items-center pt-11'>
                        <div>
                            <h3 className='font-semibold'>Hi I am</h3>
                            <h1 className='text-[#FF6300] font-semibold text-2xl'>Sufiya Akter</h1>
                            <h1 className='text-7xl font-bold'>UI/Ux </h1>
                            <h1 className='text-7xl font-bold pl-28'>Designer</h1>
                            <p className='pt-9 '>UI & UX Biliner with a focus on creating visually compelling and user-friendly designs. Successfully revamped a major e-commerce site, leading to a 30% increase in sales. Proficient in using tools such as Adobe Creative Suite and Zeplin to deliver high-quality designs.
                            </p>
                            <button className='bg-[#FF6300] px-9 py-2 rounded text-white mt-7'>Hire Me</button>
                        </div>
                    </div>
                    <div className='hidden md:block'>
                    <div className='flex justify-end items-center '>
                        <div className='mt-36'>
                            <img className='w-[400px] ' src={hero} alt="" />
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroSection