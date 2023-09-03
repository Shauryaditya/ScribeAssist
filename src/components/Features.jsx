import React from 'react'
import Card from './Card'

const Features = () => {
  const data = [
    {
      id: 1,
      icon: '/Widget.svg',
      name:"Versatility",
      desc:"Let SAAI adapt to your needs - whether it's via live listening during patient visits (ScribeAssist) or via dictating your encounters to SAAI later (DictAssist).",
    },
     {
      id: 2,
      icon: '/Vector.svg',
      name:"ScribeAssist",
      desc:"Say goodbye to visit interruptions for jotting down details. SAAI listens in, completing your entire note effortlessly before you leave the room.",
    },
     {
      id: 3,
      icon: '/Audio.svg',
      name:"DictAssist",
      desc:"Let SAAI adapt to your needs - whether it's via live listening during patient visits (ScribeAssist) or via dictating your encounters to SAAI later (DictAssist).",
    },
     {
      id: 4,
      icon: '/Astronomy.svg',
      name:"Multilingual",
      desc:"Let SAAI adapt to your needs - whether it's via live listening during patient visits (ScribeAssist) or via dictating your encounters to SAAI later (DictAssist).",
    },
     {
      id: 5,
      icon: '/Time.svg',
      name:"36 Hours",
      desc:"Let SAAI adapt to your needs - whether it's via live listening during patient visits (ScribeAssist) or via dictating your encounters to SAAI later (DictAssist).",
    },
     {
      id: 6,
      icon: '/Flawless.svg',
      name:"Flawless Precision",
      desc:"Let SAAI adapt to your needs - whether it's via live listening during patient visits (ScribeAssist) or via dictating your encounters to SAAI later (DictAssist).",
    },
  ]
  return (
    <div className="max-w-screen-2xl mx-auto bg-[#191A29]">
        <div className="mx-4 md:mx-24 lg:mx-36 xl:mx-48">
          <div className="pt-24">
          <h1 className='text-4xl text-white'> <span className='text-violet-500'>Top</span> Features</h1>
          </div>
            
          
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-24">
              {data.map((item) => (
                <Card key={item.id} props={item}/>
                ))}
            </div>
           
        </div>
    </div>
  )
}

export default Features