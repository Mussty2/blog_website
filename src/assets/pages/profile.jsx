import { useEffect, useState } from "react";
import axios from "axios";
import {
  FaUserCircle,
  FaPlus,
  FaCommentAlt,
  FaArrowUp,
} from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

import Sidebar from "../components/sidebar2";
import Navbar2 from "../components/navbar";

function Profile() {
  const navigate = useNavigate();

  // Get logged-in user
  const user = JSON.parse(localStorage.getItem("user") || "{}");

  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Get this user's posts
  useEffect(() => {
    const getPosts = async () => {
      try {
        const response = await axios.get(
          "https://blog-reddit.onrender.com/api/post/all"
        );

        const allPosts = response.data.data || [];
        const userId = user._id || user.id;

        const myPosts = allPosts.filter(
          (post) => {
            const authorId =
              typeof post.author === "object"
                ? post.author?._id
                : post.author;

            return String(authorId) === String(userId);
          }
        );

        setPosts(myPosts);
      } catch (error) {
        console.log("Error loading posts:", error);
      } finally {
        setLoading(false);
      }
    };

    getPosts();
  }, []);

  return (
    <div className="min-h-screen bg-[#0b0f10] text-white">
      <Navbar2 />
      <Sidebar />

      <main className="ml-[326px] pt-[90px] px-5 flex gap-5">
        {/* LEFT SIDE */}
        <section className="flex-1">
          {/* PROFILE */}
          <div className="flex items-center gap-3 mb-6">
            <FaUserCircle className="text-purple-400 text-6xl" />

            <div>
              <h1 className="text-2xl font-bold">
                {user.first_name} {user.last_name}
              </h1>

              <p className="text-gray-400">
                u/{user.first_name?.toLowerCase() || "user"}
              </p>

              <p className="text-sm text-gray-400">
                {user.email}
              </p>
            </div>
          </div>

          {/* CREATE POST */}
          <Link
            to="/createpost"
            className="inline-flex items-center gap-2 border border-gray-600 rounded-full px-4 py-2 mb-5 hover:bg-gray-800"
          >
            <FaPlus />
            Create Post
          </Link>

          <hr className="border-gray-700 mb-5" />

          {/* USER POSTS */}
          <h2 className="text-xl font-bold mb-4">My Posts</h2>

          {loading ? (
            <p className="text-gray-400">Loading posts...</p>
          ) : posts.length === 0 ? (
            <div className="text-center py-10">
              <p className="text-gray-300">
                You haven't created any posts yet.
              </p>

              <Link
                to="/createpost"
                className="inline-block mt-4 bg-white text-black rounded-full px-5 py-2 font-semibold"
              >
                Create your first post
              </Link>
            </div>
          ) : (
            posts.map((post) => (
              <article
                key={post._id}
                onClick={() =>
                  navigate(`/singlepost/${post._id}`)
                }
                className="bg-[#111719] border border-gray-700 rounded-xl p-4 mb-4 cursor-pointer hover:border-gray-500"
              >
                <div className="flex items-center gap-2 mb-3">
                  <FaUserCircle className="text-purple-400 text-2xl" />

                  <span className="font-semibold">
                    {user.first_name} {user.last_name}
                  </span>
                </div>

                <h3 className="text-lg font-bold mb-2">
                  {post.title}
                </h3>

                <p className="text-gray-300 whitespace-pre-wrap">
                  {post.content}
                </p>

                {post.image && (
                  <img
                    src={
                      typeof post.image === "string"
                        ? post.image
                        : post.image.url
                    }
                    alt={post.title}
                    className="w-full max-h-96 object-cover rounded-lg mt-3"
                  />
                )}

                <div className="flex gap-5 mt-4 text-gray-300">
                  <span className="flex items-center gap-2">
                    <FaArrowUp />
                    {post.likes?.length || 0}
                  </span>

                  <span className="flex items-center gap-2">
                    <FaCommentAlt />
                    {post.comments?.length || 0}
                  </span>
                </div>
              </article>
            ))
          )}
        </section>

        {/* RIGHT SIDE */}
        <aside className="w-[260px] h-fit bg-black rounded-xl p-5">
          <h2 className="text-lg font-bold mb-3">
            Profile Information
          </h2>

          <p className="text-gray-400 text-sm mb-4">
            {user.first_name} {user.last_name}
          </p>

          <p className="text-gray-400 text-sm mb-4">
            {user.email}
          </p>

          <p className="text-sm mb-2">
            Total Posts: {posts.length}
          </p>

          <Link
            to="/createpost"
            className="block text-center bg-white text-black rounded-full px-4 py-2 font-semibold mt-4"
          >
            Create Post
          </Link>
        </aside>
      </main>
    </div>
  );
}

export default Profile;
