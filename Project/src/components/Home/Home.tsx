import React, { useRef } from "react";
import Navbar from "../Includes/Navbar";
import HeroSection from "./HeroSection/HeroSection";
import MarqueeText from "./Marquee/MarqueeText";
import TiltCards from "./TiltCards/TiltCards";
import handleCursor from "../../Utils/handleCursor";

function Home() {
    const cursor = useRef<HTMLDivElement>(null);
    const blur = useRef<HTMLDivElement>(null);

    return (
        <div
            className="mainContainer relative overflow-hidden selection:bg-white selection:text-themeTwo"
            onMouseMove={(e: React.MouseEvent<HTMLDivElement>) => {
                handleCursor(e, cursor, blur);
            }}
        >
            <aside className="cursor-backgrounds">
                <div
                    className="cursor size-3 rounded-full absolute bg-themeOne z-50 pointer-events-none border-themeOne border-2 transition-colors duration-500"
                    ref={cursor}
                    style={{ transition: "width .5s, height 0.5s" }}
                ></div>
                <div
                    className="cursor size-52 rounded-full absolute bg-themeOne z-50 pointer-events-none blur-[100px] opacity-90"
                    ref={blur}
                ></div>
            </aside>

            <Navbar />
            <main>
                <HeroSection />
                <MarqueeText />
                <TiltCards />
            </main>
            <div className="bg-transparent min-h-screen"></div>
            <footer className="min-h-screen w-screen bg-red-600 -z-20 fixed top-0"></footer>
        </div>
    );
}

export default Home;
