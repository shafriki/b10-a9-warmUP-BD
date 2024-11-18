import AboutContent from "../components/AboutContent";
import AboutUs from "../components/AboutUs";
import Banner from "../components/Banner";
import More from "../components/More";
import WorkProcess from "../components/WorkProcess";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <AboutUs></AboutUs>
            <AboutContent></AboutContent>
            <WorkProcess></WorkProcess>
            <More></More>
        </div>
    );
};

export default Home;