// import { useState } from "react";

// import {
//   FaRedditAlien,
//   FaArrowUp,
//   FaArrowDown,
//   FaCommentAlt,
//   FaShare,
//   FaEllipsisH
// } from "react-icons/fa";


// function Post() {

//   const [vote, setVote] = useState(null);
//   const [score, setScore] = useState(50);


//   function upvote() {

//     if (vote === "up") {
//       setVote(null);
//       setScore(50);
//       return;
//     }

//     setVote("up");

//     if (vote === "down") {
//       setScore(50);
//     } else {
//       setScore(51);
//     }
//   }


//   function downvote() {

//     if (vote === "down") {
//       setVote(null);
//       setScore(50);
//       return;
//     }

//     setVote("down");

//     if (vote === "up") {
//       setScore(50);
//     } else {
//       setScore(49);
//     }
//   }


//   return (
//     <article>

//       {/* User information */}

//       <div className="flex items-center gap-2">

//         <div className="w-6 h-6 rounded-full bg-[#c17bd4] flex items-center justify-center">

//           <FaRedditAlien className="text-[#71367d] text-[12px]" />

//         </div>

//         <div className="text-[8px]">

//           <span className="text-[#51a99b] font-bold">
//             r/nigerianfood
//           </span>

//           <span className="text-gray-500 ml-1">
//             • 12h ago
//           </span>

//         </div>

//       </div>


//       {/* Title */}

//       <h1 className="mt-2 text-[17px] font-semibold text-[#d7dadc]">

//         Breakfast is on. Who else is in love with bread and beans?

//       </h1>


//       {/* Flair */}

//       <span className="inline-block mt-2 px-2 py-[3px] bg-[#46504e] rounded text-[7px] text-gray-200">

//         Food History

//       </span>


//       {/* Food image */}

//       <div className="relative mt-2 h-[440px] overflow-hidden rounded-xl bg-[#403a37]">

//         {/* Background */}

//         <div className="absolute inset-0 bg-gradient-to-r from-[#352f2c] via-[#766c68] to-[#342e2e]" />


//         {/* Center photograph area */}

//         <div className="absolute left-1/2 -translate-x-1/2 top-0 h-full w-[248px] bg-[#d5c6bc]">

//           {/* Wall */}

//           <div className="absolute top-0 left-0 right-0 h-[155px] bg-[#807873]">

//             <div className="absolute inset-0 opacity-30">

//               <div className="absolute top-12 left-0 right-0 border-t border-[#4c4541] rotate-[10deg]" />

//               <div className="absolute top-20 left-0 right-0 border-t border-[#4c4541] rotate-[-5deg]" />

//             </div>

//           </div>


//           {/* Beans container */}

//           <div className="absolute top-[175px] left-[20px] z-10 w-[135px] h-[155px] rotate-[-12deg] bg-white rounded-xl p-[10px] shadow-xl">

//             <div className="relative w-full h-full rounded-lg bg-[#a34418] overflow-hidden">

//               <div className="absolute w-8 h-5 rounded-full bg-[#63250e] left-3 top-3" />

//               <div className="absolute w-7 h-5 rounded-full bg-[#69260e] left-12 top-8" />

//               <div className="absolute w-8 h-5 rounded-full bg-[#5c210d] right-4 top-5" />

//               <div className="absolute w-7 h-5 rounded-full bg-[#67260e] left-6 top-16" />

//               <div className="absolute w-8 h-5 rounded-full bg-[#59200d] right-7 top-20" />

//               <div className="absolute w-8 h-5 rounded-full bg-[#6c290f] left-10 bottom-6" />

//               <div className="absolute w-7 h-5 rounded-full bg-[#54200d] right-3 bottom-5" />

//             </div>

//           </div>


//           {/* Bread */}

//           <div className="absolute top-[170px] right-[-20px] z-20 w-[120px] h-[180px] rotate-[14deg] bg-[#efd39c] rounded-[22px] shadow-xl p-2">

//             <div className="h-full border-2 border-[#d4a25a] rounded-[18px] flex items-center justify-center">

//               <span className="text-[#8b5266] font-bold text-[15px] text-center rotate-[-12deg]">
//                 ASIBAK
//                 <br />
//                 Bread
//               </span>

//             </div>

//           </div>


//           {/* Yellow bed/sheet */}

//           <div className="absolute bottom-0 left-0 right-0 h-[125px] bg-[#f1dc00]">

//             <div className="absolute left-7 top-6 w-[65px] h-[35px] rounded-full border-4 border-[#625c12] rotate-[15deg]" />

//             <div className="absolute right-8 top-12 w-[70px] h-[40px] rounded-full border-4 border-[#625c12] rotate-[-12deg]" />

//             <div className="absolute left-[105px] top-2 w-[30px] h-[30px] rounded-full border-2 border-[#625c12]" />

//           </div>

//         </div>

//       </div>


//       {/* Post buttons */}

//       <div className="flex items-center gap-2 mt-3">

//         <div className="flex items-center bg-[#092a25] rounded-full">

//           <button
//             onClick={upvote}
//             className={`p-2 ${
//               vote === "up"
//                 ? "text-[#ff4500]"
//                 : "text-gray-300"
//             }`}
//           >
//             <FaArrowUp />
//           </button>

//           <span className="text-[9px] px-1">
//             {score}
//           </span>

//           <button
//             onClick={downvote}
//             className={`p-2 ${
//               vote === "down"
//                 ? "text-[#7193ff]"
//                 : "text-gray-300"
//             }`}
//           >
//             <FaArrowDown />
//           </button>

//         </div>


//         <button className="flex items-center gap-2 bg-[#092a25] rounded-full px-3 py-2 text-[9px]">

//           <FaCommentAlt />

//           25

//         </button>


//         <button className="flex items-center gap-2 bg-[#092a25] rounded-full px-3 py-2 text-[9px]">

//           <FaShare />

//           1

//         </button>


//         <button className="bg-[#092a25] rounded-full p-2">

//           <FaEllipsisH />

//         </button>

//       </div>

//     </article>
//   );
// }

// export default Post;