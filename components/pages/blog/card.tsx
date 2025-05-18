"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import NextImage from "@/components/NextImage";
import { PostMetadata } from "@/types/blogData";
import { GlowingCard } from "@/components/aceternity/glowing-card";

type Props = {
    post: PostMetadata;
};

export default function BlogCard({ post }: Props) {
    return (
        <GlowingCard borderRadius="rounded-xl" borderColor="border-[#ffffff]/[0.2] border-2">
            <div className="flex flex-col group p-1 max-sm:p-0">
                <div className="flex flex-col gap-4">
                    <div className="rounded-md max-sm:rounded overflow-hidden border group-hover:scale-95 transition duration-200">
                        <NextImage
                            src={post.coverImage.url}
                            alt={post.title}
                            width={1024}
                            height={1024}
                            className="rounded-md max-sm:rounded w-full aspect-video"
                        />
                    </div>
                    <div className="flex flex-col gap-2">
                        <div className="flex gap-2 items-center">
                            {post?.author.profilePicture && (
                                <div className="overflow-hidden">
                                    <NextImage
                                        width={128}
                                        height={128}
                                        alt={post.author.name}
                                        src={post.author.profilePicture}
                                        className="h-7 w-7 rounded-full border border-[#333333]"
                                    />
                                </div>
                            )}{" "}
                            {post.author.name}
                        </div>
                        <div className="flex flex-col">
                            <h2 className="flex text-lg max-sm:text-base font-semibold transition duration-200 items-center gap-2">
                                {post.title}
                            </h2>
                            <p className="text-sm max-sm:text-xs truncate">{post.subtitle}</p>
                        </div>
                        <div className="flex justify-between">
                            <Link href={`https://apexiablog.hashnode.dev/${post.slug}`} target="_blank">
                                <button className="flex items-center rounded-sm bg-white text-black text-sm max-sm:text-xs px-2 py-1 font-medium hover:scale-105 duration-200">
                                    Read Blog <ArrowUpRight size={14} className="ml-1" />
                                </button>
                            </Link>
                            <div className="flex gap-1">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </GlowingCard>
    );
}