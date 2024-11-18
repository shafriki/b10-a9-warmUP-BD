import { useEffect } from "react";
import AboutContent from "../components/AboutContent";
import AboutUs from "../components/AboutUs";
import Banner from "../components/Banner";
import More from "../components/More";
import Payment from "../components/Payment";
import WorkProcess from "../components/WorkProcess";
import Donate from "../components/Donate";

const Home = () => {

    useEffect(() => {
        document.title = "Home | WarmUP Bangladesh";
    }, []);

    return (
        <div>
            <Banner></Banner>
            <AboutUs></AboutUs>
            <AboutContent></AboutContent>
            <WorkProcess></WorkProcess>
            <More></More>
            <Payment></Payment>
            <Donate></Donate>
        </div>
    );
};

export default Home;