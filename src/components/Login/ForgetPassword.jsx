'use client'
import React,{useState} from 'react'

const ForgetPassword = () => {
    const [formData, setFormData] = useState({
        email: "",
      });
    
      const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
      };
      

      const handleSubmit = async () => {
        console.log(formData);
        
        try {
          const response = await fetch("http://192.168.29.239:5000/api/forgot-password", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
          });
          const data = await response.json();
          if (response.ok) {
            // Login was successful, you can redirect or perform other actions here
            alert(data.message);
            window.location.href = '/change'
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
            <span className="text-[#8167E6] font-semibold text-2xl font-mono">Forget Password</span>
          </h1>
          <p className="text-[#8E93A6] text-xs">
            Enter your registered email 
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
           
        
            <button class="w-full bg-[#8167E6] py-3 text-white font-light rounded-xl text-xs hover:bg-white hover:text-[#8167E6] focus:outline-none focus:shadow-outline"
              type="button"
              onClick={handleSubmit}>
                  Submit
                </button>
          </form>
      
        </div>
      </div>
    </div>
  </div>
  )
}

export default ForgetPassword