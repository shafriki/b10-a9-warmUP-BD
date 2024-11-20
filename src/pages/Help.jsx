import React, { useEffect } from 'react';
import HelpBanner from '../components/HelpBanner';
import HelpContent from '../components/HelpContent';
import Points from '../components/Points';
import Contact from '../components/Contact';

const Help = () => {

    useEffect(() => {
        document.title = "Help | WarmUP Bangladesh";
    }, []);

    return (
        <div>
            <section>
                <HelpBanner></HelpBanner>
            </section>
            <section>
                <HelpContent></HelpContent>
            </section>
            <section className='max-w-screen-xl mx-auto mb-20'>
                <Points></Points>
            </section>
            <section>
                <Contact></Contact>
            </section>
        </div>
    );
};

export default Help;