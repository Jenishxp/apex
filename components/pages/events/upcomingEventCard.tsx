"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import NextImage from "@/components/NextImage";
import { Button } from "@/components/ui/button";
import CalenderIcon from "@/utils/calenderIcons";
import { GlowingCard } from "@/components/aceternity/glowing-card";

interface UpcomingEventCardProps {
    title: string;
    startDate: Date;
    eventURL: string;
    coverImageUrl: string;
}

export default function UpcomingEventCard({
    title,
    eventURL,
    startDate,
    coverImageUrl
}: UpcomingEventCardProps
) {
    return (
        <GlowingCard borderRadius="rounded-xl" borderColor="border-[#ffffff]/[0.2] border">
            <div className="w-full flex flex-col group">
                <div className="aspect-square w-full overflow-hidden group-hover:scale-95 transition duration-200 rounded-lg">
                    <NextImage
                        src={coverImageUrl}
                        alt={title}
                        width={512}
                        height={512}
                        className="object-cover border rounded-lg"
                    />
                </div>
                <div className="p-2 flex flex-col gap-2 w-full group-hover:transition group-hover:duration-200">
                    <div className="flex flex-col gap-2">
                        <h3 className="text-xl font-semibold">{title}</h3>
                        <p className="flex items-center gap-1">
                            <CalenderIcon color="#CCCCCC" eventDay={startDate.getDate()} scale={32} />
                            <span className="text-[#CCCCCC]">{startDate.toLocaleString('default', { month: 'long' })},</span>
                            <span className="text-[#CCCCCC]">{startDate.getFullYear()},</span>
                            <span className="text-[#CCCCCC]">{startDate.toLocaleString('default', { weekday: 'long' })}</span>
                        </p>
                    </div>
                    <Button variant="outline" className="flex bg-transparent border-[#ffffff]/[0.2] hover:border-white hover:scale-95 transition duration-200" asChild>
                        <Link
                            target="_blank"
                            href={`https://lu.ma/${eventURL}?utm_source=apexiaEventPage`}
                            className="flex gap-2 items-center"
                        >
                            Register Now
                            <ArrowUpRight className="flex-none w-4 h-4" />
                        </Link>
                    </Button>
                </div>
            </div>
        </GlowingCard>
    )
}
