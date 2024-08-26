import React from "react";
import gsap from "gsap";

const handleCursor = (
    e: React.MouseEvent<HTMLDivElement>,
    cursor: React.RefObject<HTMLDivElement>,
    blur: React.RefObject<HTMLDivElement>
) => {
    const hoveredElement = e.target as HTMLElement;
    if (!(cursor.current && blur.current)) return
    if (hoveredElement.tagName.toLowerCase() === "a") {
        cursor.current.classList.replace("size-3", "size-20");
        gsap.to(cursor.current, {
            backgroundColor: "transparent",
        });
        blur.current.classList.add("hidden");
    } else {
        cursor.current.classList.replace("size-20", "size-3");
        gsap.to(cursor.current, {
            background: "#21d4fd",
        });
        blur.current.classList.remove("hidden");
    }
    let cursorRect = cursor.current.getBoundingClientRect();
    let blurRect = blur.current.getBoundingClientRect();
    gsap.to(cursor.current, {
        x: e.pageX - cursorRect.width / 2,
        y: e.pageY - cursorRect.height / 2,
        duration: 0.2,
        ease: "power1.out",
    });
    gsap.to(blur.current, {
        x: e.pageX - blurRect.width / 2,
        y: e.pageY - blurRect.height / 2,
        duration: 1,
        ease: "sine.out",
    });
};

export default handleCursor;
