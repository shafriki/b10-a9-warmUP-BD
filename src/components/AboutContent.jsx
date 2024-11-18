import React from 'react';

const AboutContent = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-3 max-w-screen-xl mx-auto py-12 md:py-20 gap-5 md:gap-10'>

            {/* about text content */}
            <div className='md:col-span-2 mx-3 md:mx-0'>
                        
                        <h3 className="text-[#E74C3C] font-semibold uppercase text-sm mb-2">Your Generosity, Their Warmth</h3>
                        
                        <h2 className="text-[#34495E] text-3xl md:text-5xl font-bold mb-4">About Us</h2>

                        <p className="text-gray-700 text-sm md:text-base mb-6 text-justify">
                            WarmUp Bangladesh connects donors with volunteers to
                            provide warm clothing to those in need across the
                            country. Since 2023, we have been working tirelessly
                            to support communities affected by cold weather,
                            with our campaigns driven by compassion and
                            dedication.
                        </p>

                        <p className="text-gray-700 text-sm md:text-base mb-6 text-justify">
                            Our services include providing winter clothing,
                            health and safety awareness, and other community
                            support initiatives. Together, we can make a
                            difference in the lives of vulnerable people.
                        </p>

                        <button className="btn bg-[#34495E] text-white text-xs md:text-sm border-none hover:bg-[#E74C3C]"> Organization Info </button>
                    </div>

            {/* about count */}
            <div className="stats stats-horizontal md:stats-vertical  shadow-none text-[#34495E]">

                <div className="stat">
                    <div className="stat-value">100+</div>
                    <div className="stat-desc">Volunteers In 2024</div>
                </div>

                <div className="stat">
                    <div className="stat-value">500+</div>
                    <div className="stat-desc">People We Helped In 2024</div>
                </div>

                <div className="stat">
                    <div className="stat-value">10M</div>
                    <div className="stat-desc">Funds We Collected</div>
                </div>

            </div>

        </div>
    );
};

export default AboutContent;