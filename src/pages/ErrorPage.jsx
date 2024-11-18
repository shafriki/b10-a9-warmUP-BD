import React, { useEffect } from 'react';

const ErrorPage = () => {

    useEffect(() => {
        document.title = "Error | WarmUP Bangladesh";
    }, []);

    return (
        <div>
            sorry bro error khaya gacho
        </div>
    );
};

export default ErrorPage;