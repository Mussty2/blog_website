import { Link } from "react-router-dom";
import Navbar2 from "../components/navbar";
import Post from "../components/post";
import Sidebar from "../components/sidebar2";



function Home2 (){
 return (
    <div className="min-h-screen bg-[#0b0f12] text-white">
      <Navbar2 />

      <div className="flex">
        {/* LEFT SIDEBAR */}
        <Sidebar />

        {/* MAIN CONTENT */}
        <main className="flex-1  py-6 lg:ml-[380px] lg:mr-[350px]">
          <Post />
        </main>
      </div>

      
    </div>
  );
}
export default Home2;