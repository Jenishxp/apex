"use client";

import NextImage from "@/components/NextImage";
import BlurFade from "@/components/magicui/blur-fade";
import GradualSpacing from "@/components/magicui/gradual-spacing";
import { GlowingCard } from "@/components/aceternity/glowing-card";

const teamMemberData = [
    {
        id: 1,
        name: "Aditi Patel",
        position: "Logistics Wizard",
        image: "/images/team/Aditi Patel.webp",
        link: "https://x.com/aditipatel2112"
    },
    {
        id: 2,
        name: "Rutansh Gandhi",
        position: "Visual Kohai",
        image: "/images/team/Rutansh Gandhi.webp",
        link: "https://x.com/rutanshgandhi"
    },
    {
        id: 3,
        name: "Kabir Brahmbhatt",
        position: "Ctrl+Z Specialist",
        image: "/images/team/Kabir Brahmbhatt.webp",
        link: "https://x.com/BrahmbhattKabir"
    },
    {
        id: 4,
        name: "Prathamesh Dighe",
        position: "The Word Weaver",
        image: "/images/team/Prathamesh Dighe.webp",
        link: "https://x.com/Dighe_Prat"
    },
    {
        id: 5,
        name: "Ayush Bhoi",
        position: "Visual Sensei",
        image: "/images/team/Ayush Bhoi.webp",
        link: "https://x.com/Ayush_Bhoiraj"
    },
    {
        id: 6,
        name: "Shivang Parmar",
        position: "Design Alchemist",
        image: "/images/team/Shivang Parmar.webp",
        link: "https://x.com/imsp_18"
    },
    {
        id: 7,
        name: "Parth Parmar",
        position: "Coding Ninja",
        image: "/images/team/Parth Parmar.webp",
        link: "https://x.com/code_parth"
    },
    {
        id: 8,
        name: "Jenish Patel",
        position: "Imagery Architect",
        image: "/images/team/Jenish Patel.webp",
        link: "https://x.com/jenishxp_5"
    },
    {
        id: 9,
        name: "Rutvi Shah",
        position: "Wordplayer",
        image: "/images/team/Rutvi Shah.webp",
        link: "https://x.com/rutvi0422"
    },
    {
        id: 10,
        name: "Krutagna Patel",
        position: "Thinker",
        image: "/images/team/Krutagna Patel.webp",
        link: "https://x.com/Krutagna_P"
    },
    {
        id: 11,
        name: "Sarthak Bhave",
        position: "Market Maniac",
        image: "/images/team/Sarthak Bhave.webp",
        link: "https://x.com/sarthak_bhave"
    },
    {
        id: 12,
        name: "Neel Patel",
        position: "Shutter Savant",
        image: "/images/team/Neel Patel.webp",
        link: "https://x.com/NeelPatel1073"
    },
    {
        id: 13,
        name: "Srujal Shah",
        position: "nontechking",
        image: "/images/team/Srujal Shah.webp",
        link: "https://x.com/techking_007"
    },
];

export default function TeamPage() {
    return (
        <div className="pt-40 w-full max-w-[85vw] mx-auto min-h-screen">
            <div className="flex flex-col pb-8 gap-2 max-sm:items-center">
                <GradualSpacing
                    text="Meet the Team"
                    className="text-4xl max-sm:text-2xl font-semibold"
                />
                <BlurFade>
                    <h2 className="text-base max-sm:text-xs text-[#CCCCCC]">
                        {`Meet the Visionaries Behind Apexia's Innovation`}
                    </h2>
                </BlurFade>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 gap-8">
                {teamMemberData.map((member) => (
                    <BlurFade
                        inView
                        key={member.id}
                        delay={0.25 + member.id * 0.05}
                    >
                        <GlowingCard borderRadius="rounded-xl" borderColor="border-[#ffffff]/[0.2] border-2">
                            <div className="flex flex-col cursor-pointer p-2 group">
                                <NextImage
                                    src={member.image}
                                    alt={member.name}
                                    width={512}
                                    height={512}
                                    className="w-full aspect-square object-cover grayscale group-hover:grayscale-0 group-hover:scale-95 transition duration-200 pentagon-polygon"
                                />
                                <div className="flex justify-between items-center">
                                    <div className="pt-2">
                                        <h3 className="text-xl font-semibold">{member.name}</h3>
                                        <p className="text-sm text-[#CCCCCC]">{member.position}</p>
                                    </div>
                                    <a href={member.link} target="_blank">
                                        <svg
                                            className=" cursor-pointer transform origin-bottom-right transition duration-300 ease-in-out group-hover:scale-150 group-hover:-rotate-12 fill-[#333333] group-hover:fill-[#1da1f2]"
                                            width="28"
                                            height="24"
                                            viewBox="0 0 16 14"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path d="M15.2039 2.65085L13.0805 4.76725C12.6586 9.6821 8.5102 13.5001 3.55317 13.5001C2.53363 13.5001 1.68988 13.3383 1.05004 13.0219C0.53676 12.7618 0.325822 12.4876 0.269572 12.4032C0.223032 12.3325 0.193043 12.2522 0.181839 12.1683C0.170634 12.0844 0.178504 11.9991 0.204862 11.9187C0.231219 11.8383 0.275385 11.7648 0.334068 11.7038C0.392751 11.6429 0.464439 11.5959 0.543791 11.5665C0.557853 11.5594 2.21723 10.9266 3.29301 9.71022C2.62584 9.23519 2.03944 8.65591 1.55629 7.9946C0.59301 6.68678 -0.426522 4.41569 0.185197 1.02663C0.204427 0.925875 0.25051 0.832185 0.318578 0.755453C0.386647 0.678721 0.474174 0.621797 0.571916 0.590691C0.669969 0.558584 0.774964 0.554065 0.875414 0.577627C0.975864 0.601189 1.0679 0.651925 1.14145 0.724285C1.16254 0.75241 3.50395 3.05866 6.36567 3.80397V3.37507C6.36843 2.92908 6.45901 2.48801 6.63223 2.07703C6.80546 1.66606 7.05794 1.29322 7.37525 0.979824C7.69257 0.666425 8.06851 0.418596 8.48161 0.250488C8.89471 0.0823808 9.33687 -0.00271277 9.78285 6.59198e-05C10.3682 0.00841427 10.9414 0.168241 11.4466 0.463974C11.9518 0.759707 12.3718 1.18126 12.6657 1.68757H14.8032C14.9142 1.68722 15.0229 1.71975 15.1155 1.78106C15.2081 1.84237 15.2804 1.92972 15.3235 2.0321C15.364 2.136 15.3743 2.24925 15.3531 2.35875C15.332 2.46825 15.2803 2.56952 15.2039 2.65085Z" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </GlowingCard>
                    </BlurFade>
                ))}
            </div>
        </div>
    );
}
