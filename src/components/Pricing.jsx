'use client'
import React, { useState, useEffect } from "react";
import PricingCard from './PricingCard'
import { BASE_URL } from '../constant'
const Pricing = () => {
  const [data, setData] = useState([])
  useEffect(() => {
    const apiUrl = `${BASE_URL}/api/get-plan-details`
    console.log(apiUrl);
    fetch(apiUrl).then(res => res.json()).then(data => {
      console.log(data.plan_details)
      setData(data.plan_details)
    })
  }, [])
  return (
    <>
      <div id="pricing" class="min-h-screen items-center bg-[#191A29] mb-10 overflow-y-scroll no-scrollbar">
        <div class="mt-32">
          <div class="text-start font-semibold mx-4 md:mx-44">
            <h1 class="text-4xl">
              <span class="text-violet-500 font-bold font-mono">Pricing </span>
              <span className="text-white font-mono">Plans</span>
            </h1>
          </div>

          <div class=" sm:flex flex-wrap justify-center items-center gap-8 md:mx-16 p-4">
            {
              data?.length ?
                data.map((item) => (
                  <PricingCard
                    key={item.plan_id}
                    planData={item}
                  />
                ))
                : null
            }
          </div>
        </div>
      </div>
    </>
  );
};

export default Pricing;
