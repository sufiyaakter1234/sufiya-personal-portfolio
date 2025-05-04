import React from 'react'
import hero from '../../assets/Home/sufiya.png'
import { Progress } from 'antd'

const AboutUsPage = () => {
    return (
        <div className='px-3 lg:px-0'>
            <div className='grid md:grid-cols-2'>
                <div className=''>
                    <img className='w-[400px]' src={hero} alt="" />
                </div>
                <div className='flex items-center'>
                    <div>
                        <h1 className='text-6xl font-semibold'>About Me </h1>
                        <p>I am a multidisciplinary designer with a curious mind, I enjoy to meet new people and understand how they are solving problems, this is one of the reasons why I ...</p>
                        <div className='pt-6'>
                            <h1 className='text-xl font-semibold'>UI</h1>
                            <Progress
                                percent={50}
                                percentPosition={{ align: 'end', type: 'inner' }}
                                size={[, 13]}
                                strokeColor="#FF6300"
                            />
                            <h1 className='text-xl font-semibold pt-3'>Website Design</h1>
                            <Progress

                                percent={90}
                                percentPosition={{ align: 'end', type: 'inner' }}
                                size={[, 13]}
                                strokeColor="#FF6300"
                            />
                            <h1 className='text-xl font-semibold pt-3'>App Design</h1>
                            <Progress
                                percent={80}
                                percentPosition={{ align: 'end', type: 'inner' }}
                                size={[, 13]}
                                strokeColor="#FF6300"
                            />
                            <h1 className='text-xl font-semibold pt-3'>Graphic Design </h1>
                            <Progress
                                percent={95}
                                percentPosition={{ align: 'end', type: 'inner' }}
                                size={[, 13]}
                                strokeColor="#FF6300"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutUsPage