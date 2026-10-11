import { FaApple, FaGoogle } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";

function Sidebar2() {
  return (
    <aside className="fixed left-0 top-[68px] hidden h-[calc(100vh-68px)] w-[380px] p-5 lg:block">
      <div className="h-full overflow-hidden rounded-2xl bg-black">

        {/* Sign up section */}
        <div className="px-5 pt-12 text-center">

          <h2 className="mb-8 text-2xl font-bold">
            Join the most real
            <br />
            place on the internet
          </h2>

          {/* Google */}
          <button className="mb-3 flex w-full items-center gap-3 rounded-full bg-white px-5 py-3 text-black">
            <span className="font-bold"><FaGoogle /></span>

            <span className="flex-1 text-sm font-medium">
              Continue with Google
            </span>

          </button>

          {/* Apple */}
          <button className="mb-3 flex w-full items-center gap-3 rounded-full bg-white px-5 py-3 text-black">
            <span className="text-xl"><FaApple /></span>

            <span className="flex-1 text-sm font-medium">
              Continue with Apple
            </span>
          </button>

          {/* Email */}
          <button className="flex w-full items-center gap-3 rounded-full bg-white px-5 py-3 text-black">
            <span><MdOutlineMailOutline /></span>

            <span className="flex-1 text-sm font-medium">
              Continue with Email
            </span>
          </button>

          <p className="mt-5 px-4 text-xs leading-5 text-gray-400">
            By continuing, you agree to our{" "}
            <span className="text-blue-400">User Agreement</span>
            {" "}and acknowledge that you understand the{" "}
            <span className="text-blue-400">Privacy Policy.</span>
          </p>
        </div>

        {/* Bottom illustration */}
        {/* <div className="absolute bottom-0 left-0 right-0">
          <div className="h-72 bg-gradient-to-b from-transparent to-[#18201c]" />

          <img
            src="https://i.redd.it/cms/b306fd8870bfee4b_snoo_map.png"
            alt="Reddit characters"
            className="w-full object-cover"
          />
        </div> */}
      </div>

    </aside>
  );
}

export default Sidebar2;