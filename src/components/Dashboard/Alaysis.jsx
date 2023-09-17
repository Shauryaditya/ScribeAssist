import React from 'react'

const Alaysis = ({ analysis }) => {
  return (
    <div className='max-w-full '>
      <div className="flex flex-col gap-3">
        <div className="w-full bg-[#2F303D] rounded-xl p-4">

          <div className="max-w-full flex flex-col gap-2">
            <textarea
              class="appearance-none block w-full h-64  bg-transparent text-white border border-gray-400 rounded-xl py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-gray-500 text-xs"
              id="grid-password"
              value={analysis.billing_recommendations}
              type="text"
              placeholder="Type question here"
            />
            <textarea
              class="appearance-none block w-full h-64 bg-transparent text-white border border-gray-400 rounded-xl py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-gray-500 text-xs"
              id="grid-password"
              value={analysis.clinical_recommendations}
              type="text"
              placeholder="Type question here"
            />
          </div>
        </div>



      </div>
    </div>
  )
}

export default Alaysis