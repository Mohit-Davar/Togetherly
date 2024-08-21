import { Tilt } from "react-tilt";
// import React, { useRef } from "react";
// import gsap from "gsap";
// interface coordinates {
//     x: number;
//     y: number;
// }
function CardComponent(): JSX.Element {
    // const cardRef = useRef<HTMLDivElement>(null);
    // const cardRefRect = cardRef.current?.getBoundingClientRect();
    // const mouseCoordinates: coordinates = { x: 0, y: 0 };
    // const cardCenter: coordinates = { x: 0, y: 0 };
    // if (cardRefRect) {
    //     cardCenter.x = cardRefRect.left + cardRefRect.width / 2;
    //     cardCenter.y = cardRefRect.top + cardRefRect.height / 2;
    // }

    // function tiltMovement(e: React.MouseEvent<HTMLDivElement>) {
    //     mouseCoordinates.x = e.clientX;
    //     mouseCoordinates.y = e.clientY;

    //     const distFromCenterX = mouseCoordinates.x - cardCenter.x;
    //     const distFromCenterY = mouseCoordinates.y - cardCenter.y;

    //     const tiltx = distFromCenterY / cardCenter.y;
    //     const tilty = distFromCenterX / cardCenter.x;

    //     const radius = Math.sqrt(Math.pow(tiltx, 2) + Math.pow(tilty, 2));
    //     const degree = radius * 20;
    //     gsap.to(cardRef.current, {
    //         rotateX: tiltx * degree * 1000,
    //         rotateY: tilty * degree * 1000,
    //         ease: "expo.out",
    //     });
    // }

    const defaultOptions = {
        reverse: false, // reverse the tilt direction
        max: 20, // max tilt rotation (degrees)
        perspective: 1500, // Transform perspective, the lower the more extreme the tilt gets.
        scale: 1, // 2 = 200%, 1.5 = 150%, etc..
        speed: 100, // Speed of the enter/exit transition
        transition: true, // Set a transition on enter/exit.
        axis: null, // What axis should be disabled. Can be X or Y.
        reset: true, // If the tilt effect has to be reset on exit.
        easing: "cubic-bezier(.03,.98,.52,.99)", // Easing on enter/exit.
    };
    return (
        <Tilt options={defaultOptions}>
            <article className="bg-red-500 w-96 h-[450px] origin-center"></article>
        </Tilt>
    );
}

export default CardComponent;
