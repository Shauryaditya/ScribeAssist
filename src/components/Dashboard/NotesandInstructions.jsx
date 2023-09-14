'use client'
import React,{useState, useEffect} from 'react'
import Notes from './Notes'
import Instructions from './Instructions'
import Alaysis from './Alaysis'


const NotesandInstructions = () => {
    const heading = [
        {
            id: '8uhtyuujhg6987yhrtyhytg',
            name: 'Notes'
        },
        {
            id: '8uhty45656uujhg6987yhrtyhytg',
            name: 'Instructions'
        },
        {
            id: '8uhtyrt436987yhrtyhytg',
            name: 'Alaysis'
        },
     
    ]
    const [selectedTab, setSelectedTab] = useState(1)
    const queryParams = new URLSearchParams(window.location.search);
    const id = queryParams.get("id");
    const access_token = localStorage.getItem('access_token');
    console.log("ID",id);

    const [instructions, setInstructions] = useState([]);


    useEffect(() => {
        const fetchNotes = async () => {
            try {
                const response = await fetch(`https://scribe-assist.onrender.com/api/get-patient-details?id=${id}`, {
                    headers: {
                        Authorization: `Bearer ${access_token}`
                    }
                });
    
                if (response.ok) {
                    const data = await response.json();
                    setInstructions(data);
                } else {
                    console.error('Failed to fetch data');
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
    
        fetchNotes(); // Call the function to initiate the API request
    }, [id]);
    
    console.log("Instructions >>", instructions);
    

    return (
        <div className='flex gap-14 p-10'>
            
            <div className='grow flex flex-col'>
               
                <div className='max-w-xs flex justify-between bg-[#2F303D] rounded-lg overflow-hidden'>
                    {
                        heading.map((item, index) => (
                            <div
                                onClick={() => setSelectedTab(index + 1)}
                                key={item.id} className={`w-1/3 h-10 flex justify-center rounded-lg items-center cursor-pointer text-sm ${selectedTab === index + 1 ? 'text-[#8167E6] bg-white' : 'text-gray-500 '}`}>{item.name}</div>
                        ))
                    }
                     {/* <div className="flex">
                    <button className='text-xs text-white bg-[#2F303D] rounded-md px-4 py-2'>Save</button>
                    <button className='text-xs text-white bg-[#2F303D] rounded-md px-4 py-2'>Save</button>
                </div> */}
                </div>
               
              
                <div className='p-0 mt-4'>
                    {
                        selectedTab === 2 ?
                            <Instructions instruction={instructions.patient_details?.patient_instraction} /> : null
                    }
                    {
                        selectedTab === 1 ?
                            <Notes notes={instructions.patient_details?.soap_note} /> : null
                    }
                    {
                        selectedTab === 3 ?
                            <Alaysis /> : null
                    }
                </div>
            </div>
        </div>
    )
}

  

export default NotesandInstructions