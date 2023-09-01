import React from "react";

const Login = () => {
  return (
    <div className="">
      <div
        className="max-w-screen-2xl h-[25rem] sm:h-[30rem] md:h-[40rem] mx-auto -mt-20 bg-no-repeat bg-right bg-cover font-sans"
        style={{ backgroundImage: `url('/Dna.png')` }}
      >
        <div className="max-w-md mx-48 pt-44">
          <div className="flex flex-col gap-8">
            <h1 className="text-4xl text-white">
              <span className="text-violet-500">Contact</span> Us
            </h1>
            <p className="text-white">
              Enter your registered email and password to login to your account
            </p>
          </div>


          <div className="w-full max-w-xs">
            <form className=" ">
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                  Username
                </label>
                <input class="shadow appearance-none border bg-transparent rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username" />
              </div>
              <div class="mb-6">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
                  Password
                </label>
                <input class="shadow appearance-none border  border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************" />
                <p class="text-red-500 text-xs italic">Please choose a password.</p>
              </div>
              <div class="flex items-center justify-between">
                <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                  Sign In
                </button>
                <a class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
                  Forgot Password?
                </a>
              </div>
            </form>
            <p class="text-center text-gray-500 text-xs">
              &copy;2020 Acme Corp. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
