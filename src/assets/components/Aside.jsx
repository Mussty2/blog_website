
import { Link } from "react-router-dom";

function Aside() {
  return (
    <aside className="flex min-h-screen w-64 flex-col bg-[#001a16] text-white">
      <Link to="/home" className="p-6 text-2xl font-bold">Reddit Blog</Link>

      <nav className="mt-4">
        <ul>
          <li>
            <Link
              to="/admin"
              className="block px-6 py-4 hover:bg-teal-800"
            >
              Dashboard
            </Link>
          </li>

          <li>
            <Link
              to="/users"
              className="block px-6 py-4 hover:bg-teal-800"
            >
              Registered Users
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
}

export default Aside;
