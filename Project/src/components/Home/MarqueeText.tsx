import React, { useEffect, useRef } from "react";
import gsap from "gsap";

interface MarqueeSpanProps {
    text: string;
}

interface MarqueeCopyProps {
    array: Array<string>;
}

const MarqueeSpan: React.FC<MarqueeSpanProps> = ({ text }) => {
    function handleColourChange(e: React.MouseEvent<HTMLSpanElement>) {
        const spanElement = e.currentTarget;
        spanElement.classList.replace("text-black", "text-themeOne");
        spanElement.style.webkitTextStroke = "2px transparent";
    }

    function handleColourReversal(e: React.MouseEvent<HTMLSpanElement>) {
        const spanElement = e.currentTarget;
        spanElement.classList.replace("text-themeOne", "text-black");
        spanElement.style.webkitTextStroke = "2px white";
    }

    return (
        <span
            onMouseEnter={handleColourChange}
            onMouseLeave={handleColourReversal}
            className="transition-all duration-300 text-black"
        >
            {text}
        </span>
    );
};

const MarqueeCopy: React.FC<MarqueeCopyProps> = ({ array }) => {
    return (
        <div className="marquee inline-block">
            <div className="flex space-x-8 justify-center tracking-wider">
                {array.map((span, index) => (
                    <MarqueeSpan key={index} text={span} />
                ))}
            </div>
        </div>
    );
};

function MarqueeText(): JSX.Element {
    const animationRef = useRef<gsap.core.Tween | null>(null);
    useEffect(() => {
        animationRef.current = gsap.to(".marquee", {
            x: "-100%",
            repeat: -1,
            duration: 15,
            ease: "none",
        });
        // Clean up the animation on unmount
        return () => {
            if (animationRef.current) {
                animationRef.current.kill();
            }
        };
    }, []);
    const copy = [
        "Share Ideas",
        "Manage Assignments",
        "Teach Better",
        "Empower Teams",
    ];
    return (
        <section
            className="marqueeSection w-full h-auto whitespace-nowrap text-8xl font-alfaSlabOne text-black cursor-default space-x-8"
            style={{ WebkitTextStroke: "2px white" }}
        >
            <MarqueeCopy array={copy} />
            <MarqueeCopy array={copy} />
        </section>
    );
}

export default MarqueeText;
