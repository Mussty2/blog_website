import { useEffect, useState } from "react";
import axios from "axios";

import {
  FaUserCircle,
  FaImage,
  FaShare,
  FaPlus,
  FaEye,
  FaChevronRight,
  FaSlidersH,
  FaMedal,
  FaEllipsisH,
  FaCommentAlt,
  FaArrowUp,
  FaArrowDown,
} from "react-icons/fa";

import { Link, useNavigate } from "react-router-dom";

import Sidebar from "../components/sidebar2";
import Navbar2 from "../components/navbar";

function Profile() {
  const navigate = useNavigate();

  // ================================
  // USER
  // ================================

  const savedUser = localStorage.getItem("user");

  const user = savedUser ? JSON.parse(savedUser) : null;

  // ================================
  // USER INFORMATION
  // ================================

  const firstname = user?.firstname || "User";
  const lastname = user?.lastname || "";

  const fullName = `${firstname} ${lastname}`.trim();

  const username = user?.username
    ? `u/${user.username}`
    : `u/${firstname.toLowerCase()}`;

  const email = user?.email || "";

  // ================================
  // POSTS
  // ================================

  const [posts, setPosts] = useState([]);
  const [loadingPosts, setLoadingPosts] = useState(true);

  // ================================
  // GET USER POSTS
  // ================================

  const getUserPosts = async () => {
    try {
      setLoadingPosts(true);

      const response = await axios.get(
        "https://blog-reddit.onrender.com/api/post/all"
      );

      console.log("All posts:", response.data);

      const allPosts = response.data.data || [];

      // Only posts belonging to logged-in user
      const userPosts = allPosts.filter((post) => {
        return (
          post.author?._id?.toString() === user?._id?.toString()
        );
      });

      console.log("User posts:", userPosts);

      setPosts(userPosts);
    } catch (error) {
      console.log("Get user posts error:", error);
    } finally {
      setLoadingPosts(false);
    }
  };

  // ================================
  // LOAD POSTS
  // ================================

  useEffect(() => {
    if (user?._id) {
      getUserPosts();
    } else {
      setLoadingPosts(false);
    }
  }, []);

  return (
    <div className="min-h-screen bg-[#0b0f10] text-white">

      {/* ================= NAVBAR ================= */}

      <Navbar2 />

      {/* ================= SIDEBAR ================= */}

      <Sidebar />

      {/* ================= MAIN CONTENT ================= */}

      <div className="ml-[326px] pt-[70px] px-5">

        <div className="flex gap-4">

          {/* ================================================= */}
          {/* LEFT / MAIN PROFILE CONTENT */}
          {/* ================================================= */}

          <main className="flex-1 min-w-0">

            {/* ================= PROFILE HEADER ================= */}

            <div className="flex items-center gap-3 py-3">

              {/* Profile Image */}

              <div className="relative">

                <div className="w-[60px] h-[60px] rounded-full bg-purple-400 flex items-center justify-center overflow-hidden">

                  <FaUserCircle className="text-purple-900 text-[55px]" />

                </div>

                <button
                  className="
                    absolute
                    bottom-0
                    right-0
                    bg-[#24292b]
                    rounded-full
                    p-1.5
                    border
                    border-[#0b0f10]
                  "
                >
                  <FaImage className="text-white text-xs" />
                </button>

              </div>

              {/* Username */}

              <div>

                <h1 className="text-[23px] font-bold text-[#c9d7df]">
                  {fullName}
                </h1>

                <p className="text-sm text-[#9da7ad]">
                  {username}
                </p>

              </div>

            </div>

            {/* ================= PROFILE TABS ================= */}

            <div className="flex items-center gap-1  mt-1 overflow-x-auto">

              <ProfileTab active>
                Overview
              </ProfileTab>

              <ProfileTab>
                Posts
              </ProfileTab>

              <ProfileTab>
                Comments
              </ProfileTab>

              <ProfileTab>
                Saved
              </ProfileTab>

              <ProfileTab>
                History
              </ProfileTab>

              <ProfileTab>
                Hidden
              </ProfileTab>

              <ProfileTab>
                Upvoted
              </ProfileTab>

              <button className="px-3 py-3 text-[#aeb7bc]">
                <FaEllipsisH />
              </button>

            </div>

            {/* ================= SHOWING ALL CONTENT ================= */}

            <div className="mt-4 bg-black rounded-xl px-4 py-3 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <FaEye className="text-[#aeb7bc] text-sm" />
               <span className="text-sm text-[#c5cbd0]">
                  Showing all content
                </span>
              </div>
              <FaChevronRight className="text-[#aeb7bc] text-sm" />

            </div>

            {/* ================= CREATE POST ================= */}

            <div className="flex items-center gap-2 mt-3">

              <Link to="/createpost" className="border border-[#687278] rounded-full px-4 py-1.5 flex items-center gap-2 text-sm hover:bg-[#1b2022]">
                <FaPlus />
                Create Post
              </Link>

              <button className="p-2 rounded-full hover:bg-[#1b2022]">
                <FaSlidersH />
              </button>

            </div>

            {/* ================================================= */}
            {/* USER POSTS */}
            {/* ================================================= */}

            <div className="border-t border-[#252a2d] mt-4 pt-4">

              {/* Loading */}

              {loadingPosts && (
                <div className="text-center py-16 text-gray-400">
                  Loading your posts...
                </div>
              )}

              {/* No posts */}

              {!loadingPosts && posts.length === 0 && (

                <div className="flex flex-col items-center justify-center text-center pt-12">

                  {/* Reddit empty icon */}

                  <div className="relative mb-4">

                    <div className="w-24 h-16 bg-white rounded-[50%] flex items-center justify-center">

                      <div className="flex gap-4">

                        <div className="w-4 h-4 bg-[#ff4500] rounded-full"></div>

                        <div className="w-4 h-4 bg-[#ff4500] rounded-full"></div>

                      </div>

                    </div>

                    <div className="absolute -top-4 right-2 w-7 h-7 bg-white rounded-full"></div>

                  </div>

                  <h2 className="text-xl font-bold text-white">
                    You don't have any posts yet
                  </h2>

                  <p className="text-[#91999e] text-base max-w-[600px] mt-2">

                    Once you post a community, it'll show up here.
                    If you'd rather hide your posts, update your settings.

                  </p>

                  <Link
                    to="/createpost"
                    className="
                      mt-4
                      bg-white
                      text-black
                      font-semibold
                      px-5
                      py-2.5
                      rounded-full
                      hover:bg-gray-200
                    "
                  >
                    Create Post
                  </Link>

                </div>

              )}

              {/* ================= USER POSTS ================= */}

              {!loadingPosts && posts.length > 0 && (

                <div className="space-y-3">

                  {posts.map((post) => (

                    <article
                      key={post._id}
                      onClick={() =>
                        navigate(`/singlepost/${post._id}`)
                      }
                      className="
                        bg-[#111719]
                        border
                        border-[#293330]
                        rounded-xl
                        overflow-hidden
                        cursor-pointer
                        hover:border-[#46534f]
                        transition
                      "
                    >

                      {/* ================= POST HEADER ================= */}

                      <div className="px-4 pt-3">

                        <div className="flex items-center gap-2">

                          <div className="w-7 h-7 rounded-full bg-purple-400 flex items-center justify-center">

                            <FaUserCircle className="text-purple-900 text-xl" />

                          </div>

                          <div>

                            <p className="text-sm font-semibold">
                              {fullName}
                            </p>

                            <p className="text-xs text-gray-500">

                              {post.createdAt
                                ? new Date(
                                    post.createdAt
                                  ).toLocaleDateString()
                                : ""
                              }

                            </p>

                          </div>

                        </div>

                      </div>

                      {/* ================= POST CONTENT ================= */}

                      <div className="px-4 py-3">

                        <h2 className="text-lg font-bold text-white">
                          {post.title}
                        </h2>

                        <p className="text-sm text-gray-300 mt-1 whitespace-pre-wrap">
                          {post.content}
                        </p>

                      </div>

                      {/* ================= IMAGE ================= */}

                      {post.image && (

                        <div className="px-4 pb-3">

                          <img
                            src={post.image}
                            alt={post.title}
                            className="
                              w-full
                              max-h-[400px]
                              object-cover
                              rounded-xl
                            "
                          />

                        </div>

                      )}

                      {/* ================= POST ACTIONS ================= */}

                      <div
                        className="
                          flex
                          items-center
                          gap-2
                          px-4
                          py-3
                          border-t
                          border-[#293330]
                        "
                      >

                        {/* Likes */}

                        <div
                          className="
                            flex
                            items-center
                            gap-2
                            bg-[#272e32]
                            rounded-full
                            px-3
                            py-1.5
                          "
                        >

                          <FaArrowUp className="text-gray-300 text-sm" />

                          <span className="text-sm font-semibold">

                            {post.likes?.length || 0}

                          </span>

                          <FaArrowDown className="text-gray-300 text-sm" />

                        </div>

                        {/* Comments */}

                        <div
                          className="
                            flex
                            items-center
                            gap-2
                            bg-[#272e32]
                            rounded-full
                            px-3
                            py-1.5
                          "
                        >

                          <FaCommentAlt className="text-sm" />

                          <span className="text-sm">

                            {post.comments?.length || 0}

                          </span>

                        </div>

                      </div>

                    </article>

                  ))}

                </div>

              )}

            </div>

          </main>

          {/* ================================================= */}
          {/* RIGHT PROFILE CARD */}
          {/* ================================================= */}

          <aside className="w-[300px] shrink-0">

            <div className="bg-black rounded-2xl overflow-hidden">

              {/* ================= COVER IMAGE ================= */}

              <div
                className="
                  h-[85px]
                  bg-gradient-to-b
                  from-[#e5e5e5]
                  via-[#555]
                  to-black
                  relative
                "
              >

                <button
                  className="
                    absolute
                    top-3
                    right-3
                    bg-[#292d2f]
                    p-2
                    rounded-full
                  "
                >
                  <FaImage className="text-sm" />
                </button>

              </div>

              {/* ================= PROFILE CARD CONTENT ================= */}

              <div className="px-4 pb-5">

                <h2 className="text-lg font-bold mt-4">
                  {fullName}
                </h2>

                <p className="text-xs text-[#8d969b] mt-1">
                  {email}
                </p>

                {/* Share */}

                <button
                  className="
                    mt-4
                    bg-[#2b3336]
                    px-3
                    py-1.5
                    rounded-full
                    flex
                    items-center
                    gap-2
                    text-sm
                    font-semibold
                    hover:bg-[#394145]
                  "
                >

                  <FaShare />

                  Share

                </button>

                {/* ================= STATS ================= */}

                <div className="grid grid-cols-2 gap-y-5 mt-5">

                  <Stat
                    number="0"
                    label="followers"
                  />

                  <Stat
                    number={user?.karma || 0}
                    label="Karma"
                  />

                  <Stat
                    number={posts.length}
                    label="Contributions"
                  />

                  <Stat
                    number="1 w"
                    label="Reddit Age"
                  />

                  <Stat
                    number="0"
                    label="Active in"
                  />

                  <Stat
                    number="0"
                    label="Gold earned"
                  />

                </div>

                {/* ================= ACHIEVEMENTS ================= */}

                <div className="border-t border-[#272b2d] mt-6 pt-4">

                  <h3 className="text-xs font-bold text-[#aeb7bc]">
                    ACHIEVEMENTS
                  </h3>

                  <div className="flex items-center gap-2 mt-3">

                    <div className="flex gap-1">

                      <div className="w-9 h-9 rounded-full bg-orange-400 flex items-center justify-center">

                        <FaMedal className="text-white text-lg" />

                      </div>

                      <div className="w-9 h-9 rounded-full bg-orange-400 flex items-center justify-center">

                        <FaMedal className="text-white text-lg" />

                      </div>

                      <div className="w-9 h-9 rounded-full bg-green-400 flex items-center justify-center">

                        <FaMedal className="text-white text-lg" />

                      </div>

                    </div>

                    <p className="text-xs text-[#b7bec2]">

                      Banana Baby, Banana Beginner,
                      Feed Finder, +2 more

                    </p>

                  </div>

                  <p className="text-xs text-[#8d969b] mt-2">
                    5 unlocked
                  </p>

                  <button
                    className="
                      float-right
                      -mt-5
                      bg-[#252b2e]
                      px-3
                      py-1.5
                      rounded-full
                      text-xs
                      font-semibold
                    "
                  >
                    View All
                  </button>

                </div>

                {/* ================= SETTINGS ================= */}

                <div className="border-t border-[#272b2d] mt-7 pt-4">

                  <h3 className="text-xs font-bold text-[#aeb7bc]">
                    SETTINGS
                  </h3>

                  <div className="flex items-center justify-between mt-4">

                    <div className="flex items-center gap-2">

                      <div className="w-8 h-8 rounded-full bg-purple-400 flex items-center justify-center">

                        <FaUserCircle className="text-purple-900 text-2xl" />

                      </div>

                      <div>

                        <p className="text-sm font-semibold">
                          Profile
                        </p>

                        <p className="text-[10px] text-[#8d969b]">
                          Customize your profile
                        </p>

                      </div>

                    </div>

                    <button
                      className="
                        bg-[#252b2e]
                        px-3
                        py-1.5
                        rounded-full
                        text-xs
                        font-semibold
                        hover:bg-[#343c40]
                      "
                    >
                      Update
                    </button>

                  </div>

                </div>

              </div>

            </div>

          </aside>

        </div>

      </div>

    </div>
  );
}

/* ================================================= */
/* PROFILE TAB */
/* ================================================= */

function ProfileTab({ children, active }) {
  return (
    <button
      className={`
        px-3
        py-3
        text-sm
        font-semibold
        whitespace-nowrap

        ${
          active
            ? "bg-[#405057] rounded-full text-white"
            : "text-[#aeb7bc] hover:text-white"
        }
      `}
    >
      {children}
    </button>
  );
}

/* ================================================= */
/* STAT */
/* ================================================= */

function Stat({ number, label }) {
  return (
    <div>

      <p className="text-base font-semibold">
        {number}
      </p>

      <p className="text-xs text-[#8d969b]">
        {label}
      </p>

    </div>
  );
}

export default Profile;