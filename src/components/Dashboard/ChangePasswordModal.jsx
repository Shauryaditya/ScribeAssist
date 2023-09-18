'use client'
import React, { useState } from 'react'
import { BASE_URL } from '@/constant';
import getToken from '@/hook/getToken';
import toast from 'react-hot-toast';
const ChangePasswordModal = ({ visible, onClose }) => {
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  // Function to handle form submission
  const handleSubmit = async () => {
    try {
      // Check if newPassword and confirmPassword match
      if (newPassword !== confirmPassword) {
        toast.error('New Password and Confirm Password must match.');
        return;
      }
      const access_token = getToken()
      // Create the request body
      const requestBody = {
        old_password: oldPassword,
        password: newPassword,
        confirm_password: confirmPassword
      };
      console.log(requestBody);
      // Send a POST request to the API
      const response = await fetch(`${BASE_URL}/api/change-old-password`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${access_token}`,
        },
        body: JSON.stringify(requestBody),
      });

      // Handle the response as needed
      if (response.ok) {
        // Password changed successfully, you can close the modal or perform other actions
        toast.success('Password changed successfully.');
        onClose();
      } else {
        // Handle errors from the API
        const data = await response.json();
       toast.error(`Error: ${data.message}`);
      }
    } catch (error) {
      console.error('An error occurred:', error);
    }
  };
  if (!visible) return null;
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-30 backdrop-blur-sm">
      <div className="w-1/3 rounded bg-[#222331] p-8">
        <div className="flex flex-col gap-6  border-solid border-[#D0D0D0] py-4  ">
          <div className="flex flex-col">
            <p className=" text-lg font-semibold text-[#8167E6]">Change Password</p>

          </div>
          <div className="flex">
            <input
              type="text"
              className="w-full bg-transparent rounded-xl border border-solid 
                             border-[#888C8C] px-2 py-1"
              placeholder="Old Password"
              value={oldPassword}
              onChange={(e) => setOldPassword(e.target.value)}
            />
          </div>

          <div className="flex flex-col">

            <div className="w-full flex justify-between rounded-xl border border-solid 
    border-[#888C8C] px-2 py-1">
              <input
                className="outline-0 bg-transparent"
                type="text"
                placeholder="New Password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}

              />

            </div>
          </div>
          <div className="flex">
            <input
              type="text"
              className="w-full bg-transparent rounded-xl border border-solid 
                             border-[#888C8C] px-2 py-1"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>

          <div className="mt-4 flex justify-end gap-2">
            <button

              className="w-1/2 px-6 py-3 bg-[#222331] bg-opacity-80  text-white rounded-xl text-sm hover:bg-white hover:text-black transition-all duration-300"
              onClick={() => onClose()}
            >
              Cancel
            </button>
            <button
              className=" w-1/2 px-6 py-3 bg-[#8167E6] rounded-xl text-white text-sm hover:bg-white"
              type="submit"
              onClick={handleSubmit}
            >
              SUBMIT
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ChangePasswordModal