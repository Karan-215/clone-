import React from 'react';
import StudentsList from './StudentsList';
import axios from 'axios';

function StudentCard({user}) {
  
	return(

		<>
		
  <div class=" rounded-md p-3 w-[32rem] flex flex-col  shrink-0 m-2">
    <img class="rounded-md self-center h-48 w-[28rem] shadow-md object-cover" src={user.picture.large} alt="" />
    <div class=" mt-2 justify-between ml-5">
      <h3 class="text-lg text-indigo-600 font-semibold">{user.name.first} {user.name.last}<span class="text-indigo-500 flex">{user.id.name}</span></h3>
      <div class="flex">
        <a class="w-6 self-center" href={user.linkedin} target="blank"> <img src="https://img.icons8.com/plumpy/344/twitter--v1.png" alt="" /></a>
        <a class="w-6 ml-2 self-center" href={user.twitter} target="blank"> <img src="https://img.icons8.com/material-outlined/344/linkedin--v1.png" alt="" /></a>
      </div>
    </div>
  </div>
  

  </>
	);
}
export default StudentCard; 