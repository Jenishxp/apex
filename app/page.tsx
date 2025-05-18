"use client";

import Link from "next/link";
import { CirclePlus } from "lucide-react";
import CalenderIcon from "@/utils/calenderIcons";
import Ripple from "@/components/magicui/ripple";
import BlurIn from "@/components/magicui/blur-in";
import Section from "@/components/common/Section";
import BlurFade from "@/components/magicui/blur-fade";
import AboutImage from "@/components/pages/home/aboutImage";
import ShimmerButton from "@/components/magicui/shimmer-button";
import { MarqueeDemo } from "@/components/pages/home/testimonials";
import { useState, useEffect } from "react";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { OrbitingCirclesDemo } from "@/components/pages/home/circular";
import EventGlimpse from "@/components/pages/home/eventGlimpse";


const faqData = [
    {
        id: 1,
        question: "Are there prerequisites for attending the events and workshops?",
        answer: "Well, technically you do need to be able to breathe and have a pulse. Other than that, we're pretty lax.",
    },
    {
        id: 2,
        question: "Can I participate if I am not a tech major?",
        answer: "You bet! Our events cover a wide range of topics, from the nitty-gritty of coding to the dazzling world of design and the strategic side of business building.",
    },
    {
        id: 3,
        question: "What's the best way to stay updated about Apexia?",
        answer: "Carrier pigeons are a bit outdated these days, why not follow our socials?",
    },
    {
        id: 4,
        question: "What types of events does the club organize?",
        answer: "Let's just say, our events are the Netflix of learning - binge-worthy knowledge in a variety of genres such as tech, marketing, designing, business building, etc..",
    },
    {
        id: 5,
        question: "Are there any membership fees?",
        answer: "Currently? Nope! We're all about spreading knowledge and fostering connections, completely free of charge. (Enjoy it while it lasts!)",
    },
    {
        id: 6,
        question: "How can I collaborate with other members?",
        answer: "Look, we're practically handing out collaboration opportunities on a silver platter. Just be around, be awesome, and who knows, you might just meet your professional soulmate.",
    },
];

