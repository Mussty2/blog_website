import {
  FaDiscord,
  FaRedditAlien,
} from "react-icons/fa";

function CommunityItem({ icon, name, members }) {
  return (
    <div className="flex items-center gap-3 py-2">

      {/* Community Icon */}
      <div className="w-9 h-9 rounded-full overflow-hidden flex-shrink-0 flex items-center justify-center">
        {icon}
      </div>

      {/* Community Information */}
      <div className="min-w-0">

        <p className="text-sm text-white truncate">
          {name}
        </p>

        <p className="text-xs text-[#8eb9cc]">
          {members} members
        </p>

      </div>

    </div>
  );
}


function PopularCommunities() {

  return (
    <div className="w-full max-w-[305px]">

      {/* ================= POPULAR COMMUNITIES ================= */}

      <div className="rounded-lg bg-black px-4 py-2 pb-4">

        <h2 className="text-xs font-medium text-[#3da5d9] uppercase">
          Popular Communities
        </h2>


        <div className="mt-4">

          {/* Ask Reddit */}

          <CommunityItem
            name="r/AskReddit"
            members="59,803,727"
            icon={
              <div className="w-9 h-9 rounded-full bg-[#8ed1ef] flex items-center justify-center">
                <FaRedditAlien className="text-white text-xl" />
              </div>
            }
          />


          {/* League of Legends */}

          <CommunityItem
            name="r/leagueoflegends"
            members="8,496,826"
            icon={
              <div className="w-9 h-9 rounded-full bg-[#17252d] flex items-center justify-center">

                <span className="text-yellow-500 text-2xl font-bold">
                  L
                </span>

              </div>
            }
          />


          {/* Out of the Loop */}

          <CommunityItem
            name="r/OutOfTheLoop"
            members="3,737,723"
            icon={
              <div className="w-9 h-9 rounded-full bg-[#37464b] border border-gray-500 flex items-center justify-center">

                <span className="text-[7px] text-white text-center leading-2">
                  Out of<br />
                  the Loop
                </span>

              </div>
            }
          />


          {/* Discord */}

          <CommunityItem
            name="r/discordapp"
            members="1,542,837"
            icon={
              <div className="w-9 h-9 rounded-full bg-[#5865f2] flex items-center justify-center">

                <FaDiscord className="text-white text-xl" />

              </div>
            }
          />


          {/* Twitch */}

          <CommunityItem
            name="r/Twitch"
            members="2,890,903"
            icon={
              <div className="w-9 h-9 rounded-full bg-white flex items-center justify-center">

                <FaRedditAlien className="text-[#ff4500] text-xl" />

              </div>
            }
          />

        </div>


        {/* See More */}

        <button className="mt-1 text-xs font-bold text-white hover:underline">
          See more
        </button>

      </div>


      {/* ================= FOOTER ================= */}

      <footer className="mt-7 px-4 text-xs leading-6 text-[#8b9ba3]">

        <div className="flex flex-wrap gap-x-2">

          <a href="#" className="hover:text-white">
            Home
          </a>

          <a href="#" className="hover:text-white">
            Popular
          </a>

          <a href="#" className="hover:text-white">
            News
          </a>

          <a href="#" className="hover:text-white">
            Explore
          </a>

          <a href="#" className="hover:text-white">
            Best of Reddit
          </a>

        </div>


        <div className="flex flex-wrap gap-x-2">

          <a href="#" className="hover:text-white">
            Best of Reddit in Portuguese
          </a>
        </div>


        <div className="flex flex-wrap gap-x-2">

          <a href="#" className="hover:text-white">
            Best of Reddit in German
          </a>

          <a href="#" className="hover:text-white">
            Reddit Rules
          </a>

        </div>


        <div className="flex flex-wrap gap-x-2">

          <a href="#" className="hover:text-white">
            Privacy Policy
          </a>

          <a href="#" className="hover:text-white">
            User Agreement
          </a>

          <a href="#" className="hover:text-white">
            Accessibility
          </a>

        </div>


        <p>
          Reddit, Inc. © 2026. All rights reserved.
        </p>

      </footer>

    </div>
  );
}

export default PopularCommunities;