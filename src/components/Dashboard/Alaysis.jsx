import React from "react";

const Alaysis = () => {
  return (
    <div className="max-w-full ">
      <div className="flex flex-col gap-3">
        <div className="w-full bg-[#2F303D] rounded-xl p-4">
          <div className="flex flex-col gap-2">
            <div className="flex justify-between">
              <p className="text-white font-[IBM Plex Mono] text-sm font-bold">
                Patient
              </p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6 text-white"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                />
              </svg>
            </div>
            <div className="flex flex-row gap-4">
              <p className="text-xs text-white">John Doe</p>
              <p className="text-xs text-white">Male</p>
              <p className="text-xs text-white">50 years old</p>
            </div>
          </div>
        </div>
        <div className="w-full bg-[#2F303D] rounded-xl p-4">
          <div className="flex flex-col gap-2">
            <div className="flex justify-between">
              <p className="text-white font-[IBM Plex Mono] text-sm font-bold">
                Subjective
              </p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6 text-white"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                />
              </svg>
            </div>
            <p className="text-white text-xs">
              Presented to the clinic with a chief complaint of cough and
              congestion for 5 days. Patient denies shortness of breath, fever,
              chills, nausea, vommitting, diarrhea and abdominal pain. No other
              medical / surgical / social history or allergies were provided.
            </p>
          </div>
        </div>
        <div className="w-full bg-[#2F303D] rounded-xl p-4">
          <div className="flex flex-col gap-2">
            <div className="flex justify-between">
              <p className="text-white font-[IBM Plex Mono] text-sm font-bold">
                Objective
              </p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6 text-white"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                />
              </svg>
            </div>
            <p className="text-white text-xs">
              Patient appears well on examination. Vital signs are within
              nortmal limits. No other physical examination findings or relevant
              test results were discussed.
            </p>
          </div>
        </div>
        <div className="w-full bg-[#2F303D] rounded-xl p-4">
          <div className="flex flex-col gap-2">
            <div className="flex justify-between">
              <p className="text-white font-[IBM Plex Mono] text-sm font-bold">
                Assessment
              </p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6 text-white"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                />
              </svg>
            </div>
            <p className="text-white text-xs">
              The working diagonosis is an upper respiratory infection.
            </p>
          </div>
        </div>
        <div className="w-full bg-[#2F303D] rounded-xl p-4">
          <div className="flex flex-col gap-2">
            <div className="flex justify-between">
              <p className="text-white font-[IBM Plex Mono] text-sm font-bold">
                Plan
              </p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6 text-white"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                />
              </svg>
            </div>
            <ul className="list-disc pl-4">
              <li className="text-white text-xs">
                Advise patient to go home, rest, and relax.{" "}
              </li>
              <li className="text-white text-xs">
                Intruct patient to take Tylenol as needed for discomfort.
              </li>
              <li className="text-white text-xs">
                Recommend patient to take Mucinex as needed for cough.
              </li>
              <li className="text-white text-xs">
                Instruct patient to call 911 for chest pain or shortness of
                breath.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Alaysis;
