import React, { useState,useMemo } from "react";

export default function Count() {
  const [counter, setCounter] = useState(0);
  const [number, setNumber] = useState(5);
//   const Factorial = useMemo(() => {fact(number)}, [number])

//   const fact = (n) => {
//     let answer = 1;
//     for (var i = n; i >= 1; i--) {
//       answer = answer * i;
//     }
//     console.log("Factorial function calling");
//     return answer;
//   };

  return (
    <div>
      <center>
        {/* Factorial :{Factorial}<br/> */}
        <button onClick={() => setCounter(counter + 1)}>Increment</button>
        <br />
        <button onClick={() => setCounter(counter - 1)}>Decrement</button>
        <br />
        Count:{counter}
      </center>
    </div>
  );
 
}
