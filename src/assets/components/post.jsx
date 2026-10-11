import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AiOutlineDislike, AiOutlineLike } from "react-icons/ai";
import { IoArrowRedoOutline } from "react-icons/io5";

function Post() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Store comment counts
  const [commentCounts, setCommentCounts] = useState({});

  const navigate = useNavigate();

  // ================================
  // GET ALL POSTS
  // ================================

  const getPosts = async () => {
    try {
      const response = await axios.get(
        "https://blog-reddit.onrender.com/api/post/all"
      );

      console.log("Posts response:", response.data);

      const allPosts = response.data.data || [];

      setPosts(allPosts);

      // Get comments for every post
      getCommentCounts(allPosts);

    } catch (error) {
      console.log("Get posts error:", error);
    } finally {
      setLoading(false);
    }
  };

  // ================================
  // GET COMMENT COUNTS
  // ================================

  const getCommentCounts = async (allPosts) => {
    try {
      const counts = {};

      await Promise.all(
        allPosts.map(async (post) => {
          try {
            const response = await axios.get(
              `https://blog-reddit.onrender.com/api/comment/${post._id}`
            );

            const comments = response.data.data || [];

            counts[post._id] = comments.length;
          } catch (error) {
            console.log(
              `Comment error for post ${post._id}:`,
              error
            );

            counts[post._id] = 0;
          }
        })
      );

      setCommentCounts(counts);

    } catch (error) {
      console.log("Get comment counts error:", error);
    }
  };

  // ================================
  // LOAD POSTS
  // ================================

  useEffect(() => {
    getPosts();
  }, []);

  // ================================
  // LIKE POST
  // ================================

  const handleLike = async (e, postId) => {
    e.stopPropagation();

    const token = localStorage.getItem("token");

    if (!token) {
      alert("Please login first");
      return;
    }

    try {
      const response = await axios.put(
        `https://blog-reddit.onrender.com/api/post/like/${postId}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log("Like response:", response.data);

      // Get updated posts
      getPosts();

    } catch (error) {
      console.log("Like error:", error);

      if (error.response) {
        alert(
          error.response.data?.message ||
            "Unable to like post"
        );
      }
    }
  };

  // ================================
  // DISLIKE POST
  // ================================

  const handleDislike = async (e, postId) => {
    e.stopPropagation();

    const token = localStorage.getItem("token");

    if (!token) {
      alert("Please login first");
      return;
    }

    try {
      const response = await axios.put(
        `https://blog-reddit.onrender.com/api/post/dislike/${postId}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log("Dislike response:", response.data);

      // Get updated posts
      getPosts();

    } catch (error) {
      console.log("Dislike error:", error);

      if (error.response) {
        alert(
          error.response.data?.message ||
            "Unable to dislike post"
        );
      }
    }
  };

  // ================================
  // LOADING
  // ================================

  if (loading) {
    return (
      <div className="text-center text-gray-400 py-10">
        Loading posts...
      </div>
    );
  }

  // ================================
  // NO POSTS
  // ================================

  if (posts.length === 0) {
    return (
      <div className="text-center text-gray-400 py-10">
        No posts yet.
      </div>
    );
  }

  // ================================
  // POSTS
  // ================================

  return (
    <article className="w-full mx-auto">

      {posts.map((post) => (

        <section
          onClick={() =>
            navigate(`/singlepost/${post._id}`)
          }
          key={post._id}
          className="
            mt-4
            rounded-xl
            border
            border-[#263330]
            bg-[#0b0f12]
            overflow-hidden
            cursor-pointer
          "
        >

          {/* ================================
              POST HEADER
          ================================= */}

          <div className="flex items-center justify-between px-5 pt-4">

            <div className="flex items-center gap-2">

              <div className="w-8 h-8 rounded-full bg-[#ff4500] flex items-center justify-center">

                <span className="text-white text-sm font-bold">
                  r/
                </span>

              </div>

              <div>

                <p className="text-sm font-semibold text-gray-200">
                  r/nigerianfood
                </p>

                <p className="text-xs text-gray-500">

                  {new Date(
                    post.createdAt
                  ).toLocaleDateString()}

                </p>

              </div>

            </div>

            <button
              onClick={(e) => e.stopPropagation()}
              className="
                bg-white
                hover:bg-gray-200
                text-black
                py-2
                px-5
                text-sm
                font-semibold
                rounded-full
              "
            >
              Join
            </button>

          </div>

          {/* ================================
              POST TITLE + CONTENT
          ================================= */}

          <div className="px-5 pt-4 pb-5">

            <p className="text-2xl font-semibold leading-8 text-gray-100">
              {post.title}
            </p>

            {post.content && (
              <p className="mt-3 text-gray-300 text-base leading-6">
                {post.content}
              </p>
            )}

          </div>

          {/* ================================
              POST IMAGE
          ================================= */}

          {post.image?.url && (

            <div className="w-full bg-black">

              <img
                src={post.image.url}
                alt={post.title}
                className="
                  block
                  w-full
                  max-h-[600px]
                  object-contain
                "
              />

            </div>

          )}

          {/* ================================
              ACTIONS
          ================================= */}

          <div className="flex items-center gap-3 px-5 py-4">

            {/* LIKE / DISLIKE */}

            <div
              className="
                flex
                items-center
                gap-3
                rounded-full
                bg-[#272e32]
                hover:bg-[#343c40]
                px-4
                py-2
                text-sm
                text-gray-200
              "
              onClick={(e) => e.stopPropagation()}
            >

              {/* LIKE */}

              <button
                onClick={(e) =>
                  handleLike(e, post._id)
                }
                className="
                  text-lg
                  hover:text-orange-500
                  transition
                "
              >
                <AiOutlineLike />
              </button>

              {/* LIKE COUNT */}

              <span className="font-semibold">
                {post.likes?.length || 0}
              </span>

              {/* DISLIKE */}

              <button
                onClick={(e) =>
                  handleDislike(e, post._id)
                }
                className="
                  text-lg
                  hover:text-blue-400
                  transition
                "
              >
                <AiOutlineDislike />
              </button>

            </div>

            {/* ================================
                COMMENTS
            ================================= */}

            <button
              onClick={(e) => {
                e.stopPropagation();
                navigate(`/singlepost/${post._id}`);
              }}
              className="
                rounded-full
                bg-[#272e32]
                hover:bg-[#343c40]
                px-5
                py-2
                text-sm
                text-gray-200
              "
            >
              💬 {commentCounts[post._id] || 0}
            </button>

            {/* ================================
                SHARE
            ================================= */}

            <button
              onClick={(e) => e.stopPropagation()}
              className="
                flex
                gap-1
                rounded-full
                bg-[#272e32]
                hover:bg-[#343c40]
                px-5
                py-2
                text-sm
                text-gray-200
              "
            >
              <IoArrowRedoOutline />
              Share
            </button>

          </div>

        </section>

      ))}

    </article>
  );
}

export default Post;