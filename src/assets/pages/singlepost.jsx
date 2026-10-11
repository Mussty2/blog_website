
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

import Sidebar from "../components/sidebar2";
import Navbar2 from "../components/navbar";
import Community from "../components/community";

import { AiOutlineDislike, AiOutlineLike } from "react-icons/ai";
import { IoArrowRedoOutline } from "react-icons/io5";

function SinglePost() {
  const { id } = useParams();

  const [post, setPost] = useState(null);
  const [comments, setComments] = useState([]);
  const [commentText, setCommentText] = useState("");

  const [loading, setLoading] = useState(true);
  const [commentsLoading, setCommentsLoading] = useState(true);
  const [commentLoading, setCommentLoading] = useState(false);

  // =========================
  // GET SINGLE POST
  // =========================
  const getSinglePost = async () => {
    try {
      const response = await axios.get(
        `https://blog-reddit.onrender.com/api/post/${id}`
      );

      console.log("Single post:", response.data);

      setPost(response.data.data);
    } catch (error) {
      console.log("Get single post error:", error);
    } finally {
      setLoading(false);
    }
  };

  // =========================
  // GET COMMENTS
  // =========================
  const getComments = async () => {
    try {
      setCommentsLoading(true);

      const response = await axios.get(
        `https://blog-reddit.onrender.com/api/comment/${id}`
      );

      console.log("Comments response:", response.data);

      setComments(response.data.data || []);
    } catch (error) {
      console.log("Get comments error:", error);
    } finally {
      setCommentsLoading(false);
    }
  };

  // =========================
  // LOAD POST + COMMENTS
  // =========================
  useEffect(() => {
    getSinglePost();
    getComments();
  }, [id]);

  // =========================
  // ADD COMMENT
  // =========================
  const handleComment = async (e) => {
    e.preventDefault();

    if (!commentText.trim()) {
      alert("Please enter a comment");
      return;
    }

    const token = localStorage.getItem("token");

    if (!token) {
      alert("Please login first");
      return;
    }

    try {
      setCommentLoading(true);

      const response = await axios.post(
        `https://blog-reddit.onrender.com/api/comment/${id}`,
        {
          content: commentText,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log("Add comment response:", response.data);

      setCommentText("");

      // Get the updated comments
      getComments();
    } catch (error) {
      console.log("Add comment error:", error);

      if (error.response) {
        alert(
          error.response.data?.message || "Unable to add comment"
        );
      } else {
        alert("Unable to connect to the server");
      }
    } finally {
      setCommentLoading(false);
    }
  };

  // =========================
  // LOADING POST
  // =========================
  if (loading) {
    return (
      <div className="min-h-screen bg-[#001a16] flex items-center justify-center text-gray-400">
        Loading post...
      </div>
    );
  }

  // =========================
  // POST NOT FOUND
  // =========================
  if (!post) {
    return (
      <div className="min-h-screen bg-[#001a16] flex items-center justify-center text-gray-400">
        Post not found.
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#001a16] text-gray-200">

      {/* TOP */}
      <Navbar2 />

      {/* LEFT */}
      <Sidebar />

      {/* CENTER */}
      <main className="ml-[165px] mr-[190px] pt-[36px]">

        <div className="mx-auto w-[700px] px-2 py-4">

          {/* =========================
              POST
          ========================= */}
          <article className="w-full">

            <section className="mt-4 rounded-xl border border-[#263330] bg-[#0b0f12] overflow-hidden">

              {/* POST HEADER */}
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
                      {new Date(post.createdAt).toLocaleDateString()}
                    </p>
                  </div>

                </div>

                <button className="bg-white hover:bg-gray-200 text-black py-2 px-5 text-sm font-semibold rounded-full">
                  Join
                </button>

              </div>

              {/* TITLE */}
              <div className="px-5 pt-4 pb-5">

                <h1 className="text-2xl font-semibold leading-8 text-gray-100">
                  {post.title}
                </h1>

                {post.content && (
                  <p className="mt-4 text-gray-300 text-base leading-7">
                    {post.content}
                  </p>
                )}

              </div>

              {/* IMAGE */}
              {post.image?.url && (
                <div className="w-full bg-black">

                  <img
                    src={post.image.url}
                    alt={post.title}
                    className="block w-full max-h-[600px] object-contain"
                  />

                </div>
              )}

              {/* ACTIONS */}
              <div className="flex items-center gap-3 px-5 py-4">

                <button className="flex items-center gap-3 rounded-full bg-[#272e32] hover:bg-[#343c40] px-4 py-2 text-sm text-gray-200">

                  <span className="text-lg">
                    <AiOutlineLike />
                  </span>

                  <span className="font-semibold">
                    {post.likes?.length || 0}
                  </span>

                  <span className="text-lg">
                    <AiOutlineDislike />
                  </span>

                </button>

                {/* COMMENT COUNTER */}
                <button className="rounded-full bg-[#272e32] hover:bg-[#343c40] px-5 py-2 text-sm text-gray-200">
                  💬 {comments.length}
                </button>

                <button className="flex gap-1 rounded-full bg-[#272e32] hover:bg-[#343c40] px-5 py-2 text-sm text-gray-200">
                  <IoArrowRedoOutline />
                  Share
                </button>

              </div>

            </section>

          </article>

          {/* =========================
              COMMENT INPUT
          ========================= */}
          <form
            onSubmit={handleComment}
            className="mt-3"
          >

            <input
              type="text"
              value={commentText}
              onChange={(e) => setCommentText(e.target.value)}
              placeholder="Join the conversation"
              className="w-full h-[40px] rounded-full border border-[#1d4039] bg-[#0b0f12] px-4 text-sm outline-none text-gray-200 placeholder:text-gray-600"
            />

            <div className="flex items-center justify-between mt-2">

              <div className="flex items-center gap-3 text-xs text-gray-500">

                <span>
                  Sort by
                </span>

                <button
                  type="button"
                  className="hover:text-gray-300"
                >
                  Best ▼
                </button>

                <button
                  type="button"
                  className="border border-[#1d4039] rounded-full px-3 py-1"
                >
                  🔍 Search Comments
                </button>

              </div>

              <button
                type="submit"
                disabled={commentLoading}
                className="bg-white text-black rounded-full px-5 py-2 text-xs font-semibold hover:bg-gray-200 disabled:opacity-50"
              >
                {commentLoading ? "Posting..." : "Comment"}
              </button>

            </div>

          </form>

          {/* =========================
              COMMENTS
          ========================= */}
          <div className="mt-6">

            {commentsLoading ? (
              <p className="text-center text-gray-500 text-sm">
                Loading comments...
              </p>
            ) : comments.length === 0 ? (
              <p className="text-center text-gray-500 text-sm py-5">
                No comments yet. Be the first to comment.
              </p>
            ) : (
              <div className="space-y-3">

                {comments.map((comment) => (
                  <div
                    key={comment._id}
                    className="rounded-xl border border-[#263330] bg-[#0b0f12] p-4"
                  >

                    <div className="flex items-center gap-2">

                      <div className="w-7 h-7 rounded-full bg-[#ff4500] flex items-center justify-center">
                        <span className="text-xs font-bold text-white">
                          U
                        </span>
                      </div>

                      <div>
                        <p className="text-xs font-semibold text-gray-300">
                          {comment.user
                            ? `${comment.user.firstname} ${comment.user.lastname}`
                            : "User"}
                        </p>

                        <p className="text-[10px] text-gray-600">
                          {comment.createdAt
                            ? new Date(
                                comment.createdAt
                              ).toLocaleDateString()
                            : ""}
                        </p>
                      </div>

                    </div>

                    <p className="mt-3 text-sm text-gray-300 leading-6">
                      {comment.content}
                    </p>

                  </div>
                ))}

              </div>
            )}

          </div>

        </div>

      </main>

      {/* RIGHT */}
      <Community />

    </div>
  );
}

export default SinglePost;

