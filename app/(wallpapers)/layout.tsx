import type { Metadata } from "next";
import { absoluteUrl, constructMetadata } from "@/lib/utils";

export const metadata: Metadata = constructMetadata({
    title: "Apexia | Wallpapers",
    description:
        "Immerse yourself in the world of Apexia with our exclusive, high-quality wallpapers. Download stunning visuals that reflect your passion for innovation and creativity. Perfect for your desktop, laptop, or mobile device.",
    image: absoluteUrl("/api/og?PageSlug=wallpapers"),
});

export default function EventLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return children;
}
