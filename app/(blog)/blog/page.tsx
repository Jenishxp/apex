import { PostMetadata } from "@/types/blogData";
import Posts from "@/components/pages/blog/posts";
import { getPosts } from "@/lib/pages/blog/requests";
import {
    HydrationBoundary,
    QueryClient,
    dehydrate,
} from "@tanstack/react-query";
import BlurFade from "@/components/magicui/blur-fade";

import GradualSpacing from "@/components/magicui/gradual-spacing";

export default async function BlogPage() {
    const queryClient = new QueryClient();

    await queryClient.prefetchInfiniteQuery({
        queryKey: ["posts"],
        queryFn: getPosts,
        getNextPageParam: (
            lastPage: {
                node: PostMetadata;
                cursor: string;
            }[]
        ) =>
            lastPage.length < 9 ? undefined : lastPage[lastPage.length - 1].cursor,
        initialPageParam: "",
    });

    return (
        <div className="max-w-[85vw] w-full mx-auto min-h-screen">
            <div className="pt-40 pb-8 flex flex-col gap-2 max-sm:items-center">
                <GradualSpacing
                    text="Get Apexia’s Insight"
                    className="text-4xl max-sm:text-2xl font-semibold"
                />
                <BlurFade>
                    <h2 className="text-base max-sm:text-xs text-[#CCCCCC]">
                        {`Because who says learning can't be entertaining?`}
                    </h2>
                </BlurFade>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                <HydrationBoundary state={dehydrate(queryClient)}>
                    <Posts />
                </HydrationBoundary>
            </div>
        </div>
    );
}
