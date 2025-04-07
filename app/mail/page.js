'use client';
import { useEffect, useState } from "react";

export default function Page() {
  // State to store the fetched data
  const [loading, setloading] = useState(true)
  const [userData, setUserData] = useState([]);
  const [View, setView] = useState(false)
  const [SelectedUser, setSelectedUser] = useState(null)

  // Fetch data inside useEffect
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch data from the API
        const response = await fetch('/api/contact', {
          method: "GET"
        });

        // If the response is successful, parse the data
        if (response.ok) {
          const data = await response.json();
          setUserData(data); // Store the fetched data in the state
          setloading(false)
        } else {
          console.error("Failed to fetch data");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData(); // Call the fetchData function
  }, []); // Empty dependency array to run the effect once on mount
  const handleView = (e)=>{ 
    setView(true)
    const user = userData.find((users, index)=> index === e)
    setSelectedUser(user)  
  }
  return (
    <div className="h-[85vh] bg-gray-600 overflow-auto">
      <h1 className="text-center text-3xl my-3 font-semibold">Contact Form Data</h1>
        <div className="">  
            {loading ? <div className="">Loading....</div>: userData.length > 0 ? <div className="relative">
            {userData.map((user, index)=>(
                <div className="flex"  key={index}>
                    <div onClick={()=>handleView(index)} className=" w-[30vw] h-14 overflow-hidden flex px-2 py-1 flex-col border-2"><h1 className="text-sm">{user.email}</h1>
                    <p className="font-semibold text-blue-400">{user.message}</p></div>
                    <div className="w-[70vw] border-l-2 bg-gray-600">{View && <div className="absolute top-4 right-[300px] overflow-hidden w-[500px]" >
                    <h1 className="text-3xl font-bold text-black mb-10">{SelectedUser.name}</h1>
                    <h2 className="text-xl mb-4 ">Email: <span className="text-blue-400">{SelectedUser.email}</span></h2>
                    <p className="text-sm text-white bg-[#252020] p-2 min-h-[100px]">Message: <span className="font-semibold text-xl">{SelectedUser.message}</span></p>
                    </div> }</div>
                </div>
            ))}
        </div>:<div>No Posts available</div>}       
            
            </div>
         </div>
        
  );
}
