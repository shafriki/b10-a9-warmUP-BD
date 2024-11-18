import React, { useEffect } from 'react';
import Campaigns from '../components/Campaigns';

const Donation = () => {

    useEffect(() => {
        document.title = "Donation | WarmUP Bangladesh";
    }, []);

    return (
        <div>
            <Campaigns></Campaigns>
        </div>
    );
};

export default Donation;