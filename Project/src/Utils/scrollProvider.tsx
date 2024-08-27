import React, { useRef } from 'react';
import { LocomotiveScrollProvider } from 'react-locomotive-scroll';

export default function ScrollProvider({ children }: { children: React.ReactNode }): React.JSX.Element {
    const containerRef = useRef<HTMLDivElement>(null);

    return (
        <LocomotiveScrollProvider
            options={{ smooth: true }}
            containerRef={containerRef}
        >
            <div data-scroll-container ref={containerRef}>
                {children}
            </div>
        </LocomotiveScrollProvider>
    );
};

