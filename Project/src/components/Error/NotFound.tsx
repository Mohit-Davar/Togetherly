import { useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";

export default function NotFound(): JSX.Element {
    const lightRef = useRef<HTMLDivElement>(null);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (lightRef.current) {
            const rect = lightRef.current.getBoundingClientRect();
            console.log(rect);
            gsap.to(lightRef.current, {
                x: e.clientX - rect.width / 2,
                y: e.clientY - rect.height / 2,
                duration: 0.5,
                delay: 0.2,
            });
        }
    };

    return (
        <main
            className="cursor-default relative flex justify-center items-center flex-col min-h-screen bg-black overflow-hidden"
            onMouseMove={handleMouseMove}
        >
            <div
                className="blur-3xl z-10 bg-white size-56 absolute top-0 left-0 light rounded-full"
                ref={lightRef}
            >
                
            </div>
            <section className="z-20 text-center">
                <h1 className="uppercase text-[clamp(3rem,5vw,100rem)]">
                    Ooh Shit!
                </h1>
                <h2 className="uppercase text-[clamp(2rem,2vw,10rem)]">
                    You seem to have stumbled off the path.
                </h2>
                <p>
                    Unfortunately, the page does not exist. Perhaps you should
                    head
                    <span className="cursor-pointer">
                        <Link to="/"> Home?</Link>
                    </span>
                </p>
            </section>
            <img src="Images/Skeleton.png" alt="Logo" className="select-none"/>
        </main>
    );
}
