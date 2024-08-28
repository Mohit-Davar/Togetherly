import CardComponent from "./CardComponent";
import bgImageOne from "../../../../public/Images/GirlOnlineClass.jpg"


function TiltCards(): JSX.Element {
    return (
        <section className="flex gap-10 justify-center items-center flex-wrap">
            <CardComponent image={bgImageOne} />
            <CardComponent image={bgImageOne} />
            <CardComponent image={bgImageOne} />
        </section>
    );
}

export default TiltCards;
