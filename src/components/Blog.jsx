import React, { useState, useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";

const BlogPosts = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [cookieWarning, setCookieWarning] = useState(false);

  useEffect(() => {
    AOS.init();

    const fetchPosts = async () => {
      try {
        setIsLoading(true);
        setError(null);
        setCookieWarning(false);

        const response = await fetch('/.netlify/functions/medium-fetch', {
          credentials: 'same-origin' // This ensures cookies are sent only to same origin
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const responseText = await response.text();
        const parser = new DOMParser();
        const xml = parser.parseFromString(responseText, "text/xml");

        const items = xml.getElementsByTagName("item");

        const postsArray = Array.from(items).map(item => {
          const title = item.getElementsByTagName("title")[0]?.textContent || '';
          const link = item.getElementsByTagName("link")[0]?.textContent || '';

          let contentSnippet = '';
          const contentEncoded = item.getElementsByTagName("content:encoded")[0]?.textContent || '';
          const description = item.getElementsByTagName("description")[0]?.textContent || '';

          if (contentEncoded) {
            const tempDiv = document.createElement('div');
            tempDiv.innerHTML = contentEncoded;
            contentSnippet = tempDiv.textContent || tempDiv.innerText || '';

            // Extract the first image URL from content:encoded
            const imgTag = tempDiv.querySelector('img');
            var thumbnail = imgTag ? imgTag.src : 'https://via.placeholder.com/150'; // Default placeholder image
          } else if (description) {
            const tempDiv = document.createElement('div');
            tempDiv.innerHTML = description;
            contentSnippet = tempDiv.textContent || tempDiv.innerText || '';

            // Attempt to extract image from description (as fallback)
            const imgTag = tempDiv.querySelector('img');
            var thumbnail = imgTag ? imgTag.src : 'https://via.placeholder.com/150'; // Default placeholder image
          }

          contentSnippet = contentSnippet.substring(0, 150) + '...';

          return {
            title: title.trim(),
            link: link.trim(),
            contentSnippet: contentSnippet.trim(),
            thumbnail: thumbnail
          };
        }).filter(post => post.title && post.link && post.contentSnippet);

        setPosts(postsArray);
      } catch (error) {
        console.error('Error fetching Medium posts:', error);
        setError(error.message);

        // Check if the error might be related to cookie settings
        if (error.message.includes('cookie') || error.message.includes('SameSite')) {
          setCookieWarning(true);
        }
      } finally {
        setIsLoading(false);
      }
    };

    fetchPosts();
  }, []);

  return (
    <section 
      id="blog"
      className="p-5 mx-20 min-h-screen font-['Poppins'] max-sm:p-2 max-sm:mx-5"
    >
      <div className="mt-20" data-aos="fade-down">
        <h1 className="text-[#00040f] dark:text-slate-300 text-center font-extrabold text-5xl mb-5 max-sm:text-4xl">
          Blog Posts
        </h1>

        {cookieWarning && (
          <div className="mb-4 p-4 bg-yellow-100 text-yellow-800 rounded-md">
            Your browser settings might affect the display of blog posts. Consider enabling third-party cookies for full functionality.
          </div>
        )}

        {isLoading && (
          <div className="text-center text-gray-600 dark:text-gray-400">
            Loading...
          </div>
        )}
        
        {error && !cookieWarning && (
          <div className="text-red-500 text-center">
            Error fetching blog posts: {error}
          </div>
        )}
        
        {!isLoading && !error && posts.length === 0 && (
          <div className="text-center text-gray-600 dark:text-gray-400">
            No posts found.
          </div>
        )}

        {posts.length > 0 && (
          <div 
            className="mt-16 grid gap-10 grid-cols-2 max-sm:grid-cols-1"
            data-aos="zoom-out-down"
          >
            {posts.map((post, index) => (
              <div key={index} className="shadow-2xl rounded-3xl bg-[#e1e1e1] dark:bg-transparent border-[#00040f] h-[480px] max-sm:h-[480px] p-5 hover:bg-gradient-to-tl from-[#e1e1e1] to-[#fff] dark:from-[#00040F] dark:to-[#0B274C] flex flex-col">
                <img 
                  src={post.thumbnail} 
                  alt={post.title} 
                  className="w-full h-40 object-cover rounded-lg mb-4"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-4 text-[#00040f] dark:text-slate-300">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    {post.contentSnippet}
                  </p>
                  <a 
                    href={post.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                  >
                    Read More
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default BlogPosts;
