
import { useEffect, useState } from "react";
import Aside from "../components/Aside";

function Dashboard() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://blog-reddit.onrender.com/api/post/all")
      .then((res) => res.json())
      .then((data) => {
        setPosts(data.data?.posts || data.data || data.posts || data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Aside />

      <main className="flex-1 p-6">
        <h1 className="mb-6 text-2xl font-bold">Dashboard</h1>

        <div className="mb-6 rounded-lg bg-white p-5 shadow">
          <p>Total Posts</p>
          <h2 className="text-3xl font-bold">{posts.length}</h2>
        </div>

        <div className="rounded-lg bg-white p-5 shadow">
          <h2 className="mb-4 text-xl font-bold">Recent Posts</h2>

          {posts.slice(0, 10).map((post) => (
            <div
              key={post._id}
              className="flex items-center gap-4 border-b p-3"
            >
              <img
                src={
                  typeof post.image === "string"
                    ? post.image
                    : post.image?.url || ""
                }
                alt={post.title || "Post image"}
                className="h-20 w-20 rounded-lg object-cover"
              />

              <div>
                <h3 className="font-semibold">{post.title}</h3>

                <p className="text-sm text-gray-500">
                  Likes: {post.likes?.length || 0}
                </p>
              </div>
            </div>
          ))}

          {posts.length === 0 && <p>No posts found.</p>}
        </div>
      </main>
    </div>
  );
}

export default Dashboard;
