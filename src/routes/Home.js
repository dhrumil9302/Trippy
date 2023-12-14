import  Hero from "../components/Hero"
import Navbar from "../components/Navbar";

function Home (){
    return(
        <>
        <Navbar/>
        <Hero
        cName="hero"
        heroImg="/12.jpg"
        title="Your Journet Your story"
        text="Choose Your Favourite Destination."
        />

        </>
    )
}

export default Home;