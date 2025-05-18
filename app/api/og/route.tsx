/* eslint-disable @next/next/no-img-element */
import { ImageResponse } from "next/og";

const capitalize = (str: string, lower = false) => (lower ? str.toLowerCase() : str).replace(/(?:^|\s|["'([{])+\S/g, (match) => match.toUpperCase());

export const runtime = "edge";

const bornaFont = "https://apexia-tech.vercel.app/fonts/borna-medium.ttf";
const image = "https://apexia-tech.vercel.app/og/og-image.jpeg";

export async function GET(req: Request) {
    const url = new URL(req.url);
    const params = Object.fromEntries(url.searchParams);
    const PageSlug = capitalize(
        (params.PageSlug || "bits to brilliance, together")
            .replace(/-/g, " ")
            .split(" ")
            .join(" ")
    );

    try {
        return new ImageResponse(
            (
                <div tw="flex justify-center flex-col relative w-full h-full items-center bg-white">
                    <img
                        tw="absolute inset-0 w-full h-full"
                        alt={`og-Image`}
                        src={image}
                    />
                    <div tw="absolute inset-y-[380px] flex flex-col">
                        <h1 className="text-[64px] font-semibold" style={{ fontFamily: "Borna", color: "#CCCCCC" }}>
                            {PageSlug}
                        </h1>
                    </div>
                </div>
            ),
            {
                width: 1200,
                height: 630,
                fonts: [
                    {
                        name: "Borna",
                        data: await fetch(bornaFont).then(res => res.arrayBuffer()),
                    },
                ],
            },
        );
    } catch (e: any) {
        console.log(`${e.message}`);
        return new Response(`Failed to generate the image`, {
            status: 500,
        });
    }
}