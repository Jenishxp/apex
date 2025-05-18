import "./globals.css";
import Script from "next/script";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "react-hot-toast";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import { ThemeProvider } from "@/components/theme-provider";
import { absoluteUrl, constructMetadata } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = constructMetadata({
    title: "Apexia",
    description:
        `We are Apexia, your bridge between tech and marketing magic. Our mission? To empower individuals of all backgrounds with the skills and connections they need to thrive in this dynamic space of tech and marketing. Join us to #ApexiaFuture! (Apex - Your - Future)
        `,
    keyword: ["Tech club", "Non-tech club", "Events", "Workshops", "Hackathons", "Community", "Vadodara", "Gujarat"],
    image: absoluteUrl("/api/og"),
});

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <head>
                <link href="/favicon/apexia-light.svg" rel="icon" type="image/svg" media="(prefers-color-scheme: light)" />
                <link href="/favicon/apexia-dark.svg" rel="icon" type="image/svg" media="(prefers-color-scheme: dark)" />
                {/* google Analytics */}
                <Script async src="https://www.googletagmanager.com/gtag/js?id=G-F74R8PT790"></Script>
                <Script id="google-analytics">
                    {
                        `
                            window.dataLayer = window.dataLayer || [];
                            function gtag(){dataLayer.push(arguments);}
                            gtag('js', new Date());
                            gtag('config', 'G-F74R8PT790');
                        `
                    }
                </Script>
            </head>
            <head />
            <body className={inter.className}>
                <ThemeProvider
                    attribute="class"
                    defaultTheme="dark"
                >
                    <div className="min-h-screen flex flex-col justify-between">
                        <Header />
                        {children}
                        <Footer />
                        <Toaster position="bottom-right" />
                    </div>
                </ThemeProvider>
            </body>
        </html>
    );
}
