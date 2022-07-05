import React from 'react';
import { useEffect,useState } from 'react';
import StudentCard from './StudentsCard';
import axios from 'axios'


function StudentsList({user}) {
   
	
    const [details,setDetails]= useState([])
  useEffect( () => {
      const token =  axios.get("https://randomuser.me/api/?results=100")
      token.then((response)=> {
          setDetails(response.data.results)
          console.log(response.data.results)
      })
  },[]);
    
    console.log('axiosssssssss')
    
    return(
		
		
 <>
 <h1 className='text-2xl block p-2 font-bold shadow-lg shadow-cyan-400'>students list </h1>
 <div className="flex flex-wrap mt-10 rounded-md shadow-2xl justify-center">

 {details.map((u)=>(<StudentCard  user={u}/>))}

 </div>

 </>

		
	);
}
export default StudentsList;