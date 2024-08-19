interface MarqueeSpanProps {
    text: string;
}
import "./stroke.css";
const MarqueeSpan: React.FC<MarqueeSpanProps> = ({ text }) => {
    return (
        <span className="transition-all hover:bg-gradient-to-r hover:from-themeOne hover:to-themeTwo hover:via-themeThree text-transparent bg-clip-text py-10 ">
            {text}
        </span>
    );
};
export default MarqueeSpan;
