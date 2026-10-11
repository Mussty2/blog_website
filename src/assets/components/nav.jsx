import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="sticky top-0 z-50 flex h-[68px] items-center border-b border-gray-800 bg-[#0b0f12] px-6">

      {/* Logo */}
      <div className="w-[340px]">
        <Link to="/" className="text-3xl font-bold tracking-tight">
          reddit
        </Link>
      </div>

      {/* Search */}
      <div className="flex flex-1 justify-center">
        <div className="flex w-full max-w-[680px] items-center rounded-full bg-[#272e32] px-5 py-3">
          <img className="" src="https://www.reddit.com/favicon.ico" alt="" />

          <input
            type="text"
            placeholder="Search Reddit"
            className="w-full pl-4 bg-transparent text-white outline-none placeholder:text-gray-400"
          />
        </div>
      </div>

      {/* Buttons */}
      <div className="ml-6 flex w-[340px] justify-end gap-3">
        <Link to="/signup" className="rounded-full bg-[#272e32] px-5 py-3 font-semibold">
          Sign Up
        </Link>

        <Link to="/login" className="rounded-full bg-orange-600 px-5 py-3 font-semibold">
          Log In
        </Link>

        <button className="px-3 text-xl">
          •••
        </button>
      </div>
    </nav>
  );
}

export default Navbar;