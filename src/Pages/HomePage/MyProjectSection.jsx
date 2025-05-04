import React, { useState } from 'react'
import All from './All';
import Website from './Website';
import App from './App';
import Graphics from './Graphics';
import UiUx from './UiUx';

const MyProjectSection = () => {
    const [activeTab, setActiveTab] = useState("all");
    return (
        <div>
            <div className='text-center pt-28 pb-11'>
                <h1 className='text-5xl font-bold pb-5'>My Projects</h1>
                <p className='text-lg max-w-4xl m-auto'>My
                    UI/UX design expertise merges user needs with business objectives, creating interfaces that are both visually appealing and highly
                    functional.</p>
            </div>

            <div className='flex justify-center'>
            <div className="flex gap-4 rounded-lg p-2 ">
                <button
                    onClick={() => setActiveTab("all")}
                    className={`${activeTab === "all"
                        ? " bg-[#FD6F00] text-white"
                        : "bg-[#f1f1f1]"
                        } lg:px-6 rounded  py-2`}
                >
                    All
                </button>
                <button
                    onClick={() => setActiveTab("ui")}
                    className={`${activeTab === "ui"
                        ? "  bg-[#FD6F00] text-white"
                        : "bg-[#f1f1f1]"
                    } lg:px-6 rounded  py-2`}
                >
                    UI/UX
                </button>
                <button
                    onClick={() => setActiveTab("website")}
                    className={`${activeTab === "website"
                        ? "  bg-[#FD6F00] text-white"
                        : "bg-[#f1f1f1]"
                    } lg:px-6 rounded py-2`}
                >
                    Website Design
                </button>
                <button
                    onClick={() => setActiveTab("app")}
                    className={`${activeTab === "app"
                        ? " bg-[#FD6F00] text-white"
                        : "bg-[#f1f1f1]"
                    } lg:px-6 rounded py-2`}
                >
                    App Design
                </button>
                <button
                    onClick={() => setActiveTab("graphics")}
                    className={`${activeTab === "graphics"
                        ? "  bg-[#FD6F00] text-white"
                        : "bg-[#f1f1f1]"
                    } lg:px-6 rounded py-2`}
                >
                    Graphics Design
                </button>
            </div>

            </div>

            {activeTab === "all" && (
                <>


                    <div className="">
                        <All></All>
                    </div>

                </>
            )}
            {activeTab === "ui" && (
                <div className="">


                    <UiUx></UiUx>
                </div>
            )}
            {activeTab === "website" && (
                <div className="">

                    <Website></Website>
                </div>
            )}

            {activeTab === "app" && (
                <div className="">

                    <App></App>
                </div>
            )}

            {activeTab === "graphics" && (
                <div className="">

                    <Graphics></Graphics>
                </div>
            )}


        </div>
    )
}

export default MyProjectSection