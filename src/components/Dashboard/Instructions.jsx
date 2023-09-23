"use client";
import React from "react";
import { BASE_URL } from "@/constant";
import { useState, useEffect } from "react";
import getToken from "@/hook/getToken";
import toast from "react-hot-toast";
const Instructions = ({ instruction, id, transcript }) => {
  console.log(instruction);
  // Function to construct the request body

  const token = getToken();

  const [updatedInstructions, setUpdatedInstructions] = useState(instruction);
  const [instLike, setInstlike] = useState(false)
  const [instDislike, setInstDislike] = useState(false);
  const isLiked = instLike ? "violet" : "white"
  const isDisliked = instDislike ? "violet" : "white"

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
        patient_instruction: updatedInstructions,
        id: id,
      };
      console.log(requestBody);

      const response = await fetch(`${BASE_URL}/api/edit-patient-instruction`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(requestBody),
      });
      const data = await response.json();
      if (response.ok) {
       
        toast.success(data.message);
      } else {
        // Handle API errors
        toast.error(data.message);
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

  const handleLike = async () => {
    try {
      const requestBody = {
        transcript: transcript,
        reviewed_field: "Patient Instr",
        reviewed_content: updatedInstructions,
        review_value: true, // Toggle the review_value
        instLike: true, // Update soapLike based on review_value
        patient_id: id,
      };
      console.log("Request body>>>>",requestBody);
   
      const response = await fetch(`${BASE_URL}/api/write-csv-review`, {
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
        toast.error("Error sending data to the API");
      }
    } catch (error) {
      // Handle network or other errors
     
    }
  };

  const handleDislike = async () => {
    try {
      const requestBody = {
        transcript: transcript,
        reviewed_field: "Patient Instr",
        reviewed_content: updatedInstructions,
        review_value: false, // Toggle the review_value
        instDislike: true, // Update soapLike based on review_value
        patient_id: id,
      };
      console.log("Request body>>>>",requestBody);
   
      const response = await fetch(`${BASE_URL}/api/write-csv-review`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(requestBody),
      });
      const data = await response.json();
      if (response.ok) {
     
        toast.success(data.message);
        
      } else {
        // Handle API errors
        toast.error(data.message);
      }
    } catch (error) {
      // Handle network or other errors
     
    }
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
            <div className="flex justify-end gap-2">
              <button 
              type="button"
              onClick={() => {
                handleLike()
                setInstlike(true);
                
              }}>
               
                <svg xmlns="http://www.w3.org/2000/svg" fill={isLiked} viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 text-black border border-white rounded bg-white">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z" />
                </svg>
                </button>
                <button
                type="button"
                onClick={() => {
                  handleDislike()
                  setInstDislike(true)
                }}>
                <svg xmlns="http://www.w3.org/2000/svg" fill={isDisliked} viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 text-black border border-white rounded bg-white">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M7.5 15h2.25m8.024-9.75c.011.05.028.1.052.148.591 1.2.924 2.55.924 3.977a8.96 8.96 0 01-.999 4.125m.023-8.25c-.076-.365.183-.75.575-.75h.908c.889 0 1.713.518 1.972 1.368.339 1.11.521 2.287.521 3.507 0 1.553-.295 3.036-.831 4.398C20.613 14.547 19.833 15 19 15h-1.053c-.472 0-.745-.556-.5-.96a8.95 8.95 0 00.303-.54m.023-8.25H16.48a4.5 4.5 0 01-1.423-.23l-3.114-1.04a4.5 4.5 0 00-1.423-.23H6.504c-.618 0-1.217.247-1.605.729A11.95 11.95 0 002.25 12c0 .434.023.863.068 1.285C2.427 14.306 3.346 15 4.372 15h3.126c.618 0 .991.724.725 1.282A7.471 7.471 0 007.5 19.5a2.25 2.25 0 002.25 2.25.75.75 0 00.75-.75v-.633c0-.573.11-1.14.322-1.672.304-.76.93-1.33 1.653-1.715a9.04 9.04 0 002.86-2.4c.498-.634 1.226-1.08 2.032-1.08h.384" />
                </svg>
                </button>
              </div>
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
