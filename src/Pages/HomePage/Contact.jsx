import React from 'react'

const Contact = () => {
    return (
        <div className='pb-28'>
            <div className='text-center pt-20 pb-11'>
                <h1 className='text-5xl font-bold pb-5'>Lets Design Together</h1>
                <p className='text-lg max-w-4xl m-auto'>Lorem ipsum dolor sit amet consectetur. Imperdiet convallis blandit felis ligula aliquam venenatis fghh hgjj nisi ante.</p>
            </div>

            <div className='flex gap-4 justify-center'>
                <input className='bg-[#F8F8F8] border py-3 rounded px-3 w-96' type="text" placeholder='Enter Your Email'/>
                <button className='bg-[#FD6F00] px-4 py-3 rounded text-white'>Contact Me</button>
            </div>
        </div>
    )
}

export default Contact