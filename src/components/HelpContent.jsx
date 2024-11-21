import React from 'react';

const HelpContent = () => {
    return (
        <div className='bg-green-50 mb-20'>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6 max-w-screen-xl mx-auto ">
            {/* text content*/}
            <div>
                <h1 className="text-2xl md:text-4xl text-[#34495E] font-semibold">With Your Support, Everyone Can Enjoy A Warm Cloth</h1>
                <p className="mt-4 text-xs md:text-base text-justify">Donating to WarmUp Bangladesh’s Winter Clothing program helps provide warmth and comfort to those in need during the harsh winter months. Your contribution brings hope to vulnerable individuals across Bangladesh.</p>
            </div>

            {/* image content */}
            <div className="grid grid-cols-2 gap-1 md:gap-4 md:grid-cols-2 sm:grid-cols-1">
                <img src="https://i.ibb.co.com/9qPTrDH/a02.jpg" alt="Image 1" className="w-full h-24 md:h-48 object-cover shadow-lg" />
                <img src="https://i.ibb.co.com/hsZZq7C/m2.jpg" alt="Image 2" className="w-full h-24 md:h-48 object-cover shadow-lg" />
                <img src="https://i.ibb.co.com/f2vsyNd/a04.jpg" alt="Image 3" className="w-full h-24 md:h-48 object-cover shadow-lg" />
                <img src="https://i.ibb.co.com/FxFfc9b/m3.jpg" alt="Image 4" className="w-full h-24 md:h-48 object-cover shadow-lg" />
            </div>
        </div>
        </div>
    );
};

export default HelpContent;
