import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const AboutUs = () => {
    useEffect(() => {
        AOS.init();
    }, []);

    const images = [
        "https://i.ibb.co.com/hc3xgT1/a01.jpg",
        "https://i.ibb.co.com/9qPTrDH/a02.jpg",
        "https://i.ibb.co.com/bdNFCyQ/a03.jpg",
        "https://i.ibb.co.com/f2vsyNd/a04.jpg",
        "https://i.ibb.co.com/gTkCQf3/a05.webp"
    ];

    return (
        <div className="relative">

            {/* image grid layout of about us */}
            <div className="grid grid-cols-5 gap-0 mt-20">

                {images.map((img, index) => (
                    <div key={index} className="h-40 md:h-52" data-aos="fade-up"
                        data-aos-delay={index * 100}>

                        <img src={img} alt=''className="w-full h-full object-cover" />
                    </div>
                ))}
            </div>

            <div className="absolute inset-0 bg-[#34495E] bg-opacity-60 flex justify-center items-center"
                data-aos="zoom-in">

                <h2 className="text-white text-2xl md:text-4xl font-bold text-center animate__animated animate__bounce">
                    WarmUP Bangladesh</h2>
            </div>
        </div>
    );
};

export default AboutUs;