export default function Home() {
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
        <div className=" w-full min-h-screen">

            {/* Hero Section */}
            <Section id="home">
                <div className="flex w-full max-w-[85vw] max-sm:max-w-full mx-auto h-screen">
                    <div className="w-full h-screen overflow-hidden relative">
                        <div className="w-full h-screen flex flex-col items-center justify-center absolute left-0 top-0 z-10">
                            <BlurIn
                                as="h1"
                                word="Connecting Minds, Fueling Innovation"
                                className="py-2 font-semibold text-center max-sm:text-4xl text-6xl text-transparent max-sm:tracking-tighter leading-[150%] tracking-tightest bg-clip-text bg-gradient-to-r from-white from-0% via-[#0A6CFF] via-25% to-[#99C1FE] to-75% "
                            />
                            <BlurIn
                                as="h2"
                                word="Welcome to Apexia, the ultimate consortium for tech and non-tech enthusiasts. Join us for events and meetups to connect, network, and transform your ideas into reality."
                                className="text-base w-3/4 max-sm:w-full max-sm:p-x-4 text-center max-sm:text-xs bg-transparent tracking-tight max-sm:leading-[125%] leading-[150%]"
                            />
                            <BlurFade delay={0.1} inView>
                                <div className="flex gap-2 pt-4">
                                    <Link href="/events">
                                        <ShimmerButton className="shadow-xl" shimmerColor="#0A6CFF">
                                            <span className="flex items-center gap-2  whitespace-pre-wrap text-center text-base max-sm:text-xs tracking-tight text-white">
                                                Events
                                                <CalenderIcon color="#CCCCCC" eventDay={12} scale={24} />
                                            </span>
                                        </ShimmerButton>
                                    </Link>
                                    <Link href="/contact">
                                        <ShimmerButton className="shadow-xl" shimmerColor="#0A6CFF">
                                            <span className="flex items-center gap-2  whitespace-pre-wrap text-center text-base max-sm:text-xs tracking-tight text-white">
                                                Contact Us
                                                <CirclePlus className="max-sm:h-6" />
                                            </span>
                                        </ShimmerButton>
                                    </Link>
                                </div>
                            </BlurFade>
                        </div>
                        <Ripple numCircles={25} mainCircleSize={10} mainCircleOpacity={0.5} />
                    </div>
                </div>
            </Section>

            {/* About Us */}
            <Section id="about">
                <div className="flex pt-20 w-full min-h-[60vh]">
                    {windowWidth && windowWidth > 1024 ?
                        (<div className="w-full max-w-[7.5vw] h-full">
                            <svg width="85" height="495" viewBox="0 0 85 495" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M84.1361 101L0.136108 2L0.136131 492.823L84.1361 393.823L84.1361 101Z" stroke="url(#paint0_linear_117_85)" />
                                <defs>
                                    <linearGradient id="paint0_linear_117_85" x1="36.5" y1="247" x2="141.174" y2="262.95" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#0A6CFF" stop-opacity="0" />
                                        <stop offset="1" stop-color="#0A6CFF" stop-opacity="0.7" />
                                    </linearGradient>
                                </defs>
                            </svg>
                        </div>)
                        :
                        (<div className="w-full max-w-[10vw] h-full" >
                            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="557" viewBox="0 0 26 557" fill="none">
                                <path d="M24.9289 41.4544L0 1L-1.00818e-05 555.83L24.9289 515.376L24.9289 41.4544Z" stroke="url(#paint0_linear_861_119)" strokeWidth="0.301052" />
                                <defs>
                                    <linearGradient id="paint0_linear_861_119" x1="10.8714" y1="100.804" x2="42.4961" y2="104.341" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#0A6CFF" stop-opacity="0" />
                                        <stop offset="1" stop-color="#0A6CFF" stop-opacity="0.7" />
                                    </linearGradient>
                                </defs>
                            </svg>
                        </div>)}

                    <div className="w-full max-w-[85vw] h-full">
                        <div className="grid grid-cols-2 max-sm:grid-cols-1 gap-10 max-sm:gap-12">
                            <div className="w-full flex flex-col gap-5 max-sm:gap-2">
                                <h2 className="font-semibold text-4xl max-sm:text-center max-sm:text-2xl tracking-tighter">About Us</h2>
                                <p className="text-base max-sm:text-xs max-sm:leading-[125%]  leading-[150%] text-justify">
                                    Apexia is a vibrant consortium that brings together tech and non-tech enthusiasts,
                                    innovators, professionals, and learners from various fields. Our mission is to foster
                                    a collaborative environment where individuals can network, share knowledge, and build
                                    innovative ideas.
                                    <br />
                                    <br />
                                    Through regular tech and marketing events, workshops, and meetups, Apexia provides a platform
                                    for members to connect, learn, and grow. We are dedicated to supporting our community by offering
                                    resources, mentorship, and opportunities for personal and professional development.
                                    <br /><br />
                                    Whether you&apos;re a seasoned professional or a curious learner, Apexia welcomes you to join us in
                                    our journey to create, innovate, and thrive together.
                                </p>
                            </div>
                            <div className="w-full">
                                <AboutImage />
                            </div>
                        </div>
                    </div>
                    {windowWidth && windowWidth > 1024 ?
                        (<div className="w-full max-w-[7.5vw] h-full">
                            <svg width="85" height="495" viewBox="0 0 85 495" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1.13624 101L85.1362 2L85.1362 492.823L1.13623 393.823L1.13624 101Z" stroke="url(#paint0_linear_117_89)" />
                                <defs>
                                    <linearGradient id="paint0_linear_117_89" x1="48.7723" y1="247" x2="-55.9016" y2="262.95" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#0A6CFF" stop-opacity="0" />
                                        <stop offset="1" stop-color="#0A6CFF" stop-opacity="0.7" />
                                    </linearGradient>
                                </defs>
                            </svg>
                        </div>) : (
                            <div className="w-full max-w-[10vw] px-4 h-full">
                                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="557" viewBox="0 0 26 557" fill="none">
                                    <path d="M1.02518 41.4544L25.9541 1L25.9541 555.83L1.02518 515.376L1.02518 41.4544Z" stroke="url(#paint0_linear_861_122)" strokeWidth="0.301052" />
                                    <defs>
                                        <linearGradient id="paint0_linear_861_122" x1="15.0827" y1="100.804" x2="-16.542" y2="104.341" gradientUnits="userSpaceOnUse">
                                            <stop stop-color="#0A6CFF" stop-opacity="0" />
                                            <stop offset="1" stop-color="#0A6CFF" stop-opacity="0.7" />
                                        </linearGradient>
                                    </defs>
                                </svg>
                            </div>
                        )}

                </div>
            </Section>

            {windowWidth && windowWidth > 1024 ? (
                <div className="w-full">
                    <svg width="1434" height="101" viewBox="0 0 1434 101" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
                        <path d="M0.512686 100.444L84.5125 1.44387L1356.38 1.44378L1440.38 100.444" stroke="url(#paint0_linear_277_353)" />
                        <defs>
                            <linearGradient id="paint0_linear_277_353" x1="714" y1="-228.556" x2="708.909" y2="81.2027" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#0A6CFF" />
                                <stop offset="1" stop-color="#0A6CFF" stop-opacity="0" />
                            </linearGradient>
                        </defs>
                    </svg>
                </div>
            ) : (
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="358" height="26" viewBox="0 0 358 26" fill="none" className="w-full">
                        <path d="M0.306471 24.9972L21.2355 0.330846L338.127 0.330833L359.056 24.9972" stroke="url(#paint0_linear_861_126)" strokeWidth="0.249155" />
                        <defs>
                            <linearGradient id="paint0_linear_861_126" x1="178.075" y1="-56.9748" x2="176.807" y2="20.2032" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#0A6CFF" />
                                <stop offset="1" stop-color="#0A6CFF" stop-opacity="0" />
                            </linearGradient>
                        </defs>
                    </svg>
                </div>
            )}

            {/* Focus */}
            <Section id="focus">
                <div className="flex w-full max-w-[85vw] mx-auto my-28 max-sm:my-24">
                    <div className="grid grid-cols-2 max-sm:grid-cols-1 max-sm:gap-y-6">
                        <div className="flex justify-center items-center">
                            <div className="w-full flex flex-col gap-5 max-sm:gap-2">
                                <h2 className="font-semibold text-4xl max-sm:text-center  max-sm:text-2xl tracking-tighter">What is our primary focus? </h2>
                                <p className="text-base max-sm:text-xs max-sm:leading-[125%]  leading-[150%] text-justify">
                                    At Apexia our primary focus is learning in public and via collaboration. We encourage cross-disciplinary partnerships between diverse fields so that people from various domains get to learn and create something new.
                                    <br />
                                    <br />
                                    Continuous learning and development is our mission. Through regular events and workshops, we ensure that our members stay updated with new technologies and the latest trends.
                                </p>
                            </div>
                        </div>
                        <div className="w-full aspect-square flex justify-center items-center">
                            <OrbitingCirclesDemo />
                        </div>
                    </div>
                </div>
            </Section>

            {/* Glimpse */}
            <Section id="glimpse">
                <div className="w-full my-28 max-sm:my-24">
                    <div className="flex max-w-[85vw] max-sm:items-center mx-auto flex-col gap-1 py-4 items-start">
                        <h2 className=" font-semibold text-4xl max-sm:text-2xl tracking-tighter">Event Glimpse</h2>
                        <p className="text-base max-sm:text-center max-sm:tracking-tighter max-sm:text-xs">Our photos offer a glimpse into the vibrant energy, collaboration, and maybe-slightly-chaotic fun that defines the Apexia experience</p>
                    </div>
                    <EventGlimpse />
                </div>
            </Section>

            {/* Testimonials */}
            <Section id="testimonials">
                <div className="w-full max-h-min flex flex-col gap-6 my-28 max-sm:my-24">
                    <div className="flex flex-col gap-2 max-sm:gap-0">
                        <BlurIn
                            as="h1"
                            word="Testimonials"
                            className="text-4xl max-sm:text-2xl tracking-tighter font-semibold text-center bg-transparent"
                        />
                        <BlurIn
                            as="h2"
                            word="Checkout what others have to say about us!"
                            className="text-base max-sm:text-xs text-[#CCCCCC] text-center bg-transparent"
                        />
                    </div>
                    <MarqueeDemo />
                </div>
            </Section>

            {/* FAQs */}
            <Section id="faq">
                <div className="w-full max-w-[85vw] mx-auto flex flex-col gap-9 pb-0 my-28 max-sm:my-0">
                    <BlurIn
                        as="h1"
                        word="Frequently Asked Questions"
                        className="text-4xl max-sm:text-2xl font-semibold text-left max-sm:text-center bg-transparent"
                    />
                    <div className="w-full flex flex-col">
                        <div className="grid grid-cols-2 max-sm:flex max-sm:flex-col-reverse gap-8 ">
                            <div className="h-fit justify-bewteen p-4 flex flex-col border rounded-lg">
                                <div>
                                    <BlurIn
                                        as="h2"
                                        word="Have a question?"
                                        className="text-xl max-sm:text-base font-semibold text-left bg-transparent"
                                    />
                                    <BlurIn
                                        as="p"
                                        word="Can't find the answer to you're looking for?"
                                        className="text-base max-sm:text-xs text-[#CCCCCC] font-normal text-left bg-transparent"
                                    />
                                    <BlurIn
                                        as="p"
                                        word="Reach out to us."
                                        className="text-base max-sm:text-xs text-[#CCCCCC] font-normal text-left bg-transparent"
                                    />
                                </div>
                                <div className="flex pt-4">
                                    <Link href="/contact">
                                        <div className="shadow-2xl bg-white px-4 py-2 max-sm:px-2 max-sm:py-1 max-sm: rounded-md hover:scale-95 transition duration-200">
                                            <span className="flex items-center gap-4 whitespace-pre-wrap text-center text-base max-sm:text-sm tracking-tight text-black">
                                                Contact Us
                                            </span>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                            <div className="">
                                <Accordion type="single" collapsible>
                                    {faqData.map((faq) =>
                                        <AccordionItem key={faq.id} value={`item-${faq.id}`}>
                                            <AccordionTrigger>{faq.question}</AccordionTrigger>
                                            <AccordionContent>{faq.answer}</AccordionContent>
                                        </AccordionItem>
                                    )}
                                </Accordion>
                            </div>
                        </div>
                    </div>
                </div>
            </Section>

        </div>
    );
}
