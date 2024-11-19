import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const Details = () => {
    const details = useLoaderData();
    const {id} = useParams();
    const detailIdInt = parseInt(id);
    const detail = details.find(detail => detail.id == detailIdInt);

    return (

        <div>

            {/* detail info banner */}
            <div className="relative bg-cover bg-center bg-no-repeat text-white my-14"
            style={{
                backgroundImage: `url('https://i.ibb.co.com/9qPTrDH/a02.jpg')`, }}
                data-aos="fade-up">
                <div className="bg-black/70 w-full h-full absolute top-0 left-0" data-aos="fade" data-aos-delay="100"></div>
                <div className="relative max-w-7xl mx-auto py-16 px-6 text-left" data-aos="fade-up" data-aos-delay="200">
                <h1 className="font-bold text-lg md:text-4xl text-center mt-2 md:mt-4" data-aos="fade-up" data-aos-delay="400"> Details & Information </h1>
                </div>
            </div>

            <p>{detail.title}</p>
        </div>
    );
};

export default Details;

