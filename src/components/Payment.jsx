import React from 'react';
import Marquee from 'react-fast-marquee';

const Payment = () => {
    return (
        <div className="max-w-screen-xl mx-auto my-20">
            <h1 className='text-center text-2xl md:text-4xl font-bold text-[#34495E] mb-8'>Pay With</h1>
            <div className="flex items-center">
                <Marquee pauseOnHover='ture' className='cursor-pointer'>
                <div className="h-16 md:h-28 w-full mr-5">
                    <img src="https://i.ibb.co.com/tcYWSJX/U8-Q06e47ryj-D2-Pehh6dk-Tc-Cdloyqwyklp-EQxbtd9.jpg" alt="Option 1" className="w-full h-full object-contain" />
                </div>
                <div className="h-16 md:h-28 w-full mr-5">
                    <img src="https://i.ibb.co.com/znfL0B8/images.png" alt="Option 2" className="w-full h-full object-contain" />
                </div>
                <div className="h-16 md:h-28 w-full mr-5">
                    <img src="https://i.ibb.co.com/51NrgkJ/dutch-bangla-rocket-logo-png-seeklogo-317692.png" alt="Option 3" className="w-full h-full object-contain" />
                </div>
                <div className="h-16 md:h-28 w-full mr-5">
                    <img src="https://i.ibb.co.com/tBFgz9j/pngwing-com-1.png" alt="Option 4" className="w-full h-full object-contain" />
                </div>
                <div className="h-16 md:h-28 w-full mr-5">
                    <img src="https://i.ibb.co.com/hfCG34k/pngwing-com-2.png" alt="Option 5" className="w-full h-full object-contain" />
                </div>
                <div className="h-16 md:h-28 w-full mr-5">
                    <img src="https://i.ibb.co.com/3hVJ14D/pngwing-com-4.png" alt="Option 6" className="w-full h-full object-contain" />
                </div>
                <div className="h-16 md:h-28 w-full mr-5">
                    <img src="https://i.ibb.co.com/tQTWxHc/pngwing-com-6.png" alt="Rocket Logo" className="w-full h-full object-contain" />
                </div>
                <div className="h-16 md:h-28 w-full mr-5">
                    <img src="https://i.ibb.co.com/cTpzQBH/pngwing-com-7.png" alt="Image 8" className="w-full h-full object-contain" />
                </div>
                <div className="h-16 md:h-28 w-full mr-5">
                    <img src="https://i.ibb.co.com/cTQc1bt/pngwing-com-8.png" alt="Image 9" className="w-full h-full object-contain" />
                </div>
                </Marquee>
            </div>
        </div>
    );
};

export default Payment;
