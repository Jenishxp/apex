import { cn } from "@/lib/utils";
import Marquee from "@/components/magicui/marquee";
import Image from "next/image";

const glimpseImage = [
    {
        id: 1,
        thumbnail:
            "/images/glimpse/01.webp",
    },
    {
        id: 2,
        thumbnail:
            "/images/glimpse/02.webp",
    },
    {
        id: 3,
        thumbnail:
            "/images/glimpse/03.webp",
    },
    {
        id: 4,
        thumbnail:
            "/images/glimpse/04.webp",
    },
    {
        id: 5,
        thumbnail:
            "/images/glimpse/05.webp",
    },
    {
        id: 6,
        thumbnail:
            "/images/glimpse/06.webp",
    },
    {
        id: 7,
        thumbnail:
            "/images/glimpse/07.webp",
    },
    {
        id: 8,
        thumbnail:
            "/images/glimpse/08.webp",
    },
    {
        id: 9,
        thumbnail:
            "/images/glimpse/09.webp",
    },
    {
        id: 10,
        thumbnail:
            "/images/glimpse/10.webp",
    },
    {
        id: 11,
        thumbnail:
            "/images/glimpse/11.webp",
    },
    {
        id: 12,
        thumbnail:
            "/images/glimpse/12.webp",
    },
    {
        id: 13,
        thumbnail:
            "/images/glimpse/13.webp",
    },
    {
        id: 14,
        thumbnail:
            "/images/glimpse/15.webp",
    },
    {
        id: 15,
        thumbnail:
            "/images/glimpse/14.webp",
    },
];


const firstRow = glimpseImage.slice(0, glimpseImage.length / 2);
const secondRow = glimpseImage.slice(glimpseImage.length / 2);

const GlimpseCard = ({ thumbnail }: { thumbnail: string }) => {
    return (
        <figure
            className={cn(
                "relative p-2 max-sm:p-1 bg-[#0d0d0d] border cursor-pointer overflow-hidden rounded-lg items-center flex"
            )}
        >
            <Image width={450} height={450} className="rounded-md max-sm:w-[300px]" src={thumbnail} alt="Images" />
        </figure>
    );
};

export default function EventGlimpse() {
    return (
        <div className="relative flex w-full flex-col items-center justify-center overflow-hidden rounded-lg  bg-background md:shadow-xl">
            <Marquee pauseOnHover className="[--duration:20s] max-sm:[--duration:40s]">
                {firstRow.map((image) => (
                    <GlimpseCard key={image.id} {...image} />
                ))}
            </Marquee>
            <Marquee reverse pauseOnHover className="[--duration:20s] max-sm:[--duration:40s]">
                {secondRow.map((image) => (
                    <GlimpseCard key={image.id} {...image} />
                ))}
            </Marquee>
            <div className="pointer-events-none absolute inset-y-0 max-sm:inset-y-2 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
            <div className="pointer-events-none absolute inset-y-0 max-sm:inset-y-2 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
        </div>
    );
}
