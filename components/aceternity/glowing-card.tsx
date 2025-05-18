"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { useMotionValue } from "framer-motion";
import { useMotionTemplate, motion } from "framer-motion";

export const GlowingCard = ({
    className, borderColor, borderRadius, children
}: {
    className?: string;
    borderColor?: string;
    borderRadius?: string;
    children: React.ReactNode;
}) => {
    let mouseX = useMotionValue(0);
    let mouseY = useMotionValue(0);

    function onMouseMove({ currentTarget, clientX, clientY }: any) {
        let { left, top } = currentTarget.getBoundingClientRect();
        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
    }

    return (
        <div
            className={cn(
                "w-full relative",
                className
            )}
        >
            <div
                onMouseMove={onMouseMove}
                className={cn("group/card relative overflow-hidden h-full", borderRadius)}
            >
                <CardPattern mouseX={mouseX} mouseY={mouseY} />
                <div className={cn("w-full h-full z-20 border-2 border-transparent/50", borderRadius, borderColor)}>
                    <div className={cn("relative bg-[#0A0A0A]/[0.85] h-full z-10", borderRadius)}>
                        <div className={cn("p-2", borderRadius)}>
                            {children}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export function CardPattern({ mouseX, mouseY }: any) {
    let maskImage = useMotionTemplate`radial-gradient(250px at ${mouseX}px ${mouseY}px, white, transparent)`;
    let style = { maskImage, WebkitMaskImage: maskImage };

    return (
        <div className="pointer-events-none">
            <div className="absolute inset-0 group-hover/card:opacity-50" />
            <motion.div
                style={style}
                className="absolute inset-0 bg-white opacity-0 group-hover/card:opacity-100 backdrop-blur-3xl transition duration-500"
            />
        </div>
    );
}
