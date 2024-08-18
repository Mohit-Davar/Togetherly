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
            className="marqueeSection w-full whitespace-nowrap text-8xl font-alfaSlabOne text-black cursor-default gap-10 flex mb-20"
            style={{ WebkitTextStroke: "2px white" }}
        >
            <MarqueeCopy array={copy} />
            <MarqueeCopy array={copy} />
        </section>
    );
}
