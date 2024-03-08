import React from "react";
import NavBar from "../components/NavBar.jsx";
import Footer from "../components/Footer.jsx";
import Background from "../components/Background.jsx";
import Rhythmix from "../assets/Rhythmix.png";
import Statefarm from "../assets/Statefarm.png";

const Portfolio = () => {
    const portfolio = [
        {
            img: Rhythmix,
            title: "Rhythmix",
            desc: " Rhythm Game created using the Unity Engine.",
            live: "https://salslinger.itch.io/rhythmix",
            hoverClass: "hover:bg-gradient-to-t from-[#F6CC78] via-[#EC736A] to-[#5C199A] hover:text-white",
        },
        {
            img: Statefarm,
            title: "Statefarm Interactive Hazard Game",
            desc: " An interactive game using the Godot Engine. The game brings awareness to the player about hazards in homes.",
            live: "https://salslinger.itch.io/statefarm-interactive-hazard-game",
            hoverClass: "hover:bg-gradient-to-r from-white via-red-600 to-[#D33D33]",
        },
    ];

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
                        {portfolio.map((item, index) => (
                            <a key={index} href={item.live} target="_blank" rel="noopener noreferrer">
                                <div className={`mb-12 bg-[#F3F4F6] ${item.hoverClass}`}>
                                    <div className='flex items-center'>
                                    {index % 2 === 0 ? (
                                            <>
                                                <img src={item.img} alt={item.title} className='w-1/2' />
                                                <div className='w-1/2 pl-4'>
                                                    <p>{item.title}</p>
                                                </div>
                                            </>
                                        ) : (
                                            <>
                                                <div className='w-1/2 pr-4'>
                                                    <p>{item.title}</p>
                                                </div>
                                                <img src={item.img} alt={item.title} className='w-1/2' />
                                            </>
                                        )}

                                    </div>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
};

export default Portfolio;
