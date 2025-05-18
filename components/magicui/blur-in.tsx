"use client";

import { ForwardRefComponent, HTMLMotionProps, motion } from "framer-motion";
import { createElement } from "react";
import { cn } from "@/lib/utils";

type ElementType = "h1" | "h2" | "h3" | "h4" | "p";

interface BlurInProps {
    word: string;
    className?: string;
    variant?: {
        hidden: { filter: string; opacity: number };
        visible: { filter: string; opacity: number };
    };
    duration?: number;
    as?: ElementType;
}

const BlurIn = ({
    word,
    className,
    variant,
    duration = 1,
    as = "h1"
}: BlurInProps) => {
    const defaultVariants = {
        hidden: { filter: "blur(10px)", opacity: 0 },
        visible: { filter: "blur(0px)", opacity: 1 },
    };
    const combinedVariants = variant || defaultVariants;

    const MotionComponent = motion[as] as ForwardRefComponent<HTMLElement, HTMLMotionProps<ElementType>>;

    return (
        <MotionComponent
            initial="hidden"
            animate="visible"
            transition={{ duration }}
            variants={combinedVariants}
            className={cn(
                className,
                "font-display tracking-[-0.02em] drop-shadow-sm",
            )}
        >
            {word}
        </MotionComponent>
    );
};

export default BlurIn;