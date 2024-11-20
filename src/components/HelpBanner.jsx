import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const HelpBanner = () => {
    useEffect(() => {
        AOS.init();
    }, []);

    const images = [
        "https://i.ibb.co.com/qCWYk0F/h-1.png",
        "https://i.ibb.co.com/mzVxHhQ/h-2.jpg",
        "https://i.ibb.co.com/t4G19Vb/h5.jpg",
        "https://i.ibb.co.com/hZ4dBRs/h4.jpg",
    ];

    return (
        <div className="relative">

            <div className="grid grid-cols-4 gap-0 mb-20">
                {images.map((img, index) => (
                    <div key={index} className="h-40 md:h-[23rem]" data-aos="fade-up" data-aos-delay={index * 100}>
                        <img src={img} alt="" className="w-full h-full object-cover" />
                    </div>
                ))}

            </div>

            <div className="absolute inset-0 bg-[#2C3E50] bg-opacity-70 flex flex-col justify-center items-center" data-aos="zoom-in">

                <h2 className="text-white text-3xl md:text-5xl font-bold text-center animate__animated animate__pulse"> How You Can Help</h2>

                <p className="text-white text-center mt-4 text-xs md:text-lg max-w-2xl">Give People Physical and Emotional Warmth By donate clothes to homeless</p>
            </div>
        </div>
    );
};

export default HelpBanner;
