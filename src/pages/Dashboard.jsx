import React, { useEffect } from 'react';
import Profile from '../components/Profile';

const Dashboard = () => {

    useEffect(() => {
        document.title = "Dashboard | WarmUP Bangladesh";
    }, []);

    return (
        <div>
            <Profile></Profile>
        </div>
    );
};

export default Dashboard;