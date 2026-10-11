import {
  FaHome,
  FaFire,
  FaNewspaper,
  FaCompass,
  FaPlus,
  FaRedditAlien,
  FaBullhorn,
  FaBook,
  FaUsers,
  FaGlobe,
  FaCommentAlt,
  FaChevronDown,
  FaChevronUp
} from "react-icons/fa";
import { Link } from "react-router-dom";


function SidebarItem({ icon, text }) {
  return (
    <button className="w-full flex items-center gap-3 px-3 py-2 rounded hover:bg-[#14201d] text-left">

      <span className="w-5 text-center text-sm text-gray-300">
        {icon}
      </span>

      <span className="text-sm text-gray-300">
        {text}
      </span>

    </button>
  );
}


function SectionTitle({ title, open = false }) {
  return (
    <div className="flex items-center justify-between px-3 py-3">

      <span className="text-xs font-bold tracking-[1px] text-gray-500">
        {title}
      </span>

      {open ? (
        <FaChevronUp className="text-xs text-gray-500" />
      ) : (
        <FaChevronDown className="text-xs text-gray-500" />
      )}

    </div>
  );
}


function Divider() {
  return (
    <div className="border-t border-[#263330] my-2" />
  );
}


function Sidebar() {
  return (
    <aside className="fixed left-0 top-[36px] bottom-0 z-40 w-[260px] bg-[#0b0f12] border-r border-[#263330] overflow-y-auto px-3 py-4">

      {/* Main */}

      <Link to="/home">
        <SidebarItem 
        icon={<FaHome />}
        text="Home"
      />
      </Link>
      

      <SidebarItem
        icon={<FaFire />}
        text="Popular"
      />

      <SidebarItem
        icon={<FaNewspaper />}
        text="News"
      />

      <SidebarItem
        icon={<FaCompass />}
        text="Explore"
      />

      <SidebarItem
        icon={<FaPlus />}
        text="Start a community"
      />


      <Divider />


      {/* Games */}

      <SectionTitle title="GAMES ON REDDIT" />


      <Divider />


      {/* Custom feeds */}

      <SectionTitle
        title="CUSTOM FEEDS"
        open
      />

      <SidebarItem
        icon={<FaPlus />}
        text="Create Custom Feed"
      />


      <Divider />


      {/* Recent */}

      <SectionTitle
        title="RECENT"
        open
      />

      <SidebarItem
        icon={
          <div className="w-5 h-5 rounded-full bg-[#1683c4] flex items-center justify-center text-[8px]">
            r/
          </div>
        }
        text="r/FullStackDevelopers"
      />


      <Divider />


      {/* Communities */}

      <SectionTitle
        title="COMMUNITIES"
        open
      />

      <SidebarItem
        icon={<FaUsers />}
        text="Manage Communities"
      />


      <Divider />


      {/* Resources */}

      <SectionTitle
        title="RESOURCES"
        open
      />

      <SidebarItem
        icon={<FaRedditAlien />}
        text="About Reddit"
      />

      <SidebarItem
        icon={<FaBullhorn />}
        text="Advertise"
      />

      <SidebarItem
        icon={<FaGlobe />}
        text="Developer Platform"
      />

      <SidebarItem
        icon={<FaCommentAlt />}
        text="Reddit Pro"
      />

      <SidebarItem
        icon={<FaBook />}
        text="Help"
      />

      <SidebarItem
        icon={<FaNewspaper />}
        text="Blog"
      />

      <SidebarItem
        icon={<FaUsers />}
        text="Careers"
      />

      <SidebarItem
        icon={<FaBook />}
        text="Press"
      />


      <Divider />


      <SidebarItem
        icon={<FaRedditAlien />}
        text="Best of Reddit"
      />

      <SidebarItem
        icon={<FaGlobe />}
        text="Best of Reddit in Portugal"
      />

      <SidebarItem
        icon={<FaGlobe />}
        text="Best of Reddit in Germany"
      />


      <Divider />


      <SidebarItem
        icon={<FaBook />}
        text="Reddit Rules"
      />

      <SidebarItem
        icon={<FaBook />}
        text="Privacy Policy"
      />

      <SidebarItem
        icon={<FaBook />}
        text="User Agreement"
      />

      <SidebarItem
        icon={<FaBook />}
        text="Accessibility"
      />


      <p className="text-[10px] leading-4 text-gray-600 px-3 mt-6 mb-4">
        Reddit, Inc. © 2026. All rights reserved.
      </p>

    </aside>
  );
}


export default Sidebar;

