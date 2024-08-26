import MarqueeSpan from "./MarqueeSpan";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";

type MarqueeBlockProps = {
    array: Array<string>;
}

export default function MarqueeBlock({ array }: MarqueeBlockProps): React.JSX.Element {
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
            <div className="flex justify-center gap-10">
                {array.map((span, index) => (
                    <MarqueeSpan key={index} text={span} />
                ))}
            </div>
        </div>
    );
};
