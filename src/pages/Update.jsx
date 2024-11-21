import React, { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';
import { getAuth, updateProfile } from 'firebase/auth';

const Update = () => {
    const { user, setLoading } = useContext(AuthContext); 

    const [photoURL, setPhotoURL] = useState(user?.photoURL || ''); 
    const [displayName, setDisplayName] = useState(user?.displayName || ''); 

    const navigate = useNavigate();
    const auth = getAuth();

    const handleUpdate = async () => {
        try {
            setLoading(true); 
            await updateProfile(auth.currentUser, {
                photoURL,
                displayName,
            });

            navigate('/dashboard');

        } catch (error) {
            console.error('any error: ', error);
        } finally {
            setLoading(false); 
        }
    };

    useEffect(() => {
        if (!user) {
            navigate('/login');
        }
    }, [user, navigate]);

    return (
        <div className="min-h-screen">

            {/* update info banner */}
            <div className="relative bg-cover bg-center h-[16rem] bg-no-repeat text-white" style={{ backgroundImage: `url('https://i.ibb.co/9qPTrDH/a02.jpg')`,}} data-aos="fade-up">

                <div className="bg-black/70 w-full h-full absolute top-0 left-0"
                    data-aos="fade" data-aos-delay="100"></div>

                <div className="relative max-w-7xl mx-auto py-16 px-6 text-left"
                    data-aos="fade-up" data-aos-delay="200">

                    <h1 className="text-3xl mt-3 md:mt-0 md:text-5xl font-bold text-white text-center">
                        WarmUP <span className="text-green-500">Bangl</span>
                        <span className="text-red-500">adesh</span>
                    </h1>
                </div>
            </div>

            {/* Update form */}
            <div className="absolute top-[14rem] left-[50%] transform -translate-x-1/2 bg-white bg-opacity-50 p-8 rounded-lg shadow-xl w-[90%] sm:w-[40rem] text-center backdrop-blur-md">

                <h2 className="text-2xl font-semibold mb-4 text-black">Update Your Information</h2>
                
                {/* Form inputs */}
                <div className="mb-4">
                    <input type="text" placeholder="Enter new name" className="w-full px-4 py-2 border-none rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 bg-gray-500 text-gray-800" value={displayName} onChange={(e) => setDisplayName(e.target.value)}/>

                </div>

                <div className="mb-6">
                    <input type="url" placeholder="Enter new photo URL"
                        className="w-full px-4 py-2 border-none rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 bg-gray-500 text-gray-800" value={photoURL}
                        onChange={(e) => setPhotoURL(e.target.value)} />
                </div>
                
                {/* Update button */}
                <button onClick={handleUpdate} className="w-full btn border-none bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition duration-300"> Update Information</button>
            </div>

        </div>
    );
};

export default Update;
