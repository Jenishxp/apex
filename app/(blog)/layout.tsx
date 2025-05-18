import type { Metadata } from "next";
import Providers from "@/components/pages/blog/providers";
import { absoluteUrl, constructMetadata } from "@/lib/utils";

export const metadata: Metadata = constructMetadata({
    title: "Apexia | Blog",
    description:
        "Stay ahead of the curve! Delve into our insightful blogs, featuring articles, tutorials, and industry news curated by experts. Keep your knowledge fresh and expand your horizons.",
    keyword: ["blog", "Tech news", "Tutorials for coders", "Apexia blog"],
    image: absoluteUrl("/api/og?PageSlug=blog"),
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
