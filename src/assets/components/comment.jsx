import {
  FaRedditAlien,
  FaArrowUp,
  FaArrowDown,
  FaReply,
  FaShare
} from "react-icons/fa";


function Comment() {

  return (
    <div className="mt-6 ml-2 border-l border-[#21463f] pl-5">

      {/* User */}

      <div className="flex items-center gap-3">

        <div className="w-9 h-9 rounded-full bg-[#e7cf69] flex items-center justify-center">

          <FaRedditAlien className="text-[#79572d] text-base" />

        </div>


        <div>

          <p className="text-sm font-bold">
            pum-nihar
          </p>

          <p className="text-xs text-gray-500">
            Eater Association Member 🥘
          </p>

        </div>

        <span className="text-xs text-gray-600">
          • 12h ago
        </span>

      </div>


      {/* Comment */}

      <p className="mt-4 text-sm text-gray-300">
        E no too early for beans and bread my guy 😂😂😂
      </p>

      <p className="mt-2 text-sm text-gray-300">
        Add some boiled eggs sha if you're going all in 😏
      </p>


      {/* Actions */}

      <div className="flex items-center gap-6 mt-4 text-gray-500 text-sm">

        <button className="hover:text-white">
          <FaArrowUp />
        </button>

        <button className="hover:text-white">
          <FaArrowDown />
        </button>

        <button className="hover:text-white">
          <FaReply />
        </button>

        <button className="hover:text-white">
          <FaShare />
        </button>

      </div>

    </div>
  );
}

export default Comment;
