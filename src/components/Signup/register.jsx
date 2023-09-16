"use client"
import React, { useState } from "react";
import BASE_URL from "../constants";

const Register = () => {


  const [formData, setFormData] = useState({
    name: "",
    password: "",
    email:"",
    confirm_password: "",
    provider_type: "",
    emr: "",
    terms_and_service: false,
    baa_agreement: false,
    privacy_policy: false,
  });
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState('');
  // Event handler function to toggle checkbox status
  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setFormData({
      ...formData,
      [name]: checked,
    });
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === 'checkbox') {
      setFormData({
        ...formData,
        [name]: checked,
      });
    } else {
      setFormData({
        ...formData,
        [name]: type === 'checkbox' ? checked : value,
      });

      // Update password and confirmPassword states if the input name is "password" or "confirmPassword"
      if (name === 'password') {
        setPassword(value);
      } else if (name === 'confirm_password') {
        setConfirmPassword(value);
      }
    }
  };


  const handleSubmit = async () => {
    // You can now access formData and use it as needed.
    console.log(formData);

    const apiUrl = `${BASE_URL}/api/register`;

    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
         
        },
        body: JSON.stringify(formData), // Convert formData to JSON
      });

      if (response.ok) {

        const data = await response.json();
        if (data) {
          alert(data.message);
          window.location.href = '/login'
          // Optionally, you can perform actions with the data received from the server.
        }
      }
      // Check if data is valid JSON
      else {
        console.error("Invalid JSON response from the server");
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };

  return (
    <div className="">
      <div
        className="max-w-screen-2xl min-h-screen  mx-auto -mt-20 bg-no-repeat bg-right bg-cover font-sans bg-[#191A29] first-line:"
        style={{ backgroundImage: `url('/Dna.png')` }}
      >
        <div className="max-w-md mx-48 pt-36 py-9">
          <div className="flex flex-col gap-2">
            <h1 className="text-xl text-white">
              <span className="text-[#8167E6] font-semibold text-2xl font-mono">Sign Up</span>
            </h1>
          </div>

          <div className="w-full max-w-xs">
            <form className=" ">
              <div className="my-8">
                <label className="block text-gray-700 text-xs font-bold mb-2 " htmlFor="Fullname">
                  Fullname
                </label>
                <input
                  className="shadow appearance-none border bg-transparent border-gray-600 rounded-xl text-xs w-full py-3 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  type="text"
                  placeholder="Fullname"
                  id="username"
                />
              </div>
              <div className="my-8">
                <label className="block text-gray-700 text-xs font-bold mb-2 " htmlFor="username">
                  Email
                </label>
                <input className="shadow appearance-none border bg-transparent border-gray-600 rounded-xl text-xs w-full py-3 px-3 text-white leading-tight focus:outline-none focus:shadow-outline" 
                id="email" 
                type="email" 
                name="email" 
                value={formData.email}
                placeholder="email@example.com" 
                onChange={handleChange}/>
              </div>
              <div className="mb-6">
                <label className="block text-gray-700 text-xs font-bold mb-2" htmlFor="">
                  EMR
                </label>
                <input
                  className="shadow appearance-none border bg-transparent border-gray-600 rounded-xl text-xs w-full py-3 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  id="emr"
                  name="emr"
                  value={formData.emr}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-6">
                <label className="text-white" htmlFor="">
                  Provider Type :
                </label>
                <select
                  className="ml-3 px-4 py-2 border border-gray-600 text-gray-400 outline-none bg-transparent rounded-xl"
                  name="provider_type"
                  value={formData.provider_type}
                  onChange={handleChange}
                >
                  <option value="">--Select</option>
                  <option value="MD/DO">MD/DO</option>
                  <option value="NP/PA">NP/PA</option>
                  <option value="RN">RN</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div>
                <div className="mb-6">
                  <label className="block text-gray-700 text-xs font-bold mb-2" htmlFor="termsCheckbox">
                    Terms and Condition
                  </label>
                  <input
                    type="checkbox"
                    id="termsCheckbox"
                    name="terms_and_service"
                    checked={formData.terms_and_service}
                    onChange={handleCheckboxChange}
                  />
                </div>

                <div className="mb-6">
                  <label className="block text-gray-700 text-xs font-bold mb-2" htmlFor="baaCheckbox">
                    BAA Agreement
                  </label>
                  <input
                    type="checkbox"
                    id="baaCheckbox"
                    name="baa_agreement"
                    checked={formData.baa_agreement}
                    onChange={handleCheckboxChange}
                  />
                </div>
                <div className="mb-6">
                  <label className="block text-gray-700 text-xs font-bold mb-2" htmlFor="privacyCheckbox">
                    Privacy policy
                  </label>
                  <input
                    type="checkbox"
                    id="privacyCheckbox"
                    name="privacy_policy"
                    checked={formData.privacy_policy}
                    onChange={handleCheckboxChange}
                  />
                </div>
              </div>
              <div className="mb-6">
                <label className="block text-gray-700 text-xs font-bold mb-2" htmlFor="password">
                  Password
                </label>
                <input
                  className="shadow appearance-none bg-transparent border border-gray-600 rounded-xl w-full py-3 px-3 text-white mb-3 leading-tight focus:outline-none focus:shadow-outline"
                  id="password"
                  name="password"
                  type="password"
                  value={password}
                  onChange={handleChange}
                  placeholder="******************"
                />
              </div>
              <div className="mb-6">
                <label className="block text-gray-700 text-xs font-bold mb-2" htmlFor="password">
                  Confirm Password
                </label>
                <input
                  className="shadow appearance-none bg-transparent border border-gray-600 rounded-xl w-full py-3 px-3 text-white mb-3 leading-tight focus:outline-none focus:shadow-outline"
                  id="confirmPassword"
                  name="confirm_password"
                  type="password"
                  value={confirmPassword}
                  placeholder="******************"
                  onChange={handleChange}
                />
              </div>

              <div className="my-8">
                <button
                  className="w-full bg-[#8167E6] py-3 text-white font-light rounded-xl text-xs hover:bg-white hover:text-[#8167E6] focus:outline-none focus:shadow-outline"
                  type="button"
                  onClick={handleSubmit}
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
