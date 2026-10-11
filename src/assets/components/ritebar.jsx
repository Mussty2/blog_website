
import {
  FaRedditAlien,
  FaChevronDown,
  FaUser
} from "react-icons/fa";

import { useState } from "react";

function RiteBar() {
  const [joined, setJoined] = useState(false);

  const rules = [
    "Be Respectful",
    "Stay On Topic",
    "Title Format",
    "No Low-Quality Posts",
    "No Spam or Self-Promotion",
    "No NSFW Content",
    "No Plagiarism Without Credit"
  ];

  return (
    <aside className="fixed right-0 top-[36px] bottom-0 hidden xl:block w-[320px] bg-[#061411] border-l border-[#263330] overflow-y-auto px-5 py-6">

      {/* Community heading */}

      <div className="flex items-center justify-between">

        <h2 className="text-base font-bold">
          r/nigerianfood
        </h2>

        <button
          onClick={() => setJoined(!joined)}
          className={`rounded-full px-5 py-2 text-sm font-bold ${
            joined
              ? "bg-[#24433c] text-white"
              : "bg-[#ffb000] text-black"
          }`}
        >
          {joined ? "Joined" : "Join"}
        </button>

      </div>

      <h3 className="mt-5 text-sm font-bold text-[#3da595]">
        nigerianfood
      </h3>

      <p className="mt-2 text-sm leading-5 text-gray-400">
        Come hungry, leave inspired! Let's share,
        learn, and feast together on the incredible
        flavors of Nigeria.
      </p>

      <div className="mt-4 text-xs text-gray-400 space-y-2">

        <p>◉ Created Mar 2, 2024</p>

        <p>◉ Public</p>

      </div>

      {/* Members */}

      <div className="flex gap-10 mt-5 pb-5 border-b border-[#1d302c]">

        <div>

          <p className="text-sm font-bold">
            8.1K
          </p>

          <span className="text-xs text-gray-400">
            foodies
          </span>

        </div>

        <div>

          <p className="text-sm font-bold">
            569
          </p>

          <span className="text-xs text-gray-400">
            foodies online
          </span>

        </div>

      </div>

      {/* User Flair */}

      <div className="py-5 border-b border-[#1d302c]">

        <h3 className="text-xs font-bold text-[#3da595]">
          USER FLAIR
        </h3>

        <div className="flex items-center gap-3 mt-4">

          <div className="w-8 h-8 rounded-full bg-purple-400 flex items-center justify-center">

            <FaRedditAlien className="text-purple-800 text-sm" />

          </div>

          <span className="text-xs text-gray-300">
            Big_Commission_6800
          </span>

        </div>

      </div>

      {/* Rules */}

      <div className="py-5 border-b border-[#1d302c]">

        <h3 className="text-xs font-bold text-[#3da595]">
          R/NIGERIANFOOD RULES
        </h3>

        <div className="mt-3">

          {rules.map((rule, index) => (

            <div
              key={rule}
              className="flex items-center justify-between py-3 border-b border-[#10231f]"
            >

              <div className="flex gap-4">

                <span className="text-xs text-[#3da595]">
                  {index + 1}
                </span>

                <span className="text-xs text-gray-400">
                  {rule}
                </span>

              </div>

              <FaChevronDown className="text-xs text-gray-400" />

            </div>

          ))}

        </div>

      </div>

      {/* Moderators */}

      <div className="py-5">

        <h3 className="text-xs font-bold text-[#3da595]">
          MODERATORS
        </h3>

        <button className="mt-4 w-full bg-[#07594f] rounded-full py-3 text-xs font-bold">

          ✉ Message Mods

        </button>

        <Moderator
          name="u/EbonyCupcakexo"
          role="Mama Put 🍲"
        />

        <Moderator
          name="u/Effective_Hair_716"
          role="Plantain Mama"
        />

        <Moderator
          name="u/Stanley083"
          role="I see your stove, I raise you an airfryer..."
        />

        <Moderator
          name="u/AutoModerator"
        />

        <button className="mt-4 w-full bg-[#07594f] rounded-full py-3 text-xs font-bold">

          View all moderators

        </button>

      </div>

      {/* Footer */}

      <div className="text-[10px] leading-4 text-gray-500">

        Reddit Rules &nbsp; Privacy Policy &nbsp; User Agreement

        <br />

        Accessibility &nbsp; Reddit, Inc. © 2026.

      </div>

    </aside>
  );
}

function Moderator({ name, role }) {

  return (
    <div className="flex items-center gap-3 mt-4">

      <div className="w-8 h-8 rounded-full bg-[#43866f] flex items-center justify-center">

        <FaUser className="text-xs" />

      </div>

      <div>

        <p className="text-xs text-[#42a99a]">
          {name}
        </p>

        {role && (
          <p className="text-[10px] text-gray-400">
            {role}
          </p>
        )}

      </div>

    </div>
  );
}

export default RiteBar;
