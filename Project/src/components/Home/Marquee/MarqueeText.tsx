import React from "react";
import MarqueeCopy from "./MarqueeBlock";
import "./stroke.css"

export default function MarqueeText(): React.JSX.Element {
    const copy = [
        "Share Ideas",
        "Manage Assignments",
        "Teach Better",
        "Empower Teams",
    ];

    return (
        <section
            className="marqueeSection w-full whitespace-nowrap text-8xl font-alfaSlabOne text-black cursor-default gap-10 flex mb-20 marquee-text"
        >
            <MarqueeCopy array={copy} />
            <MarqueeCopy array={copy} />
        </section>
    );
}
