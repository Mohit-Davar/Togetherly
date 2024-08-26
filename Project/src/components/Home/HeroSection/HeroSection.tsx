import React from "react";
import "./stroke.css";

export default function HeroSection(): React.JSX.Element {
    return (
        <section className="heroSection h-screen w-full relative flex justify-center items-center">
            <video
                autoPlay
                loop
                muted
                src="Videos/MeetVideo.mp4"
                className="fixed object-cover -z-30"
            ></video>
            <div className="text flex flex-col space-y-5 justify-center items-center cursor-default z-0">
                <h1
                    className={String.raw`text-white text-[clamp(2rem,6vw,100rem)] font-archivoBlack relative before:absolute before:text-black before:w-full before:h-full before:-top-1 before:-left-1 before:-z-10 heading`}
                >
                    Learn. Connect. Share.
                </h1>
                <h2 className="text-white font-archivoBlack text-3xl">
                    Work Together with Togetherly!
                </h2>
                <p className="text-center text-white text-sm font-Poppins w-[clamp(250px,50vw,100rem)] break-words tracking-widest">
                    Elevate your workspace or classroom experience with
                    Togetherly, a comprehensive platform designed to bring teams
                    together and enhance learning. Whether you're managing a
                    project or leading a classroom, Togetherly provides the
                    tools you need to succeed.
                </p>
            </div>
        </section>
    );
}
