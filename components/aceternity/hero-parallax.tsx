"use client";

import React from "react";
import {
    motion,
    useScroll,
    useTransform,
    useSpring,
    MotionValue,
} from "framer-motion";
import Image from "next/image";

export const HeroParallax = ({
    products,
}: {
    products: {
        id: number;
        thumbnail: string;
    }[];
}) => {
    const firstRow = products.slice(0, 5);
    const secondRow = products.slice(5, 10);
    const thirdRow = products.slice(10, 15);
    const ref = React.useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });

    const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

    const translateX = useSpring(
        useTransform(scrollYProgress, [0, 1], [0, 1000]),
        springConfig
    );
    const translateXReverse = useSpring(
        useTransform(scrollYProgress, [0, 1], [0, -1000]),
        springConfig
    );
    const rotateX = useSpring(
        useTransform(scrollYProgress, [0, 0.2], [15, 0]),
        springConfig
    );
    const opacity = useSpring(
        useTransform(scrollYProgress, [0, 0.2], [0.2, 1]),
        springConfig
    );
    const rotateZ = useSpring(
        useTransform(scrollYProgress, [0, 0.2], [20, 0]),
        springConfig
    );
    const translateY = useSpring(
        useTransform(scrollYProgress, [0, 0.2], [-700, 500]),
        springConfig
    );
    return (
        <div
            ref={ref}
            // className="min-h-screen overflow-hidden antialiased relative flex flex-col self-auto [perspective:800px] [transform-style:preserve-3d]"
            className="h-[250vh] max-sm:h-[235vh] overflow-hidden antialiased relative flex flex-col self-auto [perspective:1200px] max-sm:[perspective:1600px] [transform-style:preserve-3d]"
        >
            <Header />
            <motion.div
                style={{
                    rotateX,
                    rotateZ,
                    translateY,
                    opacity,
                }}
                className=""
            >
                <motion.div className="flex flex-row-reverse space-x-reverse space-x-4 mb-4 ">
                    {firstRow.map((product) => (
                        <ProductCard
                            product={product}
                            translate={translateX}
                            key={product.id}
                        />
                    ))}
                </motion.div>
                <motion.div className="flex flex-row mb-4    space-x-4">
                    {secondRow.map((product) => (
                        <ProductCard
                            product={product}
                            translate={translateXReverse}
                            key={product.id}
                        />
                    ))}
                </motion.div>
                <motion.div className="flex flex-row-reverse space-x-reverse space-x-4">
                    {thirdRow.map((product) => (
                        <ProductCard
                            product={product}
                            translate={translateX}
                            key={product.id}
                        />
                    ))}
                </motion.div>
            </motion.div>
        </div>
    );
};

export const Header = () => {
    return (
        <div className="max-w-7xl  gap-4 flex flex-col relative mx-auto max-sm:pt-8 pt-40 px-4 w-full left-0 top-0">
            <h1 className="text-4xl max-sm:text-2xl font-bold dark:text-white">
                A Glimpse into the Apexia Experience
            </h1>
            <p className="max-w-2xl text-base max-sm:text-sm dark:text-neutral-200">
                Our photos offer a glimpse into the vibrant energy, collaboration, and maybe-slightly-chaotic fun that defines the Apexia experience
            </p>
        </div>
    );
};

export const ProductCard = ({
    product,
    translate,
}: {
    product: {
        id: number;
        thumbnail: string;
    };
    translate: MotionValue<number>;
}) => {
    return (
        <motion.div
            style={{
                x: translate,
            }}
            whileHover={{
                y: -20,
            }}
            key={product.id}
            className="group/product h-72 w-[26rem] relative flex-shrink-0"
        >
            <Image
                src={product.thumbnail}
                height="600"
                width="600"
                className="object-cover object-left-top absolute h-full w-full inset-0 rounded-lg border-[#333333] border-2 shadow-lg"
                alt={product.id.toString()}
            />
            <div className="absolute inset-0 h-full w-full opacity-0 group-hover/product:opacity-20 bg-black pointer-events-none"></div>
        </motion.div>
    );
};