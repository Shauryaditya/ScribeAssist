"use client";
import React, { useState, useEffect } from "react";
import Notes from "./Notes";
import { useSearchParams } from "next/navigation";
import getToken from "@/hook/getToken";
import Instructions from "./Instructions";
import Alaysis from "./Alaysis";
import { BASE_URL } from '@/constant';


const NotesandInstructions = () => {
  const heading = [
    {
      id: "8uhtyuujhg6987yhrtyhytg",
      name: "Notes",
    },
    {
      id: "8uhty45656uujhg6987yhrtyhytg",
      name: "Instructions",
    },
    {
      id: "8uhtyrt436987yhrtyhytg",
      name: "Analysis",
    },
  ];

  const [selectedTab, setSelectedTab] = useState(1);
  const searchParams = useSearchParams()
  const id = searchParams.get('id')
  const token = getToken()
  console.log("ID", id);

  const [instructions, setInstructions] = useState([]);
  const [accessControl, setAccessControl] = useState({})

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const response = await fetch(
          `${BASE_URL}/api/get-patient-details?id=${id}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (response.ok) {
          const data = await response.json();
          setInstructions(data);
          // Set access control based on data received
          if (data.access_control) {
            setAccessControl(data.access_control);
          }
        } else {
          console.error("Failed to fetch data");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchNotes(); // Call the function to initiate the API request
  }, [id, token]);

  console.log("Instructions >>", instructions);

  return (
    <div className="flex gap-14 p-10">
      <div className="grow flex flex-col">
        <div className="w-full flex justify-between py-4">
          <div className="w-1/2 flex justify-between bg-[#2F303D] rounded-lg overflow-hidden">
            {heading.map((item, index) => (
              <div
                key={item.id}
                className={`w-1/3 h-10 flex justify-center rounded-lg items-center cursor-pointer text-sm ${selectedTab === index + 1
                  ? "text-[#8167E6] bg-white"
                  : "text-gray-500"
                  }`}
              >
                {accessControl[item.name.toLowerCase()] ? (
                  <div
                    onClick={() => setSelectedTab(index + 1)}
                    className="flex items-center"
                  >
                    {item.name}
                  </div>
                ) : (
                  <div className="flex items-center">
                    <span className="mr-2">🔒</span> {item.name}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="flex justify-between ">
       
            <button className="text-xs text-white bg-[#2F303D] rounded-md px-4 py-2">
              Cancel
            </button>
          </div>
        </div>


        <div className="p-0 mt-4">
          {selectedTab === 2 ? (
            <Instructions
              id={id}
              instruction={instructions.patient_details?.patient_instruction}
            />
          ) : null}
          {selectedTab === 1 ? (
            <Notes
              id={id}
              notes={instructions.patient_details?.soap_note} />
          ) : null}
          {selectedTab === 3 ? <Alaysis
            id={id}
            analysis={instructions.patient_details?.analyze_note} /> : null}
        </div>
      </div>
    </div>
  );
};

export default NotesandInstructions;
