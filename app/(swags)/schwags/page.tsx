"use client";

import { useState } from "react";
import { createSwag } from "@/lib/sanity";
import ShortUniqueId from "short-unique-id";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import BlurFade from "@/components/magicui/blur-fade";
import { MoveRight, LoaderCircle } from "lucide-react";
import CardDesign from "@/components/pages/swags/CardDesign";
import GradualSpacing from "@/components/magicui/gradual-spacing";
import { CardContainer } from "@/components/aceternity/3d-card";

export default function SwagsRegisterPage() {
    const router = useRouter();
    const [userID, setUserID] = useState<string>("");
    const { randomUUID } = new ShortUniqueId({ length: 9 });
    const [submitting, setSubmitting] = useState<boolean>(false);
    const [lastName, setLastName] = useState<string>("Last Name");
    const [firstName, setFirstName] = useState<string>("First Name");
    const [emailAddress, setEmailAddress] = useState<string>("Email Address");
    const [designationName, setDesignationName] = useState<string>("Designation");


    const generateUserId = () => {
        const id = randomUUID();
        setUserID(id);
        return id;
    }

    if (firstName === "" || lastName === "" || designationName === "" || emailAddress === "") {
        setFirstName("First Name");
        setLastName("Last Name");
        setDesignationName("Designation");
        setEmailAddress("Email Address");
    }

    const createSwagData = async (firstName: string, lastName: string, designationName: string, emailAddress: string) => {
        const swagData = {
            _type: "swagData",
            userId: generateUserId(),
            firstName: firstName,
            lastName: lastName,
            email: emailAddress,
            designation: designationName,
        }

        try {
            await createSwag(swagData);
            router.push(`/schwags/${swagData.userId}`);
            console.log('schwags data created:', swagData.userId);
            setUserID("");
            setFirstName("");
            setLastName("");
            setDesignationName("");
            setEmailAddress("");
        } catch (error) {
            console.error('Failed to create schwags data:', error);
        }
        setUserID("");
        setFirstName("");
        setLastName("");
        setDesignationName("");
        setEmailAddress("");
    }

    return (
        <>
            <head>
                <title>
                    Apexia | Schwag
                </title>
                <meta name="description" content="Claim your Apexia digital schwags. Show off your Apexia’s membership to the world and connect with fellow enthusiasts." />
                <meta property="og:title" content="Apexia | schwag" />
                <meta property="og:description" content="Claim your Apexia digital schwag. Show off your Apexia’s membership to the world and connect with fellow enthusiasts." />
                <meta property="og:image" content={`https://apexia-tech.vercel.app/api/og?PageSlug=schwags`} />
                <meta property="og:type" content="website" />
                <meta property="og:url" content={`https://www.apexia.club/schwags`} />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:site" content="@apexia_club" />
                <meta name="twitter:creator" content="@apexia_club" />
                <meta name="twitter:title" content="Apexia | schwag" />
                <meta name="twitter:description" content="Claim your Apexia digital schwags. Show off your Apexia’s membership to the world and connect with fellow enthusiasts." />
                <meta name="twitter:image" content={`https://apexia-tech.vercel.app/api/og?PageSlug=schwags`} />
            </head>
            <div className="pt-40 flex flex-col w-full max-w-[85vw] mx-auto min-h-screen">
                <div className="flex max-sm:flex-col max-sm:gap-8 justify-between max-sm:items-center lg:gap-32 w-full">
                    <div className="w-full flex gap-6 flex-col">
                        <div className=" flex flex-col gap-2 max-sm:items-center">
                            <GradualSpacing
                                text="Claim your Digital schwag"
                                className="text-4xl max-sm:text-2xl font-semibold"
                            />
                            <BlurFade>
                                <h2 className="text-base max-sm:text-xs text-[#CCCCCC]">
                                    Showcase your exclusive Apexia’s Membership Card
                                </h2>
                            </BlurFade>
                        </div>
                        <form
                            className="w-full flex flex-col gap-4 max-sm:gap-1"
                            onSubmit={(e) => {
                                e.preventDefault();
                                createSwagData(firstName, lastName, designationName, emailAddress);
                                submitting ? setSubmitting(false) : setSubmitting(true);
                            }}
                        >
                            <BlurFade delay={0.1 * 12} inView>
                                <span className="text-lg max-sm:leading-[125%] leading-[150%] font-semibold">Enter Your Details</span>
                            </BlurFade>
                            <div className="py-8  max-sm:py-4 grid grid-cols-2 max-sm:grid-cols-1 gap-x-6 max-sm:gap-x-3 max-sm:gap-y-2 gap-y-4 border-dashed border-t border-b">
                                <BlurFade delay={0.1} inView>
                                    <div className="w-full flex flex-col gap-2">
                                        <label className="text-base tracking-tight leading-[150%] max-sm:leading-[125%] max-sm:text-sm">First Name</label>
                                        <input
                                            required
                                            type="text"
                                            onChange={(e) => setFirstName(e.target.value)}
                                            className="w-full bg-[#1F1F1F] border text-white p-2 rounded-lg"
                                        />
                                    </div>
                                </BlurFade>
                                <BlurFade delay={0.1 * 2} inView>
                                    <div className="w-full flex flex-col gap-2">
                                        <label className="text-base tracking-tight leading-[150%] max-sm:leading-[125%] max-sm:text-sm">Last Name</label>
                                        <input
                                            required
                                            type="text"
                                            onChange={(e) => setLastName(e.target.value)}
                                            className="w-full bg-[#1F1F1F] border text-white p-2 rounded-lg"
                                        />
                                    </div>
                                </BlurFade>
                                <BlurFade delay={0.1 * 4} inView>
                                    <div className="w-full flex flex-col gap-2">
                                        <label className="text-base tracking-tight leading-[150%] max-sm:leading-[125%] max-sm:text-sm">Designation</label>
                                        <input
                                            required
                                            type="text"
                                            onChange={(e) => setDesignationName(e.target.value)}
                                            className="w-full bg-[#1F1F1F] border text-white p-2 rounded-lg"
                                        />
                                    </div>
                                </BlurFade>
                                <BlurFade delay={0.1 * 6} inView>
                                    <div className="w-full flex flex-col gap-2">
                                        <label className="text-base tracking-tight leading-[150%] max-sm:leading-[125%] max-sm:text-sm">Email Address</label>
                                        <input
                                            required
                                            type="email"
                                            onChange={(e) => setEmailAddress(e.target.value)}
                                            className="w-full bg-[#1F1F1F] border text-white p-2 rounded-lg"
                                        />
                                    </div>
                                </BlurFade>
                            </div>
                            <BlurFade delay={0.1 * 8} inView>
                                <Button type="submit" className="mt-10 max-sm:mt-4 flex items-center gap-2">
                                    {submitting ? "Generating Card..." : "Generate Card"}
                                    {submitting ?
                                        <svg className="animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 24 24" fill="#000000"></svg>
                                    : <MoveRight />}
                                </Button>
                            </BlurFade>
                        </form>
                    </div>
                    <div className="flex w-full max-sm:mt-2 max-sm:justify-center ">
                        <BlurFade delay={0.1 * 10} inView>
                            <CardContainer className="inter-var">
                                <CardDesign firstName={firstName} lastName={lastName} designation={designationName} />
                            </CardContainer>
                        </BlurFade>
                    </div>
                </div>
            </div>
        </>
    );
}
