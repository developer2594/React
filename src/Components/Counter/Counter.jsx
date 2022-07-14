//import React from "react";
import React, { useState } from 'react';
import Input from './../Inputs/Inputs'


const Counter = () => {
   //let Likes = 1;
   //function Increment() {
   //   Likes += 1;
   //   console.log(Likes);
   //}
   //function Dicrement() {
   //   Likes -= 1;
   //   console.log(Likes);
   //}
   const [Count, setLikes] = useState(0)
   // состояние счетчика
   function increment() {
      setLikes(Count + 1)
   }

   function dicrement() {
      setLikes(Count - 1)
   }
   return (
      <>
         <h1>{Count}</h1>
         <Input />
         <button onClick={increment}>Increment</button>
         <button onClick={dicrement}>Dicrement</button>
      </>
   );
}
export default Counter;