import React, { Component } from 'react';

const DisplayAll= props =>{

 return (
   <div>
   {props.friends.map((friend, i) => (
     <div key={i}> 
     {friend.name}</div>))}
   </div>
  )
}

export default DisplayAll;
