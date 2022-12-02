import React, { useState,useMemo } from "react";

 const Usememo=()=> {
  const [counter, setCounter] = useState(0);
  const [number, setNumber] = useState(5);
  const Factorial = useMemo(()=>fact(number),[number]) // help us to improve the performNCE OF APPLICATION  when we are performing most expensive function 
// useMemo will not run for every rerender happens 
// it will run during the first render and when its dependency values changes 
// useEffect will run after render of the component 
//usememo will run during render of the component


// git hub is a developer community 
// github is an  hoisting service platform 
// that we can able to store  multiple file 
// on git we can able to store any type of files by creating a repository
// github encourage teams to work together to build and edit their site content
  return (
    <div>
      <center>
        <h1>Github Token Notworking</h1>
        Factorial :{Factorial}<br/>
        <button onClick={() => setCounter(counter + 1)}>Increment</button>
        <button onClick={() => setCounter(counter - 1)}>Decrement</button>
        <br />
        <button onClick={() => setNumber(number + 1)}>Number</button>
        <br />
        Count:{counter}
      </center>
    </div>
  );
 
}


  const fact = (n) => {
    let answer = 1;
    for (var i = n; i >= 1; i--) {
      answer = answer * i;
    }
    console.log("Factorial function calling");
    return answer;
  };
export default Usememo
