import React, { useState } from 'react'
import websiteImg1 from '../../assets/Home/website1.png'
import websiteImg2 from '../../assets/Home/website2.png'
import websiteImg3 from '../../assets/Home/website3.png'
import websiteImg4 from '../../assets/Home/website4.png'
import websiteImg5 from '../../assets/Home/website5.png'
import { FaFigma, FaLink } from 'react-icons/fa'

export const portfolioItems = [
    {
        id: 1,
        title: 'Kids know Right web & app',
        category: 'UI UX',
        image: websiteImg3,
        link: '#'
    },
    {
        id: 2,
        title: 'Podlove-Dating App & website',
        category: 'UI UX',
        image: websiteImg1,
        link: '#'
    },
    {
        id: 3,
        title: 'Pro Sure Multi -Vendor app',
        category: 'UI UX',
        image: websiteImg2,
        link: '#'
    },
    {
        id: 4,
        title: 'Pro Sure Multi -Vendor app',
        category: 'UI UX',
        image: websiteImg4,
        link: '#'
    },
    {
        id: 5,
        title: 'Pro Sure Multi -Vendor app',
        category: 'UI UX',
        image: websiteImg5,
        link: '#'
    }
]

const Graphics = () => {
    const [showAll, setShowAll] = useState(false)

    const visibleItems = showAll ? portfolioItems : portfolioItems.slice(0, 3)

    const handleToggle = () => {
        setShowAll(prev => !prev)
    }

    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
                {visibleItems.map(item => (
                    <div key={item.id} className="group relative overflow-hidden rounded shadow-lg">
                        <img
                            src={item.image}
                            alt={item.title}
                            className="w-full h-[400px] object-cover transform duration-300 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition duration-300">
                            <a
                                href={item.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-white text-2xl transform scale-0 group-hover:scale-100 transition duration-300"
                            >
                                <div className='bg-[#ff620079] px-2 py-2 rounded-full'>
                                <FaFigma />
                                </div>
                            </a>
                        </div>
                        <div className="py-4 px-4">
                            <p className="text-sm text-orange-500">{item.category}</p>
                            <h3 className="text-xl font-semibold">{item.title}</h3>
                        </div>
                    </div>
                ))}
            </div>

            {/* View More / View Less Button */}
            <div className="flex justify-center pt-4">
                <button onClick={handleToggle} className="text-[#FD6F00] hover:underline font-semibold">
                    {showAll ? 'View less' : 'View more'}
                </button>
            </div>
        </div>
    )
}

export default Graphics