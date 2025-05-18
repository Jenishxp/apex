"use client";

import toast from "react-hot-toast";
import Globe from "@/components/magicui/globe";
import { sendEmail } from "@/action/sendEmail";
import { Button } from "@/components/ui/button";
import BlurFade from "@/components/magicui/blur-fade";
import GradualSpacing from "@/components/magicui/gradual-spacing";

export default function ContactPage() {

    return (
        <div className="pt-40 flex flex-col gap-6 w-full max-w-[85vw] mx-auto min-h-screen">
            <div className="flex flex-col gap-2 max-sm:items-center">
                <GradualSpacing
                    text="Contact Us"
                    className="text-4xl max-sm:text-2xl font-semibold"
                />
                <BlurFade>
                    <h2 className="text-base max-sm:text-xs max-sm:text-center text-[#CCCCCC]">
                        Get in Touch: Discover the Newest in Technology Trends, Creative Projects, and Community Events
                    </h2>
                </BlurFade>
            </div>
            <div className="grid grid-cols-2 max-sm:flex max-sm: flex-col gap-8">
                <div className="w-full flex items-center">
                    <form
                        className="w-full flex flex-col gap-4"
                        action={
                            async (formData) => {
                                const { data, error } = await sendEmail(formData);

                                if (error) {
                                    toast.error(error);
                                    return;
                                }

                                toast.success("Email sent successfully!");
                            }
                        }
                    >
                        <div className="grid grid-cols-2 max-sm:grid-cols-1 gap-x-6 gap-y-4">
                            <BlurFade delay={0.1} inView>
                                <div className="w-full flex flex-col gap-2">
                                    <label className="text-md">Full Name</label>
                                    <input
                                        required
                                        type="text"
                                        name="senderName"
                                        placeholder="Bruce Wayne"
                                        className="w-full bg-[#1F1F1F] placeholder-[#CCCCCC] placeholder-opacity-25 border text-white p-2 rounded-lg"
                                    />
                                </div>
                            </BlurFade>
                            <BlurFade delay={0.1 * 2} inView>
                                <div className="w-full flex flex-col gap-2">
                                    <label className="text-md">Email Address</label>
                                    <input
                                        required
                                        type="email"
                                        maxLength={500}
                                        name="senderEmail"
                                        placeholder="bruce@wayne.com"
                                        className="w-full bg-[#1F1F1F] placeholder-[#CCCCCC] placeholder-opacity-25 border text-white p-2 rounded-lg"
                                    />
                                </div>
                            </BlurFade>
                        </div>
                        <BlurFade delay={0.1 * 4} inView>
                            <div className="w-full flex flex-col gap-2">
                                <label className="text-md">Message</label>
                                <textarea
                                    rows={5}
                                    required
                                    name="message"
                                    maxLength={5000}
                                    placeholder="Leave a message..."
                                    className="w-full bg-[#1F1F1F] placeholder-[#CCCCCC] placeholder-opacity-25 border text-white p-2 rounded-lg"
                                />
                            </div>
                        </BlurFade>
                        <BlurFade delay={0.1 * 6} inView>
                            <Button className="w-full mt-10 font-semibold flex items-center gap-2">
                                Submit
                            </Button>
                        </BlurFade>
                    </form>
                </div>
                <BlurFade delay={0.1 * 12} inView>
                    <div className="w-full flex max-sm:hidden">
                        {/* <div className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-lg border bg-background px-40 pb-40 pt-8 md:pb-60 md:shadow-xl"> */}
                        <Globe />
                        {/* <div className="pointer-events-none absolute inset-0 h-full bg-[radial-gradient(circle_at_50%_200%,rgba(0,0,0,0.2),rgba(255,255,255,0))]" /> */}
                        {/* </div> */}
                    </div>
                </BlurFade>
            </div>
        </div>
    );
}
