import MarqueeCopy from "./MarqueeBlock";

export default function MarqueeText(): JSX.Element {
    const copy = [
        "Share Ideas",
        "Manage Assignments",
        "Teach Better",
        "Empower Teams",
    ];

    return (
        <section
            className="marqueeSection w-full h-auto whitespace-nowrap text-8xl font-alfaSlabOne text-black cursor-default gap-5 flex"
            style={{ WebkitTextStroke: "2px white" }}
        >
            <MarqueeCopy array={copy} />
            <MarqueeCopy array={copy} />
        </section>
    );
}
