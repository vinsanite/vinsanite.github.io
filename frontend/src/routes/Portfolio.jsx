import React from "react"
import NavBar from "../components/NavBar.jsx"
import Footer from "../components/Footer.jsx"
import Background from "../components/Background.jsx"
import Rhythmix from "../assets/Rhythmix.png"
import Statefarm from "../assets/Statefarm.png"

const Portfolio = () => {
    const portfolio = [
        {
            img: Rhythmix,
            title: "Rhythmix",
            desc: " Rhythm Game created using the Unity Engine.",
            live: "https://salslinger.itch.io/rhythmix",
        },
        {
            img: Statefarm,
            title: "Statefarm Interactive Hazard Game",
            desc: " An interactive game using the Godot Engine. The game brings awareness to the player about hazards in homes.",
            live: "https://salslinger.itch.io/statefarm-interactive-hazard-game",
        }
    ]
    return (
        <>
            <NavBar />
            <section className="bg-primary px-5 text-[#181818] pb-10">
                <div className="container mx-auto">
                    <div className="relative flex justify-center items-center m-10 flex-wrap text-left">
                        <h1 className="text-4xl font-bold mb-4 hover:bg-gradient-to-r from-green-500 via-indigo-500 to-purple-500 hover:text-transparent hover:bg-clip-text hover:scale-110 duration-200">
                            PORTFOLIO
                        </h1>
                    </div>
                    <div>
                        <div className="mb-12" style={{ backgroundColor: '#F3F4F6' }}>
                            <div className='flex items-center'>
                                <img src={Rhythmix} alt="Rhythmix Image" className='w-1/2' />
                                <div className='w-1/2 pl-4'>
                                    <p>Rhythmix</p>
                                </div>
                            </div>
                        </div>
                        <div className="mb-12 bg-[#F3F4F6] hover:bg-gradient-to-r from-white via-red-550 to-red-500">
                            <div className='flex items-center'>
                                <div className='w-1/2 pr-4'>
                                    <p>State Farm Interactive Hazard Game</p>
                                </div>
                                <img src={Statefarm} alt="State Farm Image" className='w-1/2' />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
};

export default Portfolio;
