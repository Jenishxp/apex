"use client";

import { Download } from "lucide-react";
import NextImage from "@/components/NextImage";
import BlurFade from "@/components/magicui/blur-fade";
import GradualSpacing from "@/components/magicui/gradual-spacing";
import { GlowingCard } from "@/components/aceternity/glowing-card";

const moblileWallpaperData = [
    {
        id: 1,
        ImageName: "Converge Mobile Wallpaper",
        ImageSRC: "/images/wallpapers/Converge Wallpaper [Mobile].png",
    },
    {
        id: 2,
        ImageName: "Webverse Mobile Wallpaper",
        ImageSRC: "/images/wallpapers/Webverse Wallpaper [Mobile].png",
    },
];

const desktopWallpaperData = [
    {
        id: 1,
        ImageName: "Converge Desktop Wallpaper",
        ImageSRC: "/images/wallpapers/Converge Wallpaper.png",
    },
    {
        id: 2,
        ImageName: "Webverse Desktop Wallpaper",
        ImageSRC: "/images/wallpapers/Webverse Wallpaper.png",
    },
];

export default function WallpaperPage() {
    return (
        <div className="pt-40 w-full max-w-[90vw] mx-auto min-h-screen gap-9 max-sm:gap-6 flex flex-col">
            <div className="flex flex-col gap-2 max-sm:items-center">
                <GradualSpacing
                    text="Discover vibrant wallpapers!"
                    className="text-4xl max-sm:text-2xl max-sm:tracking-tight font-semibold"
                />
                <BlurFade>
                    <h2 className="text-base max-sm:text-xs text-[#CCCCCC]">
                        Download our exclusive wallpapers for desktop and mobile.
                    </h2>
                </BlurFade>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 gap-8">
                {desktopWallpaperData.map((image) => (
                    <BlurFade
                        inView
                        key={image.id}
                        delay={0.25 + image.id * 0.05}
                    >
                        <GlowingCard borderRadius="rounded-lg" borderColor="border-[#ffffff]/[0.2] border-2">
                            <div className="flex flex-col cursor-pointer p-1 group">
                                <NextImage
                                    src={image.ImageSRC}
                                    alt={image.id.toString()}
                                    width={4096}
                                    height={4096}
                                    className="w-full object-cover rounded-md"
                                />
                            </div>
                            <div className="w-full flex justify-start px-2">
                                <a href={image.ImageSRC} download={image.ImageName} className="hover:underline flex gap-2 text-sm items-center text-[#cccccc]">
                                    Download
                                    <Download className="w-4" />
                                </a>
                            </div>
                        </GlowingCard>
                    </BlurFade>
                ))}
            </div>
            <div className="py-8 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 gap-8">
                {moblileWallpaperData.map((image) => (
                    <BlurFade
                        inView
                        key={image.id}
                        delay={0.25 + image.id * 0.05}
                    >
                        <GlowingCard borderRadius="rounded-lg" borderColor="border-[#ffffff]/[0.2] border-2">
                            <div className="flex flex-col cursor-pointer p-1 group">
                                <NextImage
                                    src={image.ImageSRC}
                                    alt={image.id.toString()}
                                    width={4096}
                                    height={4096}
                                    className="w-full object-cover rounded-md"
                                />
                            </div>
                            <div className="w-full flex justify-start px-2">
                                <a href={image.ImageSRC} download={image.ImageName} className="hover:underline flex gap-2 text-sm items-center text-[#cccccc]">
                                    Download
                                    <Download className="w-4" />
                                </a>
                            </div>
                        </GlowingCard>
                    </BlurFade>
                ))}
            </div>
        </div>
    );
}
