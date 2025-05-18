import type { QueryFunctionContext } from "@tanstack/react-query";

export type PublicationName = {
    publication: {
        title: string;
        displayTitle?: string;
        favicon?: string;
    };
};

export type PostMetadata = {
    title: string;
    slug: string;
    subtitle: string;
    coverImage: {
        url: string;
    };
    author: {
        name: string;
        profilePicture?: string;
    };
};

type GetPostsResponse = {
    publication: {
        posts: {
            edges: {
                node: PostMetadata;
                cursor: string;
            }[];
        };
    };
};

type GetPostsFunctionArgs = {
    first: number;
    after: string;
};

export type GetPostsArgs = QueryFunctionContext & GetPostsArgs;

export type GetPostBySlugResponse = {
    publication: {
        post: {
            title: string;
            subtitle?: string;
            coverImage: {
                url: string;
            };
            content: {
                html: string;
            };
            author: {
                name: string;
                profilePicture?: string;
            };
        };
    };
};