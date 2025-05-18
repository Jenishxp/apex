import type { Metadata } from "next";
import { absoluteUrl, constructMetadata } from "@/lib/utils";

export const metadata: Metadata = constructMetadata({
    title: "Apexia | Team",
    description:
        "Get to know the passionate individuals driving innovation and creating this amazing place to be.",
    keyword: ["Apexia team", "Meet the team", "Enthusiasts"],
    image: absoluteUrl("/api/og?PageSlug=team"),
});

export default function EventLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return children;
}
