import type { Metadata } from "next";
import Providers from "@/components/pages/blog/providers";
import { absoluteUrl, constructMetadata } from "@/lib/utils";

export const metadata: Metadata = constructMetadata({
    title: "Apexia | Contact",
    description: "Let's connect! We'd love to hear from you. Get in touch with Apexia for any questions, inquiries, or just to say hi.",
    keyword: ["Contact Apexia", "Apexia queries"],
    image: absoluteUrl("/api/og?PageSlug=contact"),
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
