import { useEffect, useRef } from "react";
import Parallax from "parallax-js";

export default function NotFound(): JSX.Element {
    const sceneRef = useRef(null);

    useEffect(() => {
        if (sceneRef.current) {
            const parallax = new Parallax(sceneRef.current);
            // Cleanup on unmount
            return () => {
                parallax.destroy();
            };
        }
    }, []);

    return (
        <main className="overflow-hidden min-h-screen flex justify-center items-center bg-themeOne">
            <div ref={sceneRef} className="relative">
                <div className="absolute inset-0 flex justify-center items-center" data-depth="4">
                    <div
                        className="size-60 rounded-full bg-green-500"
                        data-depth="2"
                    ></div>
                    <div
                        className="size-52 rounded-full bg-black left-60"
                        data-depth="6"
                    ></div>
                </div>
            </div>
        </main>
    );
}
