import "./stroke.css"
function HeroSection() {
    return (
        <section className="heroSection min-h-screen w-screen relative flex justify-center items-center">
            <video
                autoPlay
                loop
                muted
                src="Videos/MeetVideo.mp4"
                className="fixed object-cover -z-10"
            ></video>
            <div className="blackScreen bg-black opacity-40 w-full h-full absolute z-0"></div>
            <div className="text z-10 flex flex-col space-y-5">
                <h1 className={String.raw`text-white text-[clamp(2rem,6vw,100rem)] font-archivoBlack relative before:absolute before:text-black before:w-full before:h-full before:-top-2 before:-left-2 before:-z-10 heading cursor-default`}>
                    Learn. Connect. Share.
                </h1>
                <h2>Work Together with Togetherly</h2>
            </div>
        </section>
    );
}

export default HeroSection;
