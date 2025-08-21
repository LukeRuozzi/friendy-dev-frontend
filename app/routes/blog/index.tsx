import React, {useState} from 'react';
import type {Route} from "../../../.react-router/types/app/routes/blog/+types";
import type {Post, StrapiPost, StrapiResponse} from "~/types";
import PostCard from "~/components/PostCard";
import Pagination from "~/components/Pagination";
import PostFilter from "~/components/PostFilter";

export async function loader({request}: Route.LoaderArgs): Promise<{ posts: Post[] }> {
    const res = await fetch(`${import.meta.env.VITE_API_URL}/posts?populate=image&sort=date:desc`);

    if (!res.ok) throw new Error('Failed to fetch data');

    const json: StrapiResponse<StrapiPost> = await res.json();

    const posts: Post[] = json.data.map(post => ({
        id: post.id,
        documentId: post.documentId,
        title: post.title,
        excerpt: post.excerpt,
        slug: post.slug,
        date: post.date,
        body: post.body,
        image: post.image?.url ? `${post.image.url}` : '/images/no-image.png',
    }));

    return {posts};
}

const BlogPage = ({loaderData}: Route.ComponentProps) => {

    const {posts} = loaderData;

    const [currentPage, setCurrentPage] = useState(1);
    const [searchQuery, setSearchQuery] = useState('');

    const postsPerPage = 10;

    const filteredPosts = posts.filter((post: Post) => {
        const query = searchQuery.toLowerCase();
        return post.title.toLowerCase().includes(query) || post.excerpt.toLowerCase().includes(query);
    });

    const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
    const lastIndex = postsPerPage * currentPage;
    const currentPosts = filteredPosts.slice(lastIndex - postsPerPage, lastIndex);

    return (
        <div className="max-w-3xl mx-auto mt-10 p-6 bg-gray-900">
            <h2 className="text-3xl font-bold text-white mb-8">
                Blog
            </h2>
            <PostFilter
                searchQuery={searchQuery}
                onSearchChange={(query) => {
                    setSearchQuery(query);
                    setCurrentPage(1);
                }}
            />

            <div className="space-y-8">
                {currentPosts.length === 0 ? (
                    <p className="text-center text-gray-400">
                        No posts found
                    </p>
                ) : (
                    currentPosts.map((post: Post) => (
                        <PostCard key={post.slug} post={post}/>
                    ))
                )}
            </div>

            {totalPages > 1 && (
                <Pagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={(pageNum) => setCurrentPage(pageNum)}
                />
            )}
        </div>
    );
};

export default BlogPage;