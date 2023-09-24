"use client";
import React, { useState, useEffect } from "react";
import { BASE_URL } from "@/constant";
import getToken from "@/hook/getToken";
import toast from "react-hot-toast";

const Notes = ({ notes, id, name, gender, age, transcript,soapLike,soapDislike }) => {
  console.log(notes);
  
  const [patientName, setPatientName] = useState(name);
  const [patientGender, setPatientGender] = useState(gender);
  const [patientAge, setPatientAge] = useState(age);
  const [review, setReview] = useState(false);
  const [Like, setLike] = useState(soapLike);
  const [Dislike, setDislike] = useState(soapDislike);
  const [isDisabled, setIsDisabled] = useState(false);
  const isLiked = Like ? "violet" : "transparent" 
  const isDisliked = Dislike ? "violet" : "transparent"



  const token = getToken();

  const [updatedNotes, setUpdatedNotes] = useState(notes);

  useEffect(() => {
    // Initialize state variables with data from props
    setUpdatedNotes(notes);
    if(soapLike || soapDislike){
      setIsDisabled(true);
    }else{
      setIsDisabled(false);
    }
  }, [notes]);

  const handleNotesChange = (e) => {
    setUpdatedNotes(e.target.value); // Update the updatedNotes state
  };
  // Function to construct the request body
  const updateSoapNote = async (e) => {
    e.preventDefault();
    try {
      const requestBody = {
        patient_name: patientName,
        patient_age: patientAge,
        patient_gender: patientGender,

        soap_note: updatedNotes,
        id: id,
      };
      console.log(requestBody);

      const response = await fetch(`${BASE_URL}/api/edit-soap-note`, {
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
      toast.error("Error:", error);
    }
  };

  // Function to copy the data to the clipboard
  const copyToClipboard = () => {
    const dataToCopy = `
      Patient Name: ${patientName}
      Gender: ${patientGender}
      Age: ${patientAge}
      Notes: ${updatedNotes}
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

  const handleLikeDislike = async (isLike) => {
    try {
      const updatedReviewValue = isLike; // Set review_value based on isLike
      let requestBody = {
        transcript: transcript,
        reviewed_field: "SOAP Note",
        reviewed_content: updatedNotes,
        review_value: updatedReviewValue, // Toggle the review_value
        patient_id: id,
      };

      if(updatedReviewValue){
        requestBody.soapLike = true
        setLike(true);
        setIsDisabled(true);
      }else{
        requestBody.soapDislike= true
        setDislike(true);
        setIsDisabled(true);
      }
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
        setIsDisabled(true);
      } else {
        // Handle API errors
        toast.error("Error sending data to the API");
      }
    } catch (error) {
      // Handle network or other errors
     
    }
  };

console.log(isDisabled);
  return (
    <div className="max-w-full ">
      <div className="flex flex-col gap-3">
        <div className="flex justify-between">
          <p className="text-white font-[IBM Plex Mono] text-sm font-bold">
            Patient
          </p>

          <button
         
            className="text-xs text-white bg-[#2F303D] rounded-md px-4 py-2"
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

        <form
          action=""
          onSubmit={(e) => {
            updateSoapNote(e);
          }}
        >
          <div className="w-full bg-[#2F303D] rounded-xl p-4">
            <div className="flex flex-col gap-2">
              <div className="flex flex-row gap-4">
                <div className="flex flex-col">
                  <label className="text-white text-xs" htmlFor="patientName">
                    Patient Name
                  </label>
                  <input
                    className="bg-transparent rounded-xl border border-gray-400 text-white text-xs py-2 px-4 mt-2"
                    type="text"
                    id="patientName"
                    value={patientName}
                    onChange={(e) => setPatientName(e.target.value)}
                    required
                  />
                </div>
                <div className="flex flex-col">
                  <label className="text-white text-xs" htmlFor="patientGender">
                    Gender
                  </label>
                  <select
                    className="bg-transparent rounded-xl border border-gray-400 text-white text-xs py-2 px-4 mt-2"
                    id="patientGender"
                    value={patientGender}
                    onChange={(e) => setPatientGender(e.target.value)}
                    required
                  >
                    <option className="text-gray-600" value="">
                      --Select
                    </option>
                    <option className="text-gray-600" value="Male">
                      Male
                    </option>
                    <option className="text-gray-600" value="Female">
                      Female
                    </option>
                    <option className="text-gray-600" value="Others">
                      Others
                    </option>
                  </select>
                </div>

                <div className="flex flex-col">
                  <label className="text-white text-xs" htmlFor="patientAge">
                    Age
                  </label>
                  <input
                    className="bg-transparent rounded-xl border border-gray-400 text-white text-xs py-2 px-4 mt-2"
                    type="text"
                    id="patientAge"
                    value={patientAge}
                    onChange={(e) => setPatientAge(e.target.value)}
                    required
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="w-full bg-[#2F303D] rounded-xl p-4 mt-8">
            <div className=" flex flex-col gap-2">
              <div className="flex justify-end gap-2">
                <button 
                 type="button"
                onClick={() =>{
                  handleLikeDislike(true);
                  setLike(true)
                  
                } }
                disabled={isDisabled}>
                 
                <svg xmlns="http://www.w3.org/2000/svg" fill={isLiked} viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 text-white border border-white rounded ">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z" />
                </svg>
                </button>
                <button
                type="button"
                onClick={() =>{
                 handleLikeDislike(false)
                setDislike(true)
                
                } }
                disabled={isDisabled}>
                <svg xmlns="http://www.w3.org/2000/svg" fill={isDisliked} viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 text-white border border-white rounded ">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M7.5 15h2.25m8.024-9.75c.011.05.028.1.052.148.591 1.2.924 2.55.924 3.977a8.96 8.96 0 01-.999 4.125m.023-8.25c-.076-.365.183-.75.575-.75h.908c.889 0 1.713.518 1.972 1.368.339 1.11.521 2.287.521 3.507 0 1.553-.295 3.036-.831 4.398C20.613 14.547 19.833 15 19 15h-1.053c-.472 0-.745-.556-.5-.96a8.95 8.95 0 00.303-.54m.023-8.25H16.48a4.5 4.5 0 01-1.423-.23l-3.114-1.04a4.5 4.5 0 00-1.423-.23H6.504c-.618 0-1.217.247-1.605.729A11.95 11.95 0 002.25 12c0 .434.023.863.068 1.285C2.427 14.306 3.346 15 4.372 15h3.126c.618 0 .991.724.725 1.282A7.471 7.471 0 007.5 19.5a2.25 2.25 0 002.25 2.25.75.75 0 00.75-.75v-.633c0-.573.11-1.14.322-1.672.304-.76.93-1.33 1.653-1.715a9.04 9.04 0 002.86-2.4c.498-.634 1.226-1.08 2.032-1.08h.384" />
                </svg>
                </button>

              </div>
              <textarea
                class="appearance-none block w-full h-80  bg-transparent text-white border border-gray-400 rounded-xl py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-gray-500 text-sm overflow-y-scroll no-scrollbar"
                id="grid-password"
                value={updatedNotes}
                onChange={handleNotesChange}
                type="text"
                placeholder="Type question here"
              />
            </div>
          </div>
          <div className="flex justify-end mt-4">
            <button
              className="px-4 py-2  mt-2 rounded-xl bg-violet-500 text-white text-xs"
              type="submit"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Notes;
