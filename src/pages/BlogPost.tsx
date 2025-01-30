import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { blogPosts } from '../data/blogPosts';
import SEO from '../components/SEO';

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find(p => p.slug === slug);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  return (
    <>
      <SEO 
        title={post.title}
        description={post.excerpt}
        canonical={`/blog/${post.slug}`}
      />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <article>
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-64 object-cover rounded-lg shadow-lg"
          />
          
          <div className="mt-8">
            <time className="text-gray-500">{post.date}</time>
            <h1 className="mt-2 text-4xl font-bold text-gray-900">{post.title}</h1>
            <div className="mt-6 prose prose-indigo prose-lg">
              {post.content}
            </div>
          </div>
        </article>
      </div>
    </>
  );
};

export default BlogPost;