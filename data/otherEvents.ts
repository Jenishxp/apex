export interface OtherEventDataType {
    title: string;
    startDate: Date;
    endDate: Date;
    eventURL: string;
    coverImageUrl: string;
    buttonText: string;
}

export const otherEventsData = [
    {
        title: "HackThisFall 2025",
        startDate: new Date("2025-03-21"),
        endDate: new Date("2025-02-28"),
        eventURL: "https://hackthisfall.devfolio.co/?ref=549e7571b5",
        coverImageUrl: "/images/other-events/S5_Website_Cover.png", 
        buttonText: "Register"
    }

] as OtherEventDataType[];
