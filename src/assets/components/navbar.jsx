import { useState } from "react";
import {
  FaRedditAlien,
  FaSearch,
  FaPlus,
  FaBell,
  FaCommentAlt,
  FaAd,
  FaUser,
  FaMoon,
  FaSignOutAlt,
  FaCog,
} from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

function Navbar2() {
  const [showProfile, setShowProfile] = useState(false);

  const navigate = useNavigate();

  // Get logged in user
  const savedUser = localStorage.getItem("user");
  const user = savedUser ? JSON.parse(savedUser) : null;

  // User name
  const fullName = user
    ? `${user.firstname || ""} ${user.lastname || ""}`.trim()
    : "User";

  // Username
  const username = user
    ? `u/${user.firstname?.toLowerCase() || "user"}`
    : "u/user";

  // Logout
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    setShowProfile(false);

    navigate("/");
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 h-auto bg-[#0b0f12] border-b border-[#25312f] flex items-center justify-between px-4">

      {/* Reddit Logo */}
      <div className="flex items-center gap-1">
        <Link
          to="/home"
          className="text-white font-bold text-[30px]"
        >
          reddit
        </Link>
      </div>

      {/* Search */}
      <div className="hidden md:flex items-center h-[30px] w-[335px] rounded-full bg-[#293330] px-3">

        <FaSearch
          size={20}
          className="text-gray-400 text-[10px] mr-2"
        />

        <span className="ml-2 text-[9px] text-gray-400">
          Search in r/nigerianfood
        </span>

      </div>

      {/* Right Icons */}
      <div className="flex items-center gap-4 text-gray-300 text-[11px]">

        <FaAd size={20} />

        <FaCommentAlt size={20} />

        {/* Create */}
        <Link
          to="/createpost"
          className="flex items-center gap-1 hover:text-white"
        >
          <FaPlus size={20} />
          <span>Create</span>
        </Link>

        {/* Notification */}
        <div className="relative cursor-pointer">
          <FaBell size={20} />

          <span className="absolute -top-2 -right-2 bg-[#ff4500] text-white text-[7px] rounded-full px-[3px]">
            1
          </span>
        </div>

        {/* Profile */}
        <div className="relative">

          {/* Profile Button */}
          <button
            onClick={() => setShowProfile(!showProfile)}
            className="w-7 h-7 rounded-full bg-[#c77be2] flex items-center justify-center hover:opacity-80 transition"
          >
            <FaRedditAlien
              size={20}
              className="text-[#673275] text-[13px]"
            />
          </button>

          {/* Dropdown */}
          {showProfile && (
            <div className="absolute right-0 top-10 w-[280px] bg-[#1b1f23] border border-[#343a3e] rounded-xl shadow-2xl overflow-hidden">

              {/* Profile Header */}
              <div className="px-4 py-4 border-b border-[#343a3e]">

                <div className="flex items-center gap-3">

                  <div className="w-12 h-12 rounded-full bg-[#c77be2] flex items-center justify-center">
                    <FaRedditAlien
                      size={30}
                      className="text-[#673275]"
                    />
                  </div>

                  <div>
                    <p className="text-white font-semibold text-sm">
                      {fullName}
                    </p>

                    <p className="text-gray-400 text-xs">
                      {username}
                    </p>
                  </div>

                </div>

              </div>

              {/* Options */}
              <div className="py-2">

                <Link
                  to="/profile"
                  onClick={() => setShowProfile(false)}
                  className="flex items-center gap-3 px-4 py-3 text-gray-200 hover:bg-[#292e32] transition"
                >
                  <FaUser size={16} />
                  <span>Profile</span>
                </Link>

                <button
                  className="w-full flex items-center gap-3 px-4 py-3 text-gray-200 hover:bg-[#292e32] transition"
                >
                  <FaCog size={16} />
                  <span>Settings</span>
                </button>

                <button
                  className="w-full flex items-center gap-3 px-4 py-3 text-gray-200 hover:bg-[#292e32] transition"
                >
                  <FaMoon size={16} />
                  <span>Dark Mode</span>
                </button>

              </div>

              {/* Logout */}
              <div className="border-t border-[#343a3e] py-2">

                <button
                  onClick={handleLogout}
                  className="w-full flex items-center gap-3 px-4 py-3 text-red-400 hover:bg-[#292e32] transition"
                >
                  <FaSignOutAlt size={16} />
                  <span>Log out</span>
                </button>

              </div>

            </div>
          )}

        </div>

      </div>

    </nav>
  );
}

export default Navbar2;