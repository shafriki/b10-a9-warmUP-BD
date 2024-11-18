import React, { useEffect } from 'react';

const Dashboard = () => {

    useEffect(() => {
        document.title = "Dashboard | WarmUP Bangladesh";
    }, []);

    return (
        <div>
            Dashboard
        </div>
    );
};

export default Dashboard;