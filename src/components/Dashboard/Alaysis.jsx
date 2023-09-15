import React from 'react'

const Alaysis = ({analysis}) => {
  return (
    <div className='max-w-full '>
    <div className="flex flex-col gap-3">
        <div className="w-full bg-[#2F303D] rounded-xl p-4">

            <div className="max-w-full flex flex-col gap-2">

                <pre className='text-xs text-white' style={{ maxWidth: '48rem', overflowX: 'auto' }}>{analysis.billing_recommendations}</pre>
                <pre className='text-xs text-white' style={{ maxWidth: '48rem', overflowX: 'auto' }}>{analysis.clinical_recommendations}</pre>
            </div>
        </div>
    
       
  
    </div>
</div>
  )
}

export default Alaysis