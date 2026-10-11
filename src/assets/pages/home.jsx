import Navbar from "../components/nav";
import Post from "../components/post";
import Sidebar2 from "../components/sidebar";
import PopularCommunities from "../components/rytbar";


function Home (){
 return (
    <div className="min-h-screen bg-[#0b0f12] text-white">
      <Navbar />

      <div className="flex justify-between ">
        {/* LEFT SIDEBAR */}
        <Sidebar2 />

        {/* MAIN CONTENT */}
        <main className=" px-6 py-6 lg:ml-[380px] lg:mr-[350px]">
          <Post />
        </main>

        {/* RIGHT SIDEBAR */}
        {/* <div className="mt-3">
          <PopularCommunities />
        </div> */}
      </div>

      
      
    </div>
  );
}
export default Home;

