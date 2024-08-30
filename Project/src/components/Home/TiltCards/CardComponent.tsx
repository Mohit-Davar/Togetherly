import { Tilt } from "react-tilt";
type CardComponentProps = {
    image: string
}
export default function CardComponent({ image }: CardComponentProps): JSX.Element {
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
            <article className="h-[550px]">
                <img src={image} alt="Options" className="w-full h-full object-cover object-right  " />
            </article>
        </Tilt>
    );
}
