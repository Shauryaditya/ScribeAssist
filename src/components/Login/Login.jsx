'use client'
import Link from "next/link";
import React, { useState } from "react";
import { BASE_URL } from "@/constant";
const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  console.log(formData);

  const handleLogin = async () => {

    try {
      const response = await fetch(`${BASE_URL}/api/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      if (response.ok) {
        // Login was successful, you can redirect or perform other actions here
        console.log(data);
        localStorage.setItem("access_token", data.access_token);
        alert("Login Successful")
        window.location.href = '/home'
      } else {
        // Handle login error, e.g., show an error message
        console.error("Login failed");
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };
  return (
    <div className="">
      <div
        className="max-w-screen-2xl h-[25rem] sm:h-[30rem] md:h-[40rem] mx-auto -mt-20 bg-no-repeat bg-right bg-cover font-sans bg-[#191A29]"
        style={{ backgroundImage: `url('/Dna.png')` }}
      >
        <div className="max-w-md mx-48 pt-36">
          <div className="flex flex-col gap-2">
            <h1 className="text-xl text-white">
              <span className="text-[#8167E6] font-semibold text-2xl font-mono">Login</span>
            </h1>
            <p className="text-[#8E93A6] text-xs">
              Enter your registered email and password to<br /> login to your account
            </p>
          </div>


          <div className="w-full max-w-xs">
            <form className=" ">
              <div className="my-8">
                <label className="block text-gray-700 text-xs font-bold mb-2 " htmlFor="email">
                  Email
                </label>
                <input class="shadow appearance-none border bg-transparent border-gray-600 rounded-xl text-xs w-full py-3 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
                  id="email"
                  type="email"
                  name="email"
                  placeholder="email@example.com"
                  value={formData.email}
                  onChange={handleInputChange}
                />
              </div>
              <div class="mb-6">
                <label class="block text-gray-700 text-xs font-bold mb-2" for="password">
                  Password
                </label>
                <input class="shadow appearance-none bg-transparent border border-gray-600 rounded-xl w-full py-3 px-3 text-white mb-3 leading-tight focus:outline-none focus:shadow-outline"
                  id="password"
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  placeholder="******************" />

              </div>
              <Link class="inline-block align-baseline font-light underline text-xs text-[#8167E6] " href="/forget">
                Forgot Password?
              </Link>
              <div className="my-8">
                <button class="w-full bg-[#8167E6] py-3 text-white font-light rounded-xl text-xs hover:bg-white hover:text-[#8167E6] focus:outline-none focus:shadow-outline"
                  type="button"
                  onClick={handleLogin}>
                  Login
                </button>
              </div>

              <div className="">
                <p className="text-xs text-[#8E93A6] font-[Avenir]">Don’t have an account yet?</p>
              </div>
              <Link class="inline-block align-baseline font-light underline text-xs text-[#8167E6] " href="/register">
                Register Now
              </Link>
            </form>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
