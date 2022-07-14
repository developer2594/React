import React, { useState } from 'react';

const Input = () => {
   // состояние input
   const [Value, setValue] = useState('text in input')

   return (
      <>
         <h1>{Value}</h1>
         <input
            type='text'
            value={Value}
            onChange={event => setValue(event.target.value)}
         />
      </>
   );
}
export default Input;