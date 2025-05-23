"use client";

import { cn } from "@/lib/utils";
import { motion, Variants } from "framer-motion";

interface WordPullUpProps {
    words: string;
    delayMultiple?: number;
    wrapperFramerProps?: Variants;
    framerProps?: Variants;
    className?: string;
}

export default function WordPullUp({
    words,
    wrapperFramerProps = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
    },
    framerProps = {
        hidden: { y: 20, opacity: 0 },
        show: { y: 0, opacity: 1 },
    },
    className,
}: WordPullUpProps) {
    return (
        <motion.p
            variants={wrapperFramerProps}
            initial="hidden"
            animate="show"
            className={cn(
                "font-display tracking-[-0.02em] drop-shadow-sm",
                className,
            )}
        >
            {words.split(" ").map((word, i) => (
                <motion.span
                    key={i}
                    variants={framerProps}
                    style={{ display: "inline-block", paddingRight: "8px" }}
                >
                    {word === "" ? <span>&nbsp;</span> : word}
                </motion.span>
            ))}
        </motion.p>
    );
}
