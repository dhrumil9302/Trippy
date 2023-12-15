import  Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Trip from "../components/Trip";

function Service (){
    return(
        <>
        <Navbar/>
        <Hero
        cName="hero-mid" heroImg="/assets/night.jpg" title="Service" btnClass="hide"/>
        <Trip/>
        <Footer/>
        </>
    )
}

export default Service;