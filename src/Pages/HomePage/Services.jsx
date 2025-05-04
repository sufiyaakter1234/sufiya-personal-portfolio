import React from 'react'
import logo1 from '../../assets/Home/icon.png'
import logo2 from '../../assets/Home/logo2.png'
import logo3 from '../../assets/Home/logo3.png'
import logo5 from '../../assets/Home/logo5.png'
const Services = () => {
    return (
        <div>
            <div className='px-3 lg:px-0'>
                <div className='text-center pt-28 pb-11'>
                    <h1 className='text-5xl font-bold pb-5'>Services</h1>
                    <p className='text-lg max-w-4xl m-auto'>My
                        UI/UX design expertise merges user needs with business objectives, creating interfaces that are both visually appealing and highly
                        functional.</p>
                </div>
                <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-7 '>
                    <div className='bg-[#F3F3F3] px-4 py-9 rounded-xl'>
                        <div className=''>
                            <img className='w-16' src={logo1} alt="" />
                        </div>
                        <h1 className='text-3xl font-semibold py-6'>BI/BM</h1>
                        <p>Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh</p>
                    </div>
                    <div className='bg-[#F3F3F3] px-4 py-9 rounded-xl'>
                        <div className=''>
                            <img className='w-16' src={logo1} alt="" />
                        </div>
                        <h1 className='text-3xl font-semibold py-6'>BI/BM</h1>
                        <p>Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh</p>
                    </div>
                    <div className='bg-[#F3F3F3] px-4 py-9 rounded-xl'>
                        <div className=''>
                            <img className='w-16' src={logo1} alt="" />
                        </div>
                        <h1 className='text-3xl font-semibold py-6'>BI/BM</h1>
                        <p>Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh</p>
                    </div>
                    <div className='bg-[#F3F3F3] px-4 py-9 rounded-xl'>
                        <div className=''>
                            <img className='w-16' src={logo1} alt="" />
                        </div>
                        <h1 className='text-3xl font-semibold py-6'>BI/BM</h1>
                        <p>Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services