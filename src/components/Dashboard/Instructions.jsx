"use client";
import React from "react";
import { BASE_URL } from "@/constant";
import { useState, useEffect } from "react";
import getToken from "@/hook/getToken";
import toast from "react-hot-toast";
const Instructions = ({ instruction, id }) => {
  console.log(instruction);
  // Function to construct the request body

  const token = getToken();

  const [updatedInstructions, setUpdatedInstructions] = useState(instruction);

  useEffect(() => {
    // Initialize state variables with data from props
    setUpdatedInstructions(instruction);
  }, [instruction]);

  const handleInstructionsChange = (e) => {
    setUpdatedInstructions(e.target.value); // Update the updatedNotes state
  };

  const updateInstruction = async () => {
    try {
      const requestBody = {
        patient_instraction: instruction,
        id: id,
      };
      console.log(requestBody);

      const response = await fetch(`${BASE_URL}/api/edit-patient-instraction`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(requestBody),
      });
      if (response.ok) {
        const data = await response.json();
        toast.success(data.message);
      } else {
        // Handle API errors
        console.error("Error sending data to the API");
      }
    } catch (error) {
      // Handle network or other errors
      console.error("Error:", error);
    }
  };

  // Function to copy the data to the clipboard
  const copyToClipboard = () => {
    const dataToCopy = `
        
          Instructions: ${updatedInstructions}
        `;

    navigator.clipboard
      .writeText(dataToCopy)
      .then(() => {
        toast.success("Data copied to clipboard");
      })
      .catch((error) => {
        console.error("Error copying data to clipboard:", error);
        toast.error("Error copying data to clipboard");
      });
  };

  return (
    <div className="max-w-full ">
      <div className="flex flex-col gap-3">
        <div className="w-full bg-[#2F303D] rounded-[20px] p-4">
          <div className="flex flex-col gap-2">
            <div className="flex justify-between">
              <p className="text-white font-mono text-lg font-bold">
                Patient Instructions
              </p>
              <div className="flex gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  class="w-6 h-6 text-white"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                  />
                </svg>
                <button
               
                  onClick={copyToClipboard}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="transparent"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="w-6 h-6 text-white"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M15.666 3.888A2.25 2.25 0 0013.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 01-.75.75H9a.75.75 0 01-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 011.927-.184"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <div className="max-w-full flex flex-col">
              <textarea
                class="appearance-none block w-full h-80  bg-transparent text-white border border-gray-400 rounded-xl py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-gray-500 text-xs overflow-y-scroll no-scrollbar"
                id="grid-password"
                value={updatedInstructions}
                onChange={handleInstructionsChange}
                type="text"
                placeholder="Type question here"
              />
            </div>
          </div>
        </div>
        <div className="flex justify-end">
          <button
            className="px-4 py-2 rounded-xl bg-violet-500 text-white text-xs"
            onClick={updateInstruction}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default Instructions;
