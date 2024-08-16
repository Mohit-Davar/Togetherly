import Navbar from "../Includes/Navbar";
import HeroSection from "./HeroSection";
import { useRef } from "react";
import gsap from "gsap";

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
            blur.current?.classList.add("hidden")
        } else {
            if (cursor.current) {
                cursor.current.classList.replace("size-20", "size-3");
                gsap.to(cursor.current, {
                    background: "#21d4fd",
                });
            }
            blur.current?.classList.remove("hidden")
        }
        let cursorRect = cursor.current?.getBoundingClientRect() as DOMRect;
        let blurRect = blur.current?.getBoundingClientRect() as DOMRect;
        gsap.to(cursor.current, {
            x: e.clientX - cursorRect.width / 2,
            y: e.clientY - cursorRect.height / 2,
            duration: 0.2,
            ease: "power1.out",
        });
        gsap.to(blur.current, {
            x: e.clientX - blurRect.width / 2,
            y: e.clientY - blurRect.height / 2,
            duration: 1,
            ease: "sine.out",
        });
    };
    return (
        <div className="mainContainer relative overflow-x-hidden" onMouseMove={handleCursor}>
            <div
                className="cursor size-3 rounded-full absolute bg-themeOne z-[999] pointer-events-none border-themeOne border-2"
                ref={cursor}
            ></div>
            <div
                className="cursor size-36 rounded-full absolute bg-themeOne z-[998] pointer-events-none blur-[100px] opacity-90"
                ref={blur}
            ></div>

            <Navbar />
            <main>
                <HeroSection />
            </main>
        </div>
    );
}

export default Home;
