import Footer from "../components/Footer";
import  Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import ContactForm from "../components/ContactForm";

function Contact (){
    return(
        <>
        <Navbar/>
        <Hero
        cName="hero-mid" heroImg="/assets/2.jpg" title="Contact" btnClass="hide"/>
       <ContactForm/>
        <Footer/>
        </>
    )
}

export default Contact;