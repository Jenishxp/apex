"use client";

import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import BlurFade from "@/components/magicui/blur-fade";
import LumaEventData, { Entry } from "@/types/lumaEventData";
import GradualSpacing from "@/components/magicui/gradual-spacing";
import PastEventCard from "@/components/pages/events/pastEvetCard";
import { getOtherEventsData, OtherEventsTypes } from "@/lib/sanity";
import OtherEventCard from "@/components/pages/events/otherEventsCard";
import UpcomingEventCard from "@/components/pages/events/upcomingEventCard";

const API_ID = "cal-5G3uXQIF8dtWmOC";

export default function EventsPage() {
    const [pastEvents, setPastEvents] = useState<Entry[]>([]);
    const [totalPastEvent, setTotalPastEvent] = useState<number>(0);
    const [upcomingEvents, setUpcomingEvents] = useState<Entry[]>([]);
    const [totalUpcomingEvent, setTotalUpcomingEvent] = useState<number>(0);
    const [otherEvents, setOtherEvents] = useState<OtherEventsTypes[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    const fetchTotalUpcomingEvent = async () => {
        const response = await axios.get(`https://api.lu.ma/calendar/get-items?calendar_api_id=${API_ID}&period=upcoming`);
        const data = response.data as LumaEventData;
        const eventNumber = data.entries.length;
        setTotalUpcomingEvent(eventNumber);
        if (eventNumber > 0) {
            setUpcomingEvents(data.entries);
        }
    };

    const modifyOtherEventsData = async () => {
        const data = await getOtherEventsData();
        // in the otherEventsData.startDate is reached then remove from the array
        const filteredOtherEvents = data.filter((event) => {
            return new Date(event.endDate) > new Date();
        });
        setOtherEvents(filteredOtherEvents);
    };

    const fetchTotalPastEvent = async () => {
        const response = await axios.get(`https://api.lu.ma/calendar/get-items?calendar_api_id=${API_ID}&period=past`);
        const data = response.data as LumaEventData;
        const eventNumber = data.entries.length;
        setTotalPastEvent(eventNumber);
        if (eventNumber > 0) {
            setPastEvents(data.entries);
        }
    };

    useEffect(() => {
        const fetchEvents = async () => {
            await fetchTotalUpcomingEvent();
            await fetchTotalPastEvent();
            modifyOtherEventsData();
            setLoading(false);
        };
        fetchEvents();
    }, []);

    return (
        <div className="w-full pt-40 max-w-[85vw] mx-auto min-h-screen">
            <div className="flex flex-col gap-8">
                {/* Loader */}
                {loading ? (
                    <div role="status" className="flex justify-center items-center">
                        <svg aria-hidden="true" className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                        </svg>
                        <span className="sr-only">Loading...</span>
                    </div>
                ) : (
                    <>
                        {upcomingEvents.length > 0 ? (
                            <div className="flex flex-col gap-8">
                                <div className="flex flex-col gap-2 max-sm:items-center">
                                    <GradualSpacing
                                        text="Upcoming Events"
                                        className="text-4xl max-sm:text-2xl font-semibold"
                                    />
                                    <BlurFade>
                                        <h2 className="text-base max-sm:text-xs text-[#CCCCCC]">
                                            {`Don't Miss Out on Our Exciting Upcoming Events`}
                                        </h2>
                                    </BlurFade>
                                </div>
                                <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 gap-4">
                                    {upcomingEvents.map((event, index) => (
                                        <BlurFade
                                            inView
                                            key={index}
                                            delay={0.25 + index * 0.05}
                                        >
                                            <UpcomingEventCard
                                                title={event.event.name}
                                                eventURL={event.event.url}
                                                coverImageUrl={event.event.cover_url}
                                                startDate={new Date(event.event.start_at)}
                                            />
                                        </BlurFade>
                                    ))}
                                </div>
                            </div>
                        ) : (
                            null
                        )}

                        {otherEvents.length > 0 ? (
                            <div className="flex flex-col gap-8">
                                <div className="flex flex-col gap-2 max-sm:items-center">
                                    <GradualSpacing
                                        text="Other Events"
                                        className="text-4xl max-sm:text-2xl font-semibold"
                                    />
                                    <BlurFade>
                                        <h2 className="text-base max-sm:text-xs text-[#CCCCCC]">
                                            {`Check out Exciting Events Near You`}
                                        </h2>
                                    </BlurFade>
                                </div>
                                <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 gap-4">
                                    {otherEvents.map((event, index) => (
                                        <BlurFade
                                            inView
                                            key={index}
                                            delay={0.25 + index * 0.05}
                                        >
                                            <OtherEventCard
                                                title={event.title}
                                                startDate={event.startDate}
                                                coverImage={event.coverImage}
                                                eventURL={event.eventURL}
                                            />
                                        </BlurFade>
                                    ))}
                                </div>
                            </div>
                        ) : (
                            null
                        )}

                        <div className="flex flex-col gap-8">
                            <div className="flex flex-col gap-2 max-sm:items-center">
                                <GradualSpacing
                                    text="Previous Events"
                                    className="text-4xl max-sm:text-2xl font-semibold"
                                />
                                <BlurFade>
                                    <h2 className="text-base max-sm:text-xs text-[#CCCCCC]">
                                        Highlights and Recaps from Our Past Events
                                    </h2>
                                </BlurFade>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 gap-4">
                                {pastEvents.length > 0 ? (
                                    pastEvents.map((event, index) => (
                                        <BlurFade
                                            inView
                                            key={index}
                                            delay={0.25 + index * 0.05}
                                        >
                                            <PastEventCard
                                                title={event.event.name}
                                                eventURL={event.event.url}
                                                coverImageUrl={event.event.cover_url}
                                                startDate={new Date(event.event.start_at)}
                                            />
                                        </BlurFade>
                                    ))
                                ) : (
                                    <p className="text-center col-span-full text-gray-500">
                                        No previous events
                                    </p>
                                )}
                            </div>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}
