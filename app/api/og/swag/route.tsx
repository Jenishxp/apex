/* eslint-disable @next/next/no-img-element */
import { ImageResponse } from "next/og";
import { getSwagsData, SwagData } from "@/lib/sanity";

export const runtime = "edge";

const interRegularUrl = "https://apexia-tech.vercel.app/fonts/Inter-Regular.ttf"
const interSemiBoldUrl = "https://apexia-tech.vercel.app/fonts/Inter-SemiBold.ttf"
const ogImage = "https://apexia-tech.vercel.app/og/og-swag-image.jpeg";

export async function GET(req: Request) {
    const url = new URL(req.url);
    const params = Object.fromEntries(url.searchParams);
    const { userId } = params;

    const swagsData: [SwagData] = await getSwagsData(userId as string);

    if (!swagsData) {
        return new Response(`Failed to fetch schwags data`, {
            status: 500,
        });
    }

    try {
        return new ImageResponse(
            (
                <div tw="flex flex-col relative w-full h-full items-center bg-white">
                    <img
                        tw="absolute inset-0 w-full h-full"
                        alt={`og-Image`}
                        src={ogImage}
                    />
                    <div tw="absolute left-[316px] top-[542px] flex flex-col">
                        <p tw="text-[24px] text-white italic">
                            {`/${swagsData[0].userId}`}
                        </p>
                    </div>
                    <div tw="absolute left-[790px] top-[460px] flex flex-col">
                        <h1 tw="text-[32px] text-white font-semibold">
                            {swagsData[0].firstName} {swagsData[0].lastName}
                        </h1>
                    </div>
                    <div tw="absolute left-[790px] top-[500px] flex flex-col">
                        <h1 tw="text-[16px] text-[#CCCCCC] font-normal">
                            {swagsData[0].designation}
                        </h1>
                    </div>
                </div>
            ),
            {
                width: 1200,
                height: 630,
                fonts: [
                    {
                        name: "Inter",
                        data: await fetch(interRegularUrl).then(res => res.arrayBuffer()),
                        style: "normal",
                    },
                    {
                        name: "Inter",
                        data: await fetch(interSemiBoldUrl).then(res => res.arrayBuffer()),
                        style: "normal",
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