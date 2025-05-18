import { cn } from "@/lib/utils";
import Marquee from "@/components/magicui/marquee";

const reviews = [
  {
    name: "Kabir Brahmbhatt",
    role: "Vice President Public Relations",
    compony: "@ Vadodara Toastmasters",
    body: `Apexia is the just the right place for creative minds and tech geeks to find their community of like-minded people and build an amazing network. Their events/sessions are incredibly insightful and conducted in a friendly interaction. It buzzes with skills, creativity and fun.`,
    img: "/images/testimonials/Frame 1.webp",
  },
  {
    name: "Ashutosh Bhagat",
    role: "Customer Relationship Manager",
    compony: "@ AIM Club, Svit Vasad",
    body: `I joined in semester 2 at Apexia and discovered a treasure trove of learning (tech & beyond!), built a portfolio I'm proud of, and connected with incredible people. It's more than just a club, it's a supportive community.`,
    img: "/images/testimonials/Frame 2.webp",
  },
  {
    name: "Vipra Dave",
    role: "Marketing Manager, Student",
    compony: "@ Zetagravit, SVIT",
    body: `I've attended Apexia's many events and learned a lot. I'm grateful to have been part of this community from the beginning and look forward to more exciting events in the future.`,
    img: "/images/testimonials/Frame 3.webp",
  },
  {
    name: "Ashish // Technoid",
    role: "Creator",
    compony: "@ Technoidic Productions",
    body: `"Apexia Club truly embodies its bio - ""its not your average college club"". From the first glance at any content piece this brand puts out online, it screams ""QUALITY"". Really liked the young and enthusiastic team that's pushing this community to newer heights!"`,
    img: "/images/testimonials/Frame 4.webp",
  },
  {
    name: "Aditya Kumar Singh",
    role: "Frontend Developer & UI/UX Designer",
    compony: "@ MedrefHealthBridge Solutions",
    body: `Apexia  keeps all your certificates in one place with a variety of designs, making certificate management a breeze. It's an amazing platform and a good community to collaborate.`,
    img: "/images/testimonials/Frame 5.webp",
  },
  {
    name: "Aditya Shah",
    role: "Freelance editor and 3D Artist ",
    compony: "",
    body: `Apexia has always been that club everyone wishes to join their core team. The work of perfect planning before coming into the limelight has always impressed me. Really defining their tag line...'not your average college club'. Great team! All the best guys`,
    img: "/images/testimonials/Frame 6.webp",
  },
  {
    name: "Parshva Shah",
    role: "Managing Director",
    compony: "Instinkt Media Private Limited",
    body: `Working with Apexia has been an exceptional experience. The team they've assembled is truly outstanding, bringing together diverse skills in coding, marketing, and UI design. Their expertise and collaborative spirit have consistently delivered impressive results, making them a top choice for any project.`,
    img: "/images/testimonials/Frame 7.webp",
  },
  {
    name: "Venish Sureliya",
    role: "Graphic Designer",
    compony: "Influencers & Sports Teams",
    body: `A wonderful team of highly talented individuals. We were glad to have Apexia as our partners and the experience they provided to the participants with their expertise and friendliness is very remarkable. And there can't be any comparison with the production quality whether it's website, social media post or a video.`,
    img: "/images/testimonials/Frame 8.webp",
  },
];

const firstRow = reviews.slice(0, ((reviews.length / 2) + 1));
const secondRow = reviews.slice((reviews.length / 2) - 1);

const ReviewCard = ({
  img,
  name,
  role,
  body,
  compony,
}: {
  img: string;
  name: string;
  role: string;
  body: string;
  compony: string;
}) => {
  return (
    <figure
      className={cn(
        "relative w-96 max-sm:w-72 cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
      )}
    >
      <div className="flex flex-row items-center gap-2">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className="rounded-full" width="48" height="48" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm max-sm:text-xs font-medium dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs max-sm:text-[10px] font-medium dark:text-white/40">{role}</p>
          <p className="text-xs max-sm:text-[10px] font-medium dark:text-white/40">{compony}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm max-sm:text-xs">{body}</blockquote>
    </figure>
  );
};

export function MarqueeDemo() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden md:shadow-xl">
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review, index) => (
          <ReviewCard key={index} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((review, index) => (
          <ReviewCard key={index} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
    </div>
  );
}
