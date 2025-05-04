import React, { useRef } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { SlArrowRight, SlArrowLeft } from "react-icons/sl";
import { MdStar } from "react-icons/md";
import img1 from "../../assets/Home/heroImage.jpg";
import img2 from "../../assets/Home/heroImage.jpg";
import img3 from "../../assets/Home/heroImage.jpg";

const Review = () => {
    const category = [
        {
            img: img1,
            title: "Earings",
            location: "New York, USA",
            review:
                "I was looking for the perfect engagement ring, and this website exceeded all my expectations! The craftsmanship is stunning, and the diamond sparkles beautifully. My fiancée absolutely loves it, and I couldn’t be happier with my purchase!",
        },
        {
            img: img2,
            title: "Necklaces",
            location: "New York, USA",
            review:
                "I was looking for the perfect engagement ring, and this website exceeded all my expectations! The craftsmanship is stunning, and the diamond sparkles beautifully. My fiancée absolutely loves it, and I couldn’t be happier with my purchase!",
        },
        {
            img: img3,
            title: "Rings",
            location: "New York, USA",
            review:
                "I was looking for the perfect engagement ring, and this website exceeded all my expectations! The craftsmanship is stunning, and the diamond sparkles beautifully. My fiancée absolutely loves it, and I couldn’t be happier with my purchase!",
        },
        {
            img: img1,
            title: "Earings",
            location: "New York, USA",
            review:
                "I was looking for the perfect engagement ring, and this website exceeded all my expectations! The craftsmanship is stunning, and the diamond sparkles beautifully. My fiancée absolutely loves it, and I couldn’t be happier with my purchase!",
        },
        {
            img: img2,
            title: "Necklaces",
            location: "New York, USA",
            review:
                "I was looking for the perfect engagement ring, and this website exceeded all my expectations! The craftsmanship is stunning, and the diamond sparkles beautifully. My fiancée absolutely loves it, and I couldn’t be happier with my purchase!",
        },
        {
            img: img3,
            title: "Rings",
            location: "New York, USA",
            review:
                "I was looking for the perfect engagement ring, and this website exceeded all my expectations! The craftsmanship is stunning, and the diamond sparkles beautifully. My fiancée absolutely loves it, and I couldn’t be happier with my purchase!",
        },
    ];

    const splideRef = useRef(null);

    const handlePrevClick = () => {
        if (splideRef.current) {
            splideRef.current.splide.go("<");
        }
    };

    const handleNextClick = () => {
        if (splideRef.current) {
            splideRef.current.splide.go(">");
        }
    };

    return (
        <div className="container mx-auto px-4 py-12">
            <div className='text-center pt-20 pb-11'>
                <h1 className='text-5xl font-bold pb-5'>Testimonials</h1>
                <p className='text-lg max-w-4xl m-auto'>My
                Lorem ipsum dolor sit amet consectetur. Imperdiet convallis blandit felis ligula aliquam venenatis fghh hgjj nisi ante.</p>
            </div>

           

            <div className="relative">
                {/* Arrows */}
                <div className="absolute -left-16 top-1/2 transform -translate-y-2/1 z-10">
                    <button
                        onClick={handlePrevClick}
                        className="bg-gray-200 text-black p-2 rounded-full hover:bg-gray-300 transition"
                    >
                        <SlArrowLeft />
                    </button>
                </div>
                <div className="absolute -right-16 top-1/2 transform -translate-y-2/1 z-10">
                    <button
                        onClick={handleNextClick}
                        className="bg-gray-200 text-black p-2 rounded-full hover:bg-gray-300 transition"
                    >
                        <SlArrowRight />
                    </button>
                </div>

                {/* Slider */}
                <Splide
                    ref={splideRef}
                    options={{
                        type: "loop",
                        perPage: 3,
                        gap: "1rem",
                        arrows: false,
                        pagination: false,
                        breakpoints: {
                            1024: { perPage: 2 },
                            640: { perPage: 1 },
                        },
                    }}
                    aria-label="Customer Reviews"
                >
                    {category.map((item, index) => (
                        <SplideSlide key={index}>
                            <div className="bg-white border border-slate-100 rounded-lg p-3  shadow-sm ">
                                <div className="grid grid-cols-12">
                                <div className=" col-span-4 flex items-center">
                                    <img
                                        className="rounded-full w-[120px] h-[120px] object-cover"
                                        src={item.img}
                                        alt={item.title}
                                    />
                                </div>
                                <div className="col-span-8">
                                    <h3 className="text-lg font-semibold">{item.title}</h3>
                                    <p className="text-sm text-gray-500">{item.location}</p>
                                    <p className="text-sm text-gray-600 mt-3">{item.review}</p>
                                    <div className="flex mt-4 text-yellow-500">
                                        {[...Array(5)].map((_, i) => (
                                            <MdStar key={i} />
                                        ))}
                                    </div>
                                </div>
                                </div>
                            </div>
                        </SplideSlide>
                    ))}
                </Splide>
            </div>
        </div>
    );
};

export default Review;
