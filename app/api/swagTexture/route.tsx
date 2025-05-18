/* eslint-disable @next/next/no-img-element */
import { ImageResponse } from "next/og";

export const runtime = "edge";

const interRegularUrl = "https://apexia-tech.vercel.app/fonts/Inter-Regular.ttf"
const interSemiBoldUrl = "https://apexia-tech.vercel.app/fonts/Inter-SemiBold.ttf"
const image = "https://apexia-tech.vercel.app/swag/texture.png";

export async function GET(req: Request) {
    const url = new URL(req.url);
    const params = Object.fromEntries(url.searchParams);
    const { userId, firstName, lastName, designation } = params;

    try {
        return new ImageResponse(
            (
                <div tw="flex justify-center flex-col relative w-full h-full items-center bg-white">
                    <img
                        tw="absolute inset-0 w-full h-full"
                        alt={`schwag texture ${userId}`}
                        src={image}
                    />
                    <div tw="absolute inset-x-7 inset-y-[600px] flex flex-col">
                        <h1 tw="text-[32px] text-white font-semibold">
                            {firstName} {lastName}
                        </h1>
                        <h1 tw="text-[16px] text-[#CCCCCC] font-normal">
                            {designation}
                        </h1>
                    </div>
                </div>
            ),
            {
                width: 1024,
                height: 1024,
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