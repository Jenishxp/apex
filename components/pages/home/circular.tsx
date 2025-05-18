import Link from "next/link";
import Image from "next/image";
import OrbitingCircles from "@/components/magicui/orbiting-circles";
import { useState, useEffect } from "react";

export function OrbitingCirclesDemo() {
    const [windowWidth, setWindowWidth] = useState<number | null>(null);

    useEffect(() => {
        // Only run this effect client-side
        if (typeof window !== 'undefined') {
            const handleResize = () => setWindowWidth(window.innerWidth);
            window.addEventListener('resize', handleResize);

            // Call the handleResize function immediately
            handleResize();

            // Cleanup the event listener on component unmount
            return () => window.removeEventListener('resize', handleResize);
        }
    }, []);
    return (
        <div className="relative flex h-full w-full flex-col items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="186" height="168" viewBox="0 0 186 168" fill="none" className="w-36 max-sm:w-16">
                <g filter="url(#filter0_di_280_380)">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M160.5 142.359L121.45 74.7229L116.029 84.3468L144.949 134.219H117.873L95.299 95.2144L109.071 72.3474L109.075 72.3538L114.535 62.7466L90 20.2499L65.6302 62.4596L71.518 72.8179L71.5372 72.7846L78.0171 84.2888L83.4438 74.7419L76.9026 63.4565L76.9109 63.4422L76.9042 63.4306L90.3485 40.08L103.802 63.261L90.3539 87.0326L90.3592 87.0415L84.92 96.5436L84.9337 96.5681L63.2775 134.219H36.201L64.5901 84.8625L58.7164 74.4346L19.5 142.359H68.8787L90 105.904L111.121 142.359H160.5Z" fill="url(#paint0_linear_280_380)" />
                </g>
                <defs>
                    <filter id="filter0_di_280_380" x="0" y="0.749878" width="186" height="167.109" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                        <feOffset dx="3" dy="3" />
                        <feGaussianBlur stdDeviation="11.25" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix type="matrix" values="0 0 0 0 0.0391668 0 0 0 0 0.4235 0 0 0 0 1 0 0 0 0.05 0" />
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_280_380" />
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_280_380" result="shape" />
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                        <feOffset dx="6" dy="3" />
                        <feGaussianBlur stdDeviation="7.5" />
                        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0" />
                        <feBlend mode="normal" in2="shape" result="effect2_innerShadow_280_380" />
                    </filter>
                    <linearGradient id="paint0_linear_280_380" x1="19.5" y1="142.5" x2="177" y2="46.4999" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#0D0D0D" />
                        <stop offset="1" stop-color="#0A6CFF" />
                    </linearGradient>
                </defs>
            </svg>
            {windowWidth && windowWidth > 1024 ? (<>
                {/* 1st Circle */}
                <OrbitingCircles
                    className="size-[64px] border-none bg-transparent"
                    duration={30}
                    delay={30}
                    radius={100}
                >
                    <Link href="https://leetcode.com/" target="_blank">
                        <Image
                            src="/home/LeetCode Logo [DSA].png"
                            alt="LeetCode Logo"
                            width={96}
                            height={96}
                        />
                    </Link>
                </OrbitingCircles>
                <OrbitingCircles
                    className="size-[64px] border-none bg-transparent"
                    duration={30}
                    delay={20}
                    radius={100}
                >
                    <Link href="https://www.figma.com/" target="_blank">
                        <Image
                            src="/home/Figma Logo [Design].png"
                            alt="Figma Logo"
                            width={96}
                            height={96}
                        />
                    </Link>
                </OrbitingCircles>
                <OrbitingCircles
                    className="size-[64px] border-none bg-transparent"
                    duration={30}
                    delay={10}
                    radius={100}
                >
                    <Link href="https://ethereum.org/" target="_blank">
                        <Image
                            src="/home/Ethereum Logo [Web3].png"
                            alt="Ethereum Logo"
                            width={96}
                            height={96}
                        />
                    </Link>
                </OrbitingCircles>
                {/* 2nd Circle */}
                <OrbitingCircles
                    className="size-[64px] border-none bg-transparent"
                    duration={30}
                    delay={5}
                    radius={150}
                    reverse
                >
                    <Link href="https://github.com/" target="_blank">
                        <Image
                            src="/home/GitHub Logo [Open Source].png"
                            alt="GitHub Logo"
                            width={96}
                            height={96}
                        />
                    </Link>
                </OrbitingCircles>
                <OrbitingCircles
                    className="size-[64px] border-none bg-transparent"
                    duration={30}
                    delay={15}
                    radius={150}
                    reverse
                >
                    <Link href="https://code.visualstudio.com/" target="_blank">
                        <Image
                            src="/home/VS Code.png"
                            alt="Vs Code Logo"
                            width={96}
                            height={96}
                        />
                    </Link>
                </OrbitingCircles>
                <OrbitingCircles
                    className="size-[64px] border-none bg-transparent"
                    duration={30}
                    delay={25}
                    radius={150}
                    reverse
                >
                    <Link href="https://openai.com/" target="_blank">
                        <Image
                            src="/home/ChatGPT Logo [AI].png"
                            alt="ChatGPT Logo"
                            width={96}
                            height={96}
                        />
                    </Link>
                </OrbitingCircles>
                {/* 3rd Circle */}
                <OrbitingCircles
                    className="size-[64px] border-none bg-transparent"
                    duration={30}
                    delay={10}
                    radius={200}
                    reverse
                >
                    <Link href="https://www.adobe.com/" target="_blank">
                        <Image
                            src="/home/Adobe Logo [Production].png"
                            alt="GitHub Logo"
                            width={96}
                            height={96}
                        />
                    </Link>
                </OrbitingCircles>
                <OrbitingCircles
                    className="size-[64px] border-none bg-transparent"
                    duration={30}
                    delay={20}
                    radius={200}
                    reverse
                >
                    <Link href="https://www.framer.com/" target="_blank">
                        <Image
                            src="/home/Framer Logo [No Code].png"
                            alt="Framer Logo"
                            width={96}
                            height={96}
                        />
                    </Link>
                </OrbitingCircles>
                <OrbitingCircles
                    className="size-[64px] border-none bg-transparent"
                    duration={30}
                    delay={30}
                    radius={200}
                    reverse
                >
                    <Link href="https://x.com/" target="_blank">
                        <Image
                            src="/home/X Logo [Socials].png"
                            alt="X Logo"
                            width={96}
                            height={96}
                        />
                    </Link>
                </OrbitingCircles>
            </>) : (<>
                {/* 1st Circle */}
                <OrbitingCircles
                    className="size-[40px] border-none bg-transparent"
                    duration={30}
                    delay={30}
                    radius={50}
                >
                    <Link href="https://leetcode.com/" target="_blank">
                        <Image
                            src="/home/LeetCode Logo [DSA].png"
                            alt="LeetCode Logo"
                            width={96}
                            height={96}
                        />
                    </Link>
                </OrbitingCircles>
                <OrbitingCircles
                    className="size-[40px] border-none bg-transparent"
                    duration={30}
                    delay={20}
                    radius={50}
                >
                    <Link href="https://www.figma.com/" target="_blank">
                        <Image
                            src="/home/Figma Logo [Design].png"
                            alt="Figma Logo"
                            width={96}
                            height={96}
                        />
                    </Link>
                </OrbitingCircles>
                <OrbitingCircles
                    className="size-[40px] border-none bg-transparent"
                    duration={30}
                    delay={10}
                    radius={50}
                >
                    <Link href="https://ethereum.org/" target="_blank">
                        <Image
                            src="/home/Ethereum Logo [Web3].png"
                            alt="Ethereum Logo"
                            width={96}
                            height={96}
                        />
                    </Link>
                </OrbitingCircles>
                {/* 2nd Circle */}
                <OrbitingCircles
                    className="size-[40px] border-none bg-transparent"
                    duration={30}
                    delay={5}
                    radius={100}
                    reverse
                >
                    <Link href="https://github.com/" target="_blank">
                        <Image
                            src="/home/GitHub Logo [Open Source].png"
                            alt="GitHub Logo"
                            width={96}
                            height={96}
                        />
                    </Link>
                </OrbitingCircles>
                <OrbitingCircles
                    className="size-[40px] border-none bg-transparent"
                    duration={30}
                    delay={15}
                    radius={100}
                    reverse
                >
                    <Link href="https://code.visualstudio.com/" target="_blank">
                        <Image
                            src="/home/VS Code.png"
                            alt="VS Code Logo"
                            width={96}
                            height={96}
                        />
                    </Link>
                </OrbitingCircles>
                <OrbitingCircles
                    className="size-[40px] border-none bg-transparent"
                    duration={30}
                    delay={25}
                    radius={100}
                    reverse
                >
                    <Link href="https://openai.com/" target="_blank">
                        <Image
                            src="/home/ChatGPT Logo [AI].png"
                            alt="ChatGPT Logo"
                            width={96}
                            height={96}
                        />
                    </Link>
                </OrbitingCircles>
                {/* 3rd Circle */}
                <OrbitingCircles
                    className="size-[40px] border-none bg-transparent"
                    duration={30}
                    delay={10}
                    radius={150}
                    reverse
                >
                    <Link href="https://www.adobe.com/" target="_blank">
                        <Image
                            src="/home/Adobe Logo [Production].png"
                            alt="Adobe Logo"
                            width={96}
                            height={96}
                        />
                    </Link>
                </OrbitingCircles>
                <OrbitingCircles
                    className="size-[40px] border-none bg-transparent"
                    duration={30}
                    delay={20}
                    radius={150}
                    reverse
                >
                    <Link href="https://www.framer.com/" target="_blank">
                        <Image
                            src="/home/Framer Logo [No Code].png"
                            alt="Framer Logo"
                            width={96}
                            height={96}
                        />
                    </Link>
                </OrbitingCircles>
                <OrbitingCircles
                    className="size-[40px] border-none bg-transparent"
                    duration={30}
                    delay={30}
                    radius={150}
                    reverse
                >
                    <Link href="https://x.com" target="_blank">
                        <Image
                            src="/home/X Logo [Socials].png"
                            alt="X Logo"
                            width={96}
                            height={96}
                        />
                    </Link>
                </OrbitingCircles>
            </>)}
        </div>
    );
}
