"use client";
import React, { useState, useEffect } from "react";
import { BASE_URL } from "@/constant";
import getToken from "@/hook/getToken";
import toast from "react-hot-toast";

const Notes = ({ notes, id, name, gender, age }) => {
  console.log(notes);

  const [patientName, setPatientName] = useState(name);
  const [patientGender, setPatientGender] = useState(gender);
  const [patientAge, setPatientAge] = useState(age);

  const token = getToken();

  const [updatedNotes, setUpdatedNotes] = useState(notes);

  useEffect(() => {
    // Initialize state variables with data from props
    setUpdatedNotes(notes);
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
      if (response.ok) {
        const data = await response.json();
        toast.success(data.message);
      } else {
        // Handle API errors
        toast.error("Error sending data to the API");
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
              {/* <p className="text-xs text-white whitespace-pre">
                            {notes}
                        </p> */}
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
