import Case from "./Components/Case";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Hero from "./Components/Hero";
import Icons from "./Components/Icons";
import Services from "./Components/Services";
import Team from "./Components/Team";
import Testimonials from "./Components/Testimonials";
import Things from "./Components/Things";
import Working from "./Components/Working";


export default function Home() {
  return (
    <div className="md:px-20 md:py-6 px-12 ">
        <Hero/>
        <Icons/>
        <Services/>
        <Things/>
        <Case/>
        <Working/>
        <Team/>
        <Testimonials/>
        <Contact/>
        <Footer/>
    </div>
  );
}

