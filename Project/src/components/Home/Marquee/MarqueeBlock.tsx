import React, { useEffect, useRef } from "react";
import gsap from "gsap";

type MarqueeBlockProps = {
    quotes: string[];
}

export default function MarqueeBlock({ quotes }: MarqueeBlockProps): React.JSX.Element {
    const marqueeRef = useRef<HTMLDivElement>(null);
    const animationRef = useRef<gsap.core.Tween>();

    useEffect(() => {
        if (marqueeRef.current) {
            animationRef.current = gsap.to(marqueeRef.current, {
                xPercent: -100,
                repeat: -1,
                duration: 50,
                ease: "linear",
            });
        }

        return () => {
            if (animationRef.current) {
                animationRef.current.kill();
            }
        };
    }, []);
    return (
        <div className="marquee inline-block" ref={marqueeRef}>
            <ul className="flex justify-center gap-10">
                {quotes.map((quote, index) => (
                    <li key={index} className="hover:bg-gradient-to-r hover:from-themeOne hover:to-themeTwo hover:via-themeThree text-transparent bg-clip-text py-10 ">
                        {quote}
                    </li>
                ))}
            </ul>
        </div>
    );
};
