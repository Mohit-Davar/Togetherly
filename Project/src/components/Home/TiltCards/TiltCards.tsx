import CardComponent from "./CardComponent";
import bgImageOne from "../../../../public/Images/GIrl-Online-Chat.jpg"


function TiltCards(): JSX.Element {
    return (
        <>
            <h3 className="text-7xl font-archivoBlack mb-5 mt-11 mx-auto w-fit capitalize bg-gradient-to-r from-themeOne to-themeTwo via-themeThree bg-clip-text text-transparent">Ab</h3>
            <section className="justify-center grid grid-cols-3 place-items-center px-20 gap-10">
                <CardComponent image={bgImageOne} />
                <CardComponent image={bgImageOne} />
                <CardComponent image={bgImageOne} />
            </section>
        </>
    );
}

export default TiltCards;
