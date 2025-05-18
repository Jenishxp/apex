import type { Metadata } from "next";
import Providers from "@/components/pages/blog/providers";
import { absoluteUrl, constructMetadata } from "@/lib/utils";

export const metadata: Metadata = constructMetadata({
    title: "Apexia | Events",
    description:
        "Explore our upcoming events, workshops, and hackathons designed to ignite your passion for learning. From coding bootcamps to design thinking sessions, we have something for everyone.",
    keyword: ["Tech events", "Apexia workshops", "Hackathons", "Upcoming events"],
    image: absoluteUrl("/api/og?PageSlug=events"),
});

export default function EventLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <Providers>
            {children}
        </Providers>
    );
}
