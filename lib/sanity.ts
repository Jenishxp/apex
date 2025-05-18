import { createClient } from "@sanity/client";

export interface SwagData {
    _type: string;
    email: string;
    userId: string;
    lastName: string;
    firstName: string;
    designation: string;
}

export interface OtherEventsTypes {
    title: string;
    startDate: Date;
    endDate: Date;
    eventURL: string;
    coverImage: string;
}

export const client = createClient({
    projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
    dataset: "production",
    useCdn: true,
    apiVersion: "2022-03-07",
    perspective: "published",
    token: process.env.NEXT_PUBLIC_SANITY_WRITE_TOKEN
})

export async function getOtherEventsData(): Promise<OtherEventsTypes[]> {
    try {
        const query = `*[_type=="otherEventData"]{title,startDate,endDate,eventURL,"coverImage":coverImage.asset->url}`;
        const otherEvents = await client.fetch(query);
        return otherEvents;
    } catch (error) {
        console.error('Failed to fetch other events:', error);
        throw error;
    }
}

export async function getSwagsData(userId: string) {
    try {
        const query = `*[_type=="swagData"&&userId=="${userId}"]{_type,userId,firstName,lastName,designation}`;
        const swagData = await client.fetch(query);
        return swagData;
    } catch (error) {
        console.error('Failed to fetch schwag data:', error);
        throw error;
    }
}

export async function createSwag(swagData: SwagData) {
    try {
        const result = await client.create(swagData);
        return result;
    } catch (error) {
        console.error('Failed to create schwag:', error);
        throw error;
    }
}
