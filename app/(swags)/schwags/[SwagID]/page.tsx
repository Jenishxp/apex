"use client";

import Image from "next/image";
import { Canvas } from "@react-three/fiber";
import { useState, useEffect } from "react";
import { Physics } from "@react-three/rapier";
import Band from "@/components/pages/swags/band";
import BlurFade from "@/components/magicui/blur-fade";
import { getSwagsData, SwagData } from "@/lib/sanity";
import { Environment, Lightformer } from "@react-three/drei";
import GradualSpacing from "@/components/magicui/gradual-spacing";

export default function SwagCard({ params }: { params: { SwagID: string } }) {
    const [swagData, setSwagData] = useState<SwagData>();

    useEffect(() => {
        const fetchSwagData = async () => {
            try {
                const data = await getSwagsData(params.SwagID);
                setSwagData(data[0]);
            } catch (error) {
                console.error('Failed to fetch schwag data:', error);
            }
        }
        fetchSwagData();
    }, [params.SwagID]);

    const shareOnXURI = () => {
        const XText = encodeURIComponent(
            `Just claimed my digital schwag @apexia_club!
My swag link: https://www.apexia.club/schwags/${swagData?.userId}

Don't miss out to claim yours here: https://www.apexia.club/schwags/
#apexia #apexiafuture`
        );
        const XUrl = `https://twitter.com/intent/tweet?text=${XText}`;
        window.open(XUrl, '_blank');
    };

    const shareOnLinkedIn = () => {
        const shareURL = encodeURIComponent(`https://www.apexia.club/schwags/${swagData?.userId}`);
        const shareText = encodeURIComponent(
            `Just claimed my digital schwag @apexia_club!
My swag link: https://www.apexia.club/schwags/${swagData?.userId}

Don't miss out to claim yours here: https://www.apexia.club/schwags/
#apexia #apexiafuture`
        );
        const linkedInUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${shareURL}&text=${shareText}`;
        window.open(linkedInUrl, '_blank');
    };

    const CardTextureImgURL = `/api/swagTexture?firstName=${swagData?.firstName}&lastName=${swagData?.lastName}&designation=${swagData?.designation}&userId=${swagData?.userId}`;

    return (
        <>
            <head>
                <title>{`Apexia | ${swagData?.firstName} ${swagData?.lastName}`}</title>
                <meta name="description" content="Claim your Apexia digital schwags. Show off your Apexia’s membership to the world and connect with fellow enthusiasts." />
                <meta property="og:title" content="Apexia | Member schwag" />
                <meta property="og:description" content="Welcome to the Apexia family!" />
                <meta property="og:image" content={`https://apexia-tech.vercel.app/api/og/swag?userId=${params.SwagID}`} />
                <meta property="og:type" content="website" />
                <meta property="og:url" content={`https://www.apexia.club/schwags/${params.SwagID}`} />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:site" content="@apexia_club" />
                <meta name="twitter:creator" content="@apexia_club" />
                <meta name="twitter:title" content="Apexia | Member schwag" />
                <meta name="twitter:description" content="Welcome to the Apexia family!" />
                <meta name="twitter:image" content={`https://apexia-tech.vercel.app/api/og/swag?userId=${params.SwagID}`} />
            </head>
            <main className="flex relative max-sm:block w-full min-h-screen max-sm:mb-16">
                <div className="h-screen aspect-video w-full">
                    <Canvas camera={{ position: [0, 0, 13], fov: 25 }}>
                        <ambientLight intensity={Math.PI} />
                        <Physics interpolate gravity={[0, -40, 0]} timeStep={1 / 60}>
                            <Band CardTextureIMAGE={CardTextureImgURL} BandTextureIMAGE="/swag/apexia ribbon.png" />
                        </Physics>
                        <Environment background blur={0.75}>
                            {/* <color attach="background" args={[""]} /> */}
                            <Lightformer intensity={2} color="white" position={[0, -1, 5]} rotation={[0, 0, Math.PI / 3]} scale={[100, 0.1, 1]} />
                            <Lightformer intensity={3} color="white" position={[-1, -1, 1]} rotation={[0, 0, Math.PI / 3]} scale={[100, 0.1, 1]} />
                            <Lightformer intensity={3} color="white" position={[1, 1, 1]} rotation={[0, 0, Math.PI / 3]} scale={[100, 0.1, 1]} />
                            <Lightformer intensity={10} color="white" position={[-10, 0, 14]} rotation={[0, Math.PI / 2, Math.PI / 3]} scale={[100, 10, 1]} />
                        </Environment>
                    </Canvas>
                </div>
                <div className="flex max-sm:flex-col-reverse w-full h-screen pointer-events-none max-sm:aspect-[9/16] aspect-video absolute  bg-transparent z-50  left-0 flex-col gap-2">
                    <div className="w-full h-screen max-w-[85vw] mx-auto ">
                        <div className="pt-80 max-sm:pt-0 max-sm:-pb-4 max-sm:items-center flex flex-col gap-4">
                            <GradualSpacing
                                text="Share your Schwag!"
                                className="text-4xl max-sm:text-3xl font-semibold"
                            />
                            <div className="flex flex-col gap-1 max-sm:gap-2 max-sm:items-center">
                                <BlurFade>
                                    <div className="flex gap-2 items-center w-full">
{/*                                         <p className="text-lg max-sm:text-base text-[#cccccc] ">Share On</p> */}
                                        <div className="flex gap-2">
                                            <button onClick={() => shareOnXURI()} className="cursor-pointer hover:scale-110 duration-300 ease-out pointer-events-auto"><Image src={"/socials/Twitter.svg"} className="max-sm:w-5" width={24} height={24} alt="Twitter" /></button>
                                            <button onClick={() => shareOnLinkedIn()} className=" cursor-pointer hover:scale-105 duration-300 ease-out pointer-events-auto"><Image src={"/socials/LinkedIn.svg"} className="max-sm:w-5" width={24} height={24} alt="Twitter" /></button>
                                        </div>
                                    </div>
                                </BlurFade>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}
