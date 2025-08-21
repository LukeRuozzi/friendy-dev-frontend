import React from 'react';
import type {Route} from "../../../.react-router/types/app/routes/blog/+types/details";
import type {Post, StrapiPost, StrapiResponse} from "~/types";
import ReactMarkdown from "react-markdown";
import {Link} from "react-router";

export async function loader({request, params}: Route.LoaderArgs) {
    const {slug} = params;

    const res = await fetch(`${import.meta.env.VITE_API_URL}/posts?filters[slug][$eq]=${slug}&populate=image`)

    if (!res.ok) throw new Error('Failed to fetch post');

    const json: StrapiResponse<StrapiPost> = await res.json();

    if (!json.data.length) throw new Response('Not found', {status: 404});

    const item = json.data[0];

    const post = {
        id: item.id,
        title: item.title,
        body: item.body,
        excerpt: item.excerpt,
        slug: item.slug,
        date: item.date,
        image: item.image?.url ? `${item.image.url}` : '/images/no-image.png'
    }

    return {post};
}

const BlogDetails = ({loaderData}: Route.ComponentProps) => {

    const {
        post
    } = loaderData;

    return (
        <div className="max-w-3xl mx-auto px-6 py-12 bg-gray-900">
            <h1 className="text-3xl font-bold text-blue-400 mb-2">
                {post.title}
            </h1>

            <img src={post.image} alt={post.title} className="w-full h-64 object-cover mb-4" />

            <p className="text-sm text-gray-400 mb-6">
                {new Date(post.date).toDateString()}
            </p>
            <div className="prose prose-invert max-w-none mb-12">
                <ReactMarkdown>{post.body}</ReactMarkdown>
            </div>

            <Link to="/blog" className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg transition hover:bg-blue-700">
                Back to Posts
            </Link>
        </div>
    );
};

export default BlogDetails;