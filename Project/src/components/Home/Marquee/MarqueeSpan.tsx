interface MarqueeSpanProps {
    text: string;
}
const MarqueeSpan: React.FC<MarqueeSpanProps> = ({ text }) => {
    const handleColourChange = (e: React.MouseEvent<HTMLSpanElement>) => {
        const spanElement = e.currentTarget;
        spanElement.classList.replace("text-black", "text-themeOne");
        spanElement.style.webkitTextStroke = "2px transparent";
    };

    const handleColourReversal = (e: React.MouseEvent<HTMLSpanElement>) => {
        const spanElement = e.currentTarget;
        spanElement.classList.replace("text-themeOne", "text-black");
        spanElement.style.webkitTextStroke = "2px white";
    };

    return (
        <span
            onMouseEnter={handleColourChange}
            onMouseLeave={handleColourReversal}
            className="transition-all duration-300 text-black "
        >
            {text}
        </span>
    );
};
export default MarqueeSpan;
