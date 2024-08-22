import { Tilt } from "react-tilt";
function CardComponent(): JSX.Element {
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
