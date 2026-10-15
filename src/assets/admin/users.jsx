import { useEffect, useState } from "react";
import Aside from "../components/Aside";

function Users() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://blog-reddit.onrender.com/api/auth/users")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data.data?.users || data.data || data.users || []);
      })
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Aside />

      <main className="flex-1 p-6">
        <h1 className="mb-6 text-2xl font-bold">
          Registered Users
        </h1>

        <div className="mb-6 rounded-lg bg-white p-5 shadow">
          <p className="text-gray-500">Total Users</p>
          <h2 className="text-3xl font-bold">{users.length}</h2>
        </div>

        <div className="overflow-x-auto rounded-lg bg-white shadow">
          <table className="w-full text-left">
            <thead className="bg-[#001a16] text-white">
              <tr>
                <th className="p-4">S/N</th>
                <th className="p-4">Name</th>
                <th className="p-4">Email</th>
                <th className="p-4">Role</th>
              </tr>
            </thead>

            <tbody>
              {users.map((user, index) => (
                <tr key={user._id || index} className="border-b">
                  <td className="p-4">{index + 1}</td>
                  <td className="p-4">
                    {user.first_name} {user.last_name}
                  </td>
                  <td className="p-4">{user.email}</td>
                  <td className="p-4">{user.role || "user"}</td>
                </tr>
              ))}
            </tbody>
          </table>

          {loading && (
            <p className="p-5 text-gray-500">Loading users...</p>
          )}

          {!loading && users.length === 0 && (
            <p className="p-5 text-gray-500">No users found.</p>
          )}
        </div>
      </main>
    </div>
  );
}

export default Users;
