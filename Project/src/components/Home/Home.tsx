import Navbar from "../Includes/Navbar";
import HeroSection from "./HeroSection/HeroSection";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import MarqueeText from "./Marquee/MarqueeText";

function Home() {
    const cursor = useRef<HTMLDivElement>(null);
    const blur = useRef<HTMLDivElement>(null);

    const handleCursor = (e: React.MouseEvent<HTMLDivElement>) => {
        const hoveredElement = e.target as HTMLElement;
        if (hoveredElement.tagName.toLowerCase() === "a") {
            if (cursor.current) {
                cursor.current.classList.replace("size-3", "size-20");
                gsap.to(cursor.current, {
                    backgroundColor: "transparent",
                });
            }
            blur.current?.classList.add("hidden");
        } else {
            if (cursor.current) {
                cursor.current.classList.replace("size-20", "size-3");
                gsap.to(cursor.current, {
                    background: "#21d4fd",
                });
            }
            blur.current?.classList.remove("hidden");
        }
        let cursorRect = cursor.current?.getBoundingClientRect() as DOMRect;
        let blurRect = blur.current?.getBoundingClientRect() as DOMRect;
        gsap.to(cursor.current, {
            x: e.pageX - cursorRect.width / 2,
            y: e.pageY - cursorRect.height / 2,
            duration: 0.2,
            ease: "power1.out",
        });
        gsap.to(blur.current, {
            x: e.pageX - blurRect.width / 2,
            y: e.pageY - blurRect.height / 2,
            duration: 1,
            ease: "sine.out",
        });
    };
    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const mainElement = document.querySelector("main");

        if (mainElement) {
            gsap.to(mainElement, {
                background: "black",
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
            className="mainContainer relative overflow-x-hidden selection:bg-white selection:text-themeTwo"
            onMouseMove={handleCursor}
        >
            <div
                className="cursor size-3 rounded-full absolute bg-themeOne z-50 pointer-events-none border-themeOne border-2 transition-colors duration-500"
                ref={cursor}
                style={{ transition: "width .5s, height 0.5s" }}
            ></div>
            <div
                className="cursor size-52 rounded-full absolute bg-themeOne z-50 pointer-events-none blur-[100px] opacity-90"
                ref={blur}
            ></div>

            <Navbar />
            <main className="overflow-hidden min-h-[600vh]">
                <HeroSection />
                <MarqueeText />
            </main>
        </div>
    );
}

export default Home;
