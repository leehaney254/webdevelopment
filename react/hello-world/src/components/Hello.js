import React from "react";

const Hello = () => {
  // return (
  //   <div>
  //     <h1>Hello Leehaney</h1>
  //   </div>
  // )
  return React.createElement(
    'div',
    { id: 'Hello', className: 'hyello' },
    React.createElement('h1', null, 'Hello Leehaney')
  )
}

export default Hello