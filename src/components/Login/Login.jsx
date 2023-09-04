import React from "react";

const Login = () => {
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
              Enter your registered email and password to<br/> login to your account
            </p>
          </div>


          <div className="w-full max-w-xs">
            <form className=" ">
              <div className="my-8">
                <label className="block text-gray-700 text-xs font-bold mb-2 " htmlFor="username">
                  Email
                </label>
                <input class="shadow appearance-none border bg-transparent border-gray-600 rounded-xl text-xs w-full py-3 px-3 text-white leading-tight focus:outline-none focus:shadow-outline" id="username" type="email" placeholder="email@example.com" />
              </div>
              <div class="mb-6">
                <label class="block text-gray-700 text-xs font-bold mb-2" for="password">
                  Password
                </label>
                <input class="shadow appearance-none bg-transparent border border-gray-600 rounded-xl w-full py-3 px-3 text-white mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************" />
               
              </div>
              <a class="inline-block align-baseline font-light underline text-xs text-[#8167E6] " href="#">
                  Forgot Password?
                </a>
             <div className="my-8">
             <button class="w-full bg-[#8167E6] py-3 text-white font-light rounded-xl text-xs hover:bg-white hover:text-[#8167E6] focus:outline-none focus:shadow-outline" type="button">
                  Login
                </button>
             </div>
             
            <div className="">
              <p className="text-xs text-white font-[Avenir]">Don’t have an account yet?</p>
            </div>
            <a class="inline-block align-baseline font-light underline text-xs text-[#8167E6] " href="#">
                 Register Now
                </a>
            </form>
        
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
