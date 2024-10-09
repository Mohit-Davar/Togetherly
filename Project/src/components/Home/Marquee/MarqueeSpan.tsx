import "./stroke.css";
export default function MarqueeSpan({ text }: { text: string }) {
    return (
        <span className="transition-all marquee hover:bg-gradient-to-r hover:from-themeOne hover:to-themeTwo hover:via-themeThree text-transparent bg-clip-text py-10 ">
            {text}
        </span>
    );
}
