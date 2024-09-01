import React, { useRef, useLayoutEffect } from "react";
import Navbar from "../Includes/Navbar";
import HeroSection from "./HeroSection/HeroSection";
import MarqueeText from "./Marquee/MarqueeText";
import TiltCards from "./TiltCards/TiltCards";
import handleCursor from "../../Utils/handleCursor";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
// import SVG from "./SVG/SVG";


function Home(): React.JSX.Element {
    const cursor = useRef<HTMLDivElement>(null);
    const blur = useRef<HTMLDivElement>(null);
    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const mainElement = document.querySelector("main");

        if (mainElement) {
            gsap.to(mainElement, {
                backgroundColor: 'rgba(0, 0, 0, 1)',
                scrollTrigger: {
                    trigger: mainElement,
                    scroller: "body",
                    scrub: true,
                    start: "top -25%",
                    end: "top -110%",
                    invalidateOnRefresh: true,
                    refreshPriority: -1,
                },
            });
        }

        ScrollTrigger.refresh();

        return () => {
            ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
        };
    }, []);
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
            <main className="bg-black  bg-opacity-70">
                <HeroSection />
                <MarqueeText />
                <TiltCards />
                {/* <SVG /> */}
            </main>
        </div>
    );
}

export default Home;
