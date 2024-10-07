import React, { useState, useEffect } from 'react';
import Parser from 'rss-parser';

const BlogPosts = () => {
  const [posts, setPosts] = useState([]);
  const mediumRSS = "https://medium.com/feed/@Product_Mastery_Hub";

  useEffect(() => {
    const parser = new Parser();
    const fetchPosts = async () => {
      const feed = await parser.parseURL(mediumRSS);
      setPosts(feed.items);
    };
    fetchPosts();
  }, []);

  return (
    <div className="blog-posts">
      <h2>My Blog Posts</h2>
      {posts.length > 0 ? (
        posts.map((post, index) => (
          <div className="post" key={index}>
            <h3>{post.title}</h3>
            <p>{post.contentSnippet}</p>
            <a href={post.link} target="_blank" rel="noopener noreferrer">Read More</a>
          </div>
        ))
      ) : (
        <p>Loading posts...</p>
      )}
    </div>
  );
};

export default BlogPosts;

