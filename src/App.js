import React from "react";
import Hoc from "./component/Hoc";
//A Higher Order Component is an advanced technic in React for reusing component logic 2. Hoc is a pure function with zero sid effects and doesn't modify the input component 3. heigher order component is a function that takes a component and returns a new component
import Count from "./component/count";
import Usememo from './component/Usememo';
const App = (props) => {
  return (
    <div>
      <h1>Welcome user{props.name}</h1>
      {/* <Count /> */}
      <Usememo/>
    </div>
  );
};
export default Hoc(App);
