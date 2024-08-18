import React from "react";
import gsap from "gsap";

function TiltCards() {
    return (
        <section className="bg-green-500 flex p-10">
            <article
                className="bg-red-500 w-96 h-[450px] origin-center"
                style={{ perspective: "100px", backfaceVisibility: "hidden" }}
                onMouseMove={(e: React.MouseEvent<HTMLDivElement>) => {
                    const element = e.target as HTMLDivElement;
                    const rect = element.getBoundingClientRect();
                    gsap.to(element, {
                        rotateY:
                            -(e.clientX - (rect.left + rect.width / 2)) * 0.2,
                        rotateX:
                            -(e.clientY - (rect.top + rect.height / 2)) * 0.2,

                        duration: 0.5,
                        ease: "elastic",
                    });
                }}
            ></article>
        </section>
    );
}

export default TiltCards;
