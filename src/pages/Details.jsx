import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { HiStatusOnline } from "react-icons/hi";
import { FaPhoneVolume, FaTreeCity } from "react-icons/fa6";
import Form from '../components/Form';

const Details = () => {
    const details = useLoaderData();
    const { id } = useParams();
    const detailIdInt = parseInt(id);
    const detail = details.find(detail => detail.id === detailIdInt);

    const getStatusColor = (status) => {
        switch (status) {
            case 'Active':
                return 'text-green-500';  
            case 'Ongoing':
                return 'text-blue-500';  
            default:
                return 'text-red-500';   
        }
    }

    const handleDonateClick = () => {
        if (detail.status !== 'Completed') {
            document.getElementById('donation-form').scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className='bg-[#F0F8FF]'>

            {/* detail info banner */}
            <div className="relative bg-cover bg-center md:h-[25rem] bg-no-repeat text-white mb-10"
                style={{
                    backgroundImage: `url('https://i.ibb.co.com/9qPTrDH/a02.jpg')`, }}
                data-aos="fade-up">
                <div className="bg-black/70 w-full h-full absolute top-0 left-0" data-aos="fade" data-aos-delay="100"></div>
                <div className="relative max-w-7xl mx-auto py-16 px-6 text-left" data-aos="fade-up" data-aos-delay="200">
                    <h1 className="font-bold text-lg md:text-4xl text-center mt-2 md:mt-4" data-aos="fade-up" data-aos-delay="400"> Details & Information </h1>
                </div>
            </div>

            {/* details card */}
            <div className='mx-3 md:mx-0 md:absolute md:right-[16rem] md:top-[14rem]'>
                <div className="card lg:card-side shadow-xl max-w-screen-lg mx-auto mb-10 bg-green-100">
                    <figure>
                        <img
                            src={detail.image} className='w-[20rem] md:w-[30rem]'
                            alt="Album" />
                    </figure>
                    <div className="p-5 md:w-1/2">
                        <h2 className="card-title">{detail.title}</h2>
                        <p className='text-justify text-sm md:text-base my-5'>{detail.description}</p>
                        <div>
                            <p className={`my-2 ${getStatusColor(detail.status)}`}><HiStatusOnline className="inline-block mr-2 text-lg" />{detail.status}</p>
                            <p><FaPhoneVolume className="text-blue-600 inline-block mr-2" /> {detail.contactInfo}</p>
                            <p className='my-2'><FaTreeCity className="text-green-600 text-lg inline-block mr-2" />{detail.division}</p>
                            <button id='donate' className='bg-[#34495E] text-white px-6 py-2 rounded-md hover:bg-green-600 focus:outline-none w-full btn md:mt-[9rem]' disabled={detail.status === 'Completed'}
                            onClick={handleDonateClick}> Donate Now </button>
                        </div>

                        <div className="card-actions justify-end">
                        </div>
                    </div>
                </div>
            </div>
            
            <div id="donation-form">
                <Form />
            </div>
        </div>
    );
};

export default Details;
