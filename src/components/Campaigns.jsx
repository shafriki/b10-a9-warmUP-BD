import React, { useState, useEffect } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom'; 
import { HiStatusOnline } from "react-icons/hi";
import { FaPhoneVolume, FaTreeCity } from "react-icons/fa6";
import AOS from "aos";
import "aos/dist/aos.css";

const Campaigns = () => {
  const campaigns = useLoaderData();
  const [toggledState, setToggledState] = useState({});
  const navigate = useNavigate(); 

  const handleToggle = (id) => {
    setToggledState((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  const handleDonateNow = (id) => {
    navigate(`/details/${id}`); 
  };

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="max-w-screen-xl mx-auto my-10">
      <h1 className="text-center text-xl mb-5 md:text-4xl font-bold text-[#34495E]">
        Explore All Donation Campaigns
      </h1>

      {/* Campaign cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 p-4">
        {campaigns.map((campaign) => {
          const descriptionWords = campaign.description.split(" ");
          const displayedDescription = toggledState[campaign.id]
            ? campaign.description
            : descriptionWords.slice(0, 9).join(" ");

          return (
            <div key={campaign.id} className="border-none rounded-lg shadow-xl bg-blue-50" data-aos="fade-up">
              <img src={campaign.image} alt="" className="w-full object-cover rounded-t-lg"/>

              <h3 className="text-xl font-semibold mt-4 px-4">
                {campaign.title}
              </h3>

              <p className="text-sm text-gray-600 mt-2 px-4 text-justify">
                {displayedDescription}

                {descriptionWords.length > 13 && (
                  <span className="text-blue-500 cursor-pointer"
                    onClick={() => handleToggle(campaign.id)}>
                    {toggledState[campaign.id] ? " Show less" : " ...Show more"}
                  </span>
                )}
              </p>

              <hr className="border border-gray-400 my-2 mx-4" />

              <div className="mt-4 flex justify-between items-center px-4">
                <span className={`text-sm font-medium ${
                    campaign.status === "Active"
                      ? "text-green-500"
                      : campaign.status === "Ongoing"
                      ? "text-blue-500"
                      : campaign.status === "Completed"
                      ? "text-red-500"
                      : "text-gray-500" 
                  }`}>
                  <HiStatusOnline className="inline-block mr-2 text-lg" />
                  {campaign.status}
                </span>

                <span className="text-sm text-gray-500">
                  <FaPhoneVolume className="text-blue-600 inline-block mr-2" />
                  {campaign.contactInfo}
                </span>
              </div>

              <p className="text-sm text-gray-500 mt-2 px-4">
                <FaTreeCity className="text-green-600 text-lg inline-block mr-2" />
                Division: {campaign.division}
              </p>

              <div className="mt-4 text-center p-4">
                <button
                  onClick={() => handleDonateNow(campaign.id)} 
                  className="bg-[#34495E] text-white px-6 py-2 rounded-md hover:bg-green-600 focus:outline-none w-full btn">
                  Donate Now
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Campaigns;
