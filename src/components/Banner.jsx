import React from 'react';
const Banner = () => {
    return (
        <div className="max-w-screen-lg mx-auto my-10">
            <div className="carousel mx-3 md:mx-0">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src='https://i.ibb.co.com/MDsHr0k/banner-1.png' className="w-full" alt="Banner One" />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide3" className="btn btn-circle bg-[#E74C3C]">❮</a>
                        <a href="#slide2" className="btn btn-circle bg-[#E74C3C]">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src='https://i.ibb.co.com/p2VwnJX/banner-2.png' className="w-full" alt="Banner Two" />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide1" className="btn btn-circle bg-[#E74C3C]">❮</a>
                        <a href="#slide3" className="btn btn-circle bg-[#E74C3C]">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src='https://i.ibb.co.com/8N7dXX1/banner-3.png' className="w-full" alt="Banner Three" />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide2" className="btn btn-circle bg-[#E74C3C]">❮</a>
                        <a href="#slide1" className="btn btn-circle bg-[#E74C3C]">❯</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
