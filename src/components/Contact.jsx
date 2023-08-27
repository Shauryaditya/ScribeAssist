import React from 'react'

const Contact = () => {
  return (
    <div className="max-w-screen-2xl mx-auto overflow-hidden">
      <div className="mx-4 md:mx-48">
        <div className="flex flex-col gap-8">
          <h1 className='text-4xl text-white'><span className='text-violet-500'>Contact</span> Us</h1>
          <p className='text-white'>SAAI is always here to help you. Our support system worls tirelessly to provide the best experience for our diagonostitions. Have a question? Ask us anything</p>
        </div>
        <div className="flex flex-col gap-4 py-12">
          <div className="flex flex-col gap-4 md:gap-0 md:flex-row justify-between">
            <div className="border border-white px-10 md:px-40 py-2 rounded-lg">
              <input type="text"
                placeholder='Name'
                className='bg-transparent outline-none' />
            </div>
            <div className="border border-white px-36 py-2 rounded">
              <input type="text"
                placeholder='Name'
                className='bg-transparent outline-none' />
            </div>
          </div>
          <div className="border border-white px-10 py-12 md:px-48 md:py-24 rounded">
            <input type="text"
              placeholder='Type your text here'
              className='bg-transparent w-full h-full font-bold outline-none focus:outline-none' />
          </div>

        </div>
      </div>
    </div>
  )
}

export default Contact