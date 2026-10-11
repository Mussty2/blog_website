import axios from "axios";
import { useState } from "react";
import { FaEye, FaGoogle, FaApple } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

function Sign_up(){
const navigate = useNavigate(); 
const [firstname, setFirstname] = useState(""); 
const [lastname, setLastname] = useState(""); 
const [email, setEmail] = useState(""); 
const [phone, setPhone] = useState(""); 
const [password, setPassword] = useState(""); 
// const [showPassword, setShowPassword] = useState(false); 
const [loading, setLoading] = useState(false); 

const handleSubmit = async (e) => { 
  e.preventDefault(); 
  
  if (!firstname || !lastname || !email || !phone || !password) { 
    alert("Please fill in all fields"); 
    return; 
  } 
  
  const user = { 
    firstname, 
    lastname, 
    email, 
    phone, 
    password, 
  };
  
  try { 
    setLoading(true); 
    const response = await axios.post( "https://blog-reddit.onrender.com/api/auth/register", user ); console.log("Registration response:", response.data); 
    alert("Registration successful! Please login.");  
    navigate("/login"); 
  } catch (error) { console.log("Registration error:", error); 
    if (error.response) { 
      alert( error.response.data?.message || "Registration failed. Please try again." ); } 
      else { 
        alert("Unable to connect to the server."); } 
      } 
        finally { setLoading(false); 
        } 
      };

    return(
     <section className="bg-[rgba(0,0,0,0.9)] fixed top-0 left-0 bottom-0 right-0 flex justify-center items-center overflow-y-auto p-5 py-10 pt-100">
         <div className=" bg-[#0b0f12] rounded-3xl w-full max-w-md p-8">

        {/* Header */}
        <div className="mb-8">
         <h2 className="text-white text-center text-2xl">Sign Up</h2>
        <p className="mt-5 px-4 text-xs text-center leading-5 text-gray-400">
            By continuing, you agree to our{" "}
            <span className="text-blue-400">User Agreement</span>
            {" "}and acknowledge that you understand the{" "}
            <span className="text-blue-400">Privacy Policy.</span>
          </p>
        </div>

        {/* Social Buttons */}
        <div className="space-y-4">

          <button className="w-full bg-white border rounded-full py-2 flex items-center justify-center gap-3">
            <FaGoogle className="text-red-500" />
            Continue with Google
          </button>

          <button className="w-full bg-white border rounded-full py-2 flex items-center justify-center gap-3">
            <FaApple />
            Continue with Apple
          </button>

        </div>
           {/* Divider */}
        <div className="flex items-center my-6">
          <hr className="flex-1" />
          <span className="mx-3 text-gray-500 text-sm">OR</span>
          <hr className="flex-1" />
        </div>


        <form onSubmit={handleSubmit} action="">
            <div className="mb-5 text-white">
          <label className="text-sm font-medium">
            First Name <span className="text-red-500">*</span>
          </label>

          <input
            type="text"
            placeholder="Enter your first name"
            value={firstname} 
            onChange={(e) => setFirstname(e.target.value)}
            className="w-full bg-[#0b0f12] mt-2 border rounded-[18px] px-4 py-3 outline-none"
          />
        </div>
        <div className="mb-5 text-white">
          <label className="text-sm font-medium">
            Last Name <span className="text-red-500">*</span>
          </label>

          <input
            type="text"
            placeholder="Enter your last name"
            value={lastname} 
            onChange={(e) => setLastname(e.target.value)}
            className="w-full bg-[#0b0f12] mt-2 border rounded-[18px] px-4 py-3 outline-none"
          />
        </div>
    
        <div className="mb-5 text-white">
          <label className="text-sm font-medium">
            Email address <span className="text-red-500">*</span>
          </label>

          <input
            type="email"
            placeholder="Enter your email"
            value={email} 
            onChange={(e) => setEmail(e.target.value)}
            className="w-full bg-[#0b0f12] mt-2 border rounded-[18px] px-4 py-3 outline-none"
          />
        </div>
        <div className="mb-5 text-white">
          <label className="text-sm font-medium">
            Phone number <span className="text-red-500">*</span>
          </label>

          <input
            type="text"
            placeholder="Enter your phone number"
            value={phone} 
            onChange={(e) => setPhone(e.target.value)}
            className="w-full bg-[#0b0f12] mt-2 border rounded-[18px] px-4 py-3 outline-none"
          />
        </div>
        <div className="text-white">
          <label className="text-sm font-medium">
            Password <span className="text-red-500">*</span>
          </label>

          <div className="relative mt-2">
            <input
              type="password"
              placeholder="Enter password"
              value={password} 
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-[#0b0f12] border rounded-[18px] px-4 py-3 outline-none"
            />

            <FaEye className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 cursor-pointer" />
          </div>
        </div>

        <button disabled={loading} className="w-full bg-[#30214F] hover:bg-[#25193f] text-white py-3 rounded-full font-semibold mt-6">
          {loading ? "Creating account..." : "Sign Up"}
        </button>
        </form>
        <div className="flex gap-2 mt-2 text-sm">
         <p className="text-gray-200">Already a redditor?</p> <Link to="/login" className="text-blue-500">Log in</Link>
        </div>
      </div>       
        </section>
    )
}
export default Sign_up;