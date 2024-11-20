import React from 'react';

const Contact = () => {
    return (
        <div className="flex flex-col md:flex-row justify-between gap-3 md:gap-8 p-3 md:p-8 bg-red-50 mb-10">

            {/* left side */}
            <div className="flex items-center  justify-center">
                <h2 className="text-lg md:text-2xl text-center md:text-start font-semibold">Subscribe for the <br /> latest news and insights.</h2>
            </div>

            {/* right side */}
            <div className="flex flex-col md:flex-row md:items-center space-y-2 md:space-y-0 md:space-x-4">
                <input type="text" placeholder="Your Name" className="p-2 md:p-3 border opacity-50 bg-gray-600 text-white  border-none rounded-md"/>
                <input type="email" placeholder="Your Email" className="p-2 md:p-3 border opacity-50 bg-gray-600 text-white  border-none rounded-md"/>
                <button className="bg-green-500 text-white btn border-none rounded-md hover:bg-green-600"> Subscribe</button>
            </div>
        </div>
    );
};

export default Contact;
