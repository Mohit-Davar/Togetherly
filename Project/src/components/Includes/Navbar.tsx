import { faCopyright } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";
import gsap from "gsap";

export default function Navbar(): JSX.Element {
    const handleButtonEffect = () => {
        gsap.to(".getStarted div", {
            duration: 0.5,
            top: "0%",
            stagger: 0.1,
            scale: 1.5,
            ease: "ease.in" 
        });
    };
    const handleButtonLeave = () => {
        gsap.to(".getStarted div", {
            duration: 0.5,
            top: "100%",
            scale: 1,
        });
    };

    return (
        <nav className="flex justify-around items-center py-5 bg-transparent ">
            <section className="overflow-x-hidden w-[155px]">
                <FontAwesomeIcon icon={faCopyright} className="mr-2"/>
                <span>Connect Together</span>
                <span> by Togetherly</span>
            </section>
            <section>
                <NavLink to="/user/signup" component="button"
                    className="px-4 py-2 rounded-3xl bg-black text-white overflow-hidden ring-themeOne ring-[0.3rem] text-xl font-Poppins relative z-0  p-0 hover:text-black getStarted flex flex-col hover:ring-0 transition-all duration-500 outline-none focus:ring-0" 
                    onMouseEnter={handleButtonEffect}
                    onMouseLeave={handleButtonLeave}
                    onFocus={handleButtonEffect}
                    onBlur={handleButtonLeave}
                >
                    Get Started
                    <div className="w-full aspect-square bg-themeThree absolute rounded-full top-full left-0 -z-10 pointer-events-none"></div>
                    <div className="w-full aspect-square bg-themeTwo absolute rounded-full top-full left-0 -z-10 pointer-events-none"></div>
                    <div className="w-full aspect-square bg-themeOne absolute rounded-full top-full left-0 -z-10 pointer-events-none"></div>
                </NavLink>
            </section>
        </nav>
    );
}
