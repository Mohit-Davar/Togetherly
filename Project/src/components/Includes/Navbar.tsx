import React from "react";
import { faCopyright } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";
import gsap from "gsap";

export default function Navbar(): React.JSX.Element {
    const handleButtonEffect = () => {
        gsap.to(".getStarted div", {
            duration: 0.5,
            top: "0%",
            stagger: 0.1,
            scale: 1.5,
            ease: "ease.in",
        });
    };
    const handleButtonLeave = () => {
        gsap.to(".getStarted div", {
            top: "100%",
            scale: 1,
            stagger: -0.1,
            duration: 0.5,
        });
    };

    return (
        <nav
            className="absolute w-full z-40 flex justify-between sm:px-10 px-5 items-center py-10 bg-transparent"
        >
            <section className="Logo overflow-hidden group font-archivoBlack flex items-center">
                <FontAwesomeIcon
                    icon={faCopyright}
                    className="group-hover:rotate-[360deg] transition-all duration-300 text-themeOne"
                />
                <NavLink
                    to=""
                    component="button"
                    className="outline-none px-1 py-1 relative before:w-full before:h-full before:top-0 before:left-0 before:content-[attr(data-before)] before:px-1 before:py-1 before:content-center before:absolute group-hover:before:translate-x-0 focus:before:translate-x-0 before:translate-x-full before:transition-transform duration-300 before:bg-gradient-to-br before:from-themeOne before:via-themeThree before:to-themeTwo before:bg-clip-text before:text-transparent group/button"
                    data-before="#Connect"
                >
                    <span className="relative group-hover:-left-full group-focus/button:-left-full transition-all left-0 pointer-events-none duration-300 group-hover:opacity-0 group-focus/button:opacity-0 bg-gradient-to-br from-themeOne via-themeThree to-themeTwo bg-clip-text text-transparent text-base sm:text-xl ">
                        Togetherly
                    </span>
                </NavLink>
            </section>
            <section className="SignUpBttn">
                <NavLink
                    to="/user/signup"
                    component="button"
                    className="select-none px-2 py-1 sm:px-4 sm:py-2 rounded-3xl bg-black text-white overflow-hidden ring-themeOne ring-[0.3rem] font-Poppins relative z-0  p-0 hover:text-black getStarted flex flex-col hover:ring-0 transition-all duration-500 outline-none focus:ring-0 text-sm md:text-base"
                    onMouseOver={handleButtonEffect}
                    onMouseOut={handleButtonLeave}
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
