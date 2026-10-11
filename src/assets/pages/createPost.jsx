import { useState } from "react";

import {
  FaRedditAlien,
  FaSearch,
  FaAd,
  FaCommentAlt,
  FaPlusSquare,
  FaBell,
  FaBars,
  FaChevronDown,
  FaChevronUp,
  FaTag,
  FaImage,
  FaVideo,
  FaBold,
  FaItalic,
  FaStrikethrough,
  FaSuperscript,
  FaSubscript,
  FaLink,
  FaListUl,
  FaListOl,
  FaQuoteLeft,
  FaCode,
  FaCodeBranch,
  FaTable,
  FaEllipsisH,
} from "react-icons/fa";
import Navbar2 from "../components/navbar";
import axios from "axios";


function CreatePost() {

  const [communityOpen, setCommunityOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [community, setCommunity] = useState("");
  const [image, setImage] = useState(null); 
  const [loading, setLoading] = useState(false);

  const communities = [
    "r/nigerianfood",
    "r/FullStackDevelopers",
    "r/programming",
    "r/reactjs",
  ];


  const selectCommunity = (name) => {
    setCommunity(name);
    setCommunityOpen(false);
  };

const handlePost = async () => { 
  if (!title.trim()) { 
    alert("Please enter a title"); 
    return; } 
    if (!community) { 
      alert("Please select a community"); 
      return; 
    } 
      const token = localStorage.getItem("token"); 
      if (!token) { 
        alert("You need to login first"); 
        return;
       } 
       try { 
        setLoading(true); 
        // FormData because your backend uses upload.single("image") 
         const formData = new FormData(); 
         formData.append("title", title); 
         formData.append("content", body); 
         if (image) { 
         formData.append("image", image); 
         } 
        const response = await axios.post( "https://blog-reddit.onrender.com/api/post/add-post", formData,
           { headers: 
            { Authorization: `Bearer ${token}`, 
          }, 
        } 
        ); 
        console.log("Post created:", response.data); 
        alert("Post created successfully! 🎉"); 
        // Clear form 
         setTitle(""); 
         setBody(""); 
         setCommunity(""); 
         setImage(null); } catch (error) { 
         console.log("Create post error:", error); 
         if (error.response) { 
         alert( error.response.data?.message || "Failed to create post" ); 
         } else { alert("Unable to connect to the server"); } 
         } finally { setLoading(false); 
         } };

         const handleImageChange = (e) => { 
          const selectedImage = e.target.files[0]; 
          if (selectedImage) { 
            setImage(selectedImage); } };
  return (
    <div className="min-h-screen bg-[#0b0f10] text-gray-200">


      {/* ================= HEADER ================= */}

      <header className="h-[58px] bg-[#0b0f10] flex items-center px-4">
        <Navbar2 />
      </header>


      {/* ================= PAGE ================= */}

      <main className="relative min-h-[calc(100vh-58px)]">


        {/* Left menu */}

        <button className="absolute left-4 top-5 w-9 h-9 rounded-full border border-[#596165] flex items-center justify-center hover:bg-[#1c2528]">

          <FaBars className="text-gray-300" />

        </button>


        {/* Main Content */}

        <div className="max-w-[1030px] mx-auto px-6 pt-4">


          {/* Top row */}

          <div className="flex items-center justify-between">

            {/* Community Dropdown */}

            <div className="relative">

              <button
                onClick={() => setCommunityOpen(!communityOpen)}
                className="flex items-center gap-3 border border-[#697277] rounded-full px-5 py-2.5 text-sm font-semibold hover:bg-[#161d20]"
              >

                <span>
                  {community || "Select Community"}
                </span>

                {communityOpen ? (
                  <FaChevronUp className="text-xs" />
                ) : (
                  <FaChevronDown className="text-xs" />
                )}

              </button>


              {/* Dropdown */}

              {communityOpen && (

                <div className="absolute top-12 left-0 z-50 w-[260px] rounded-xl border border-[#3a4246] bg-[#1a2023] shadow-xl overflow-hidden">

                  {communities.map((item) => (

                    <button
                      key={item}
                      onClick={() => selectCommunity(item)}
                      className="w-full px-4 py-3 text-left text-sm hover:bg-[#293136]"
                    >
                      {item}
                    </button>

                  ))}

                </div>

              )}

            </div>


            {/* Drafts */}

            <button className="text-sm font-semibold text-gray-300 hover:text-white">
              Drafts
            </button>

          </div>


          {/* ================= FORM ================= */}

          <div className="mt-7 max-w-[700px]">


            {/* Title */}

            <label className="block text-base font-semibold text-[#9aa7ad] mb-3">

              Title<span className="text-red-500">*</span>

            </label>


            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full bg-transparent border-none outline-none text-xl text-white placeholder:text-[#596469]"
              placeholder=""
            />


            {/* Tags */}

            <button className="mt-5 flex items-center gap-2 border border-[#343c40] rounded-full px-4 py-2 text-sm text-gray-500 hover:text-gray-300 hover:border-gray-500">

              <FaTag />

              Add tags

            </button>


            {/* Body */}

            <div className="mt-7">

              <textarea
                value={body}
                onChange={(e) => setBody(e.target.value)}
                placeholder="Body text (optional)"
                className="w-full h-[230px] resize-none bg-transparent outline-none text-base text-gray-200 placeholder:text-[#8aa0b2]"
              />

            </div>

            {/* ================= IMAGE ================= */} 
            <div className="mt-4"> 
              <label className="flex items-center gap-2 w-fit cursor-pointer border border-[#343c40] rounded-full px-4 py-2 text-sm text-gray-500 hover:text-gray-300 hover:border-gray-500"> 
                <FaImage /> 
                {image ? image.name : "Add image"} 
                <input 
                  type="file" 
                  accept="image/*" 
                  onChange={handleImageChange} 
                  className="hidden" /> 
                  </label> 
            </div>


            {/* ================= TOOLBAR ================= */}

            <div className="border-b border-[#343b3e] pb-3">

              <div className="flex items-center gap-5 text-[#727c81]">


                <button title="Add link">
                  <FaLink />
                </button>


                <button title="Add image">
                  <FaImage />
                </button>


                <button title="Add video">
                  <FaVideo />
                </button>


                <span className="h-5 w-px bg-[#343b3e]" />


                <button title="Bold">
                  <FaBold />
                </button>


                <button title="Italic">
                  <FaItalic />
                </button>


                <button title="Strikethrough">
                  <FaStrikethrough />
                </button>


                <button title="Superscript">
                  <FaSuperscript />
                </button>


                <button title="Subscript">
                  <FaSubscript />
                </button>


                <span className="h-5 w-px bg-[#343b3e]" />


                <button title="Link">
                  <FaLink />
                </button>


                <button title="Bullet list">
                  <FaListUl />
                </button>


                <button title="Numbered list">
                  <FaListOl />
                </button>


                <button title="Quote">
                  <FaQuoteLeft />
                </button>


                <button title="Code">
                  <FaCode />
                </button>


                <button title="Code block">
                  <FaCodeBranch />
                </button>


                <button title="Table">
                  <FaTable />
                </button>


                <button title="More">
                  <FaEllipsisH />
                </button>

              </div>

            </div>


            {/* ================= BUTTONS ================= */}

            <div className="flex justify-end gap-4 mt-6">

              <button
                disabled={!title && !body}
                className="rounded-full bg-[#20272a] px-5 py-3 text-sm font-semibold text-[#667075] hover:bg-[#293136] disabled:cursor-not-allowed"
              >
                Save Draft
              </button>


              <button
                disabled={!title}
                onClick={handlePost}
                className={`rounded-full px-6 py-3 text-sm font-semibold ${
                  title
                    ? "bg-[#20272a] text-white hover:bg-[#293136]"
                    : "bg-[#20272a] text-[#667075] cursor-not-allowed"
                }`}
              >
                {loading ? "Posting..." : "Post"}
              </button>

            </div>

          </div>


          {/* ================= FOOTER ================= */}

          <footer className="flex justify-center mt-20 pb-8 text-xs text-[#7e9aa7]">

            <div className="text-center">

              <span className="mx-1">
                Reddit Rules
              </span>

              <span>
                Privacy Policy
              </span>

              <span>
                User Agreement
              </span>

              <span>
                Accessibility
              </span>

              <span>
                Reddit, Inc. © 2026. All rights reserved.
              </span>

            </div>

          </footer>

        </div>

      </main>

    </div>
  );
}


export default CreatePost;