import { Metadata } from "next";
import { twMerge } from "tailwind-merge";
import { type ClassValue, clsx } from "clsx";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
export function absoluteUrl(path: string) {
  return `${process.env.NEXT_PUBLIC_APP_URL}${path}`;
}

export function constructMetadata({
  title = "Apexia",
  description = "Apexia is a community of like-minded individuals who are passionate about technology and innovation. We are a group of students, professionals, and enthusiasts who are dedicated to learning and growing together. We believe in the power of collaboration and the impact of technology on the world. We are committed to creating a space where everyone can learn, grow, and thrive. Join us on our journey to turn bits to brilliance!",
  image = absoluteUrl("/api/og"),
  ...props
}: {
  title?: string;
  description?: string;
  image?: string;
  [key: string]: Metadata[keyof Metadata];
}): Metadata {
  return {
    title,
    description,
    keywords: [
      "React",
      "Tailwind CSS",
      "Framer Motion",
      "Landing Page",
      "Components",
      "Next.js",
    ],
    openGraph: {
      title,
      description,
      type: "website",
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
      creator: "@Code_Parth",
    },
    icons: "/favicon.ico",
    metadataBase: new URL("https://apeia.tech"),
    authors: [
      {
        name: "dillionverma",
        url: "https://twitter.com/apexia_club",
      },
    ],
    creator: "CodeParth",
    ...props,
  };
}