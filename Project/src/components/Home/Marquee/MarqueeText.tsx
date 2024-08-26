import React from "react";
import MarqueeBlock from "./MarqueeBlock";
import "./stroke.css"

export default function MarqueeText(): React.JSX.Element {
    const Quotes = [
        "Share Ideas",
        "Manage Assignments",
        "Teach Better",
        "Empower Teams",
    ];

    return (
        <section
            className="marqueeSection w-full whitespace-nowrap text-8xl font-alfaSlabOne text-black cursor-default gap-10 flex mb-20 marquee-text"
        >
            <MarqueeBlock quotes={Quotes} />
            <MarqueeBlock quotes={Quotes} />
        </section>
    );
}
