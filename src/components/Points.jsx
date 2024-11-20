import React from 'react';
import { Link } from 'react-router-dom';

const Points = () => {
  return (
    <div className="mt-8 text-center" data-aos="fade-up" data-aos-delay="500">
      <h3 className="text-2xl md:text-4xl text-[#34495E] font-bold">Supported Divisions</h3>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-6 mx-3" data-aos="zoom-in"> {["Sylhet", "Rangpur", "Mymensingh", "Khulna", "Barisal", "Chattagram", "Dhaka", "Rajshahi"].map(
          (location, index) => (
            <div key={index} className="relative group cursor-pointer overflow-hidden rounded-lg shadow-lg" data-aos="flip-right"
              data-aos-delay={600 + index * 100}>
              <img src={
                  index === 0
                    ? "https://i.ibb.co.com/G7gjjXS/syl.png"
                    : index === 1
                    ? "https://i.ibb.co.com/5r74Nrt/rang.png"
                    : index === 2
                    ? "https://i.ibb.co.com/12rWcq8/my.png"
                    : index === 3
                    ? "https://i.ibb.co.com/VNn5rXy/khu.png"
                    : index === 4
                    ? "https://i.ibb.co.com/5Tm4jyw/bar.png"
                    : index === 5
                    ? "https://i.ibb.co.com/D9mzQRQ/chat.png"
                    : index === 6
                    ? "https://i.ibb.co.com/gt6WXrd/dha.png"
                    : "https://i.ibb.co.com/TPZ86Pg/raj.png"
                }
                alt={location}
                className="w-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"/>

              <div className="absolute inset-0 bg-[#34495E] bg-opacity-80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out"></div>

              <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">

                <Link to='/donation' className="bg-[#E74C3C] md:px-8 text-white btn rounded-none border-none">More</Link>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default Points;
