/* Function component*/
import React from "react";    //always import it

function Greet(props) {
  console.log(props);
  return (
    //can only return on html element.
    <div>
      <h1>Hello {props.name} a.k.a {props.hero}</h1>
      {props.children}
    </div>
  )
}

export default Greet
//there is also named exports
//export const Greet = () => <h1>Hello Lee</h1>