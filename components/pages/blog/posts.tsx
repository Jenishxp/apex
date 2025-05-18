"use client";

import { Button } from "@/components/ui/button";
import BlogCard from "@/components/pages/blog/card";
import { getPosts } from "@/lib/pages/blog/requests";
import BlurFade from "@/components/magicui/blur-fade";
import { useInfiniteQuery } from "@tanstack/react-query";

export default function Posts() {
    const { data, hasNextPage, fetchNextPage, isFetching } = useInfiniteQuery({
        queryKey: ["posts"],
        queryFn: getPosts,
        getNextPageParam: (lastPage) =>
            lastPage.length < 9 ? undefined : lastPage[lastPage.length - 1].cursor,
        initialPageParam: "",
    });

    return (
        <>
            {data?.pages.map((group) =>
                group?.map((post, index) =>
                    <BlurFade
                        inView
                        key={post.cursor}
                        delay={0.25 + index * 0.05}
                    >
                        <BlogCard post={post.node} />
                    </BlurFade>
                )
            )}
            <div className="col-span-1 lg:col-span-3 w-full flex justify-center my-5">
                <Button
                    className="w-full bg-transparent"
                    variant="outline"
                    disabled={!hasNextPage || isFetching}
                    onClick={() => fetchNextPage()}
                >
                    {isFetching
                        ? "Loading..."
                        : hasNextPage
                            ? "Load more"
                            : "That's all for today!"}
                </Button>
            </div>
        </>
    );
}
