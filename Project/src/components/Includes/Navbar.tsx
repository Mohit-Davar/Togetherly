import React, { useLayoutEffect } from "react";
import { faCopyright } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink, NavLinkProps } from "react-router-dom";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";

type NavButtonProps = {
    link: string
    name: string
}
function NavButtons({ link, name }: NavButtonProps): React.JSX.Element {
    return (
        <NavLink
            to={link}
            className={({ isActive }: NavLinkProps) =>
                `${isActive ? "before:scale-y-100 before:origin-bottom text-themeOne ring-4" : "text-white before:origin-top before:scale-y-0 ring-0"
                } px-2 py-1 sm:px-4 sm:py-2 outline-none focus:outline-2 focus:outline-themeTwo rounded-3xl capitalize font-Poppins font-bold transition-all duration-300 w-fit relative overflow-hidden before:content-[''] before:w-full before:h-full before:absolute before:top-0 before:left-0 before:bg-gradient-to-br before:from-themeTwo before:via-themeThree before:to-themeTwo before:-z-10 before:rounded-3xl before:scale-y-0 before:transition-transform before:duration-300 hover:before:scale-y-100 hover:before:origin-bottom hover:text-themeOne focus:before:scale-y-100 focus:before:origin-bottom focus:text-themeOne hover:ring-4 focus:ring-4 hover:before:rounded-none focus:before:rounded-none ring-themeOne`
            }
        >
            {name}
        </NavLink>
    )
}
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
    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const navElement = document.querySelector("nav");

        if (navElement) {
            gsap.to(navElement, {
                backgroundColor: 'rgba(0, 0, 0, 1)',
                scrollTrigger: {
                    trigger: navElement,
                    scroller: "body",
                    scrub: true,
                    start: "top -10%",
                    end: "top -30%",
                    invalidateOnRefresh: true,
                    refreshPriority: -1,
                },
            });
        }

        ScrollTrigger.refresh();

        return () => {
            ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
        };
    }, []);
    return (
        <nav
            className="fixed w-full z-40 flex justify-around px-5 items-center py-10"
        >
            <section className="Logo overflow-hidden group font-archivoBlack flex items-center">
                <FontAwesomeIcon
                    icon={faCopyright}
                    className="group-hover:rotate-[360deg] transition-all duration-300 text-themeTwo"
                />
                <NavLink
                    to=""
                    component="button"
                    className="text-base sm:text-xl outline-none px-1 py-1 relative before:w-full before:h-full before:top-0 before:left-0 before:content-[attr(data-before)] before:px-1 before:py-1 before:content-center before:absolute group-hover:before:translate-x-0 focus:before:translate-x-0 before:translate-x-full before:transition-transform duration-300 before:bg-gradient-to-br before:from-themeOne before:via-themeTwo before:to-themeOne before:bg-clip-text before:text-transparent group/button"
                    data-before="#Connect"
                >
                    <span className="relative group-hover:-left-full group-focus/button:-left-full transition-all left-0 pointer-events-none duration-300 group-hover:opacity-0 group-focus/button:opacity-0 bg-gradient-to-br from-themeOne via-themeTwo to-themeOne bg-clip-text text-transparent text-base sm:text-xl ">
                        Togetherly
                    </span>
                </NavLink>
            </section>
            <section className="NavItems flex justify-between items-center gap-5">
                <NavButtons link="" name="Home" />
                <NavButtons link="about" name="About Us" />
                <NavButtons link="contact" name="Contact Us" />
            </section>
            <section className="SignUpButton">
                <NavLink
                    to="/user/signup"
                    component="button"
                    className="select-none px-2 py-1 sm:px-4 sm:py-2 rounded-3xl backdrop-blur-xl bg-black/80 text-themeTwo overflow-hidden ring-themeTwo ring-[0.3rem] font-Poppins relative z-0  p-0 hover:text-black focus:text-black getStarted flex flex-col hover:ring-0 transition-all duration-500 outline-none focus:ring-0 md:text-lg ml-3"
                    onMouseOver={handleButtonEffect}
                    onMouseOut={handleButtonLeave}
                    onFocus={handleButtonEffect}
                    onBlur={handleButtonLeave}
                >
                    Get Started
                    <div className="w-full aspect-square bg-themeThree absolute rounded-full top-full left-0 -z-10 pointer-events-none"></div>
                    <div className="w-full aspect-square bg-themeOne absolute rounded-full top-full left-0 -z-10 pointer-events-none"></div>
                    <div className="w-full aspect-square bg-themeTwo absolute rounded-full top-full left-0 -z-10 pointer-events-none"></div>
                </NavLink>
            </section>
        </nav>
    );
}