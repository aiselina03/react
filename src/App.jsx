// import "./style.css";
// import React from "react";
// import { useState } from "react";

// function App() {
//   let [count, setCount] = useState(1);

//   const incrementCount = () => {
//     setCount(count + 1);
//   };
//   const decrementCount = () => {
//     if (count>1) {
//         setCount(count - 1);
//     }
//   };
//   return (
//     <div className="App">
//       <button onClick={incrementCount}>Increase</button>
//       <h1>{count}</h1>
//       <button onClick={decrementCount} >Decrease</button>
//     </div>
//   );
// }
// export default App;



import Modal from "./Components/Modal";
import "./style.css";
import React, { useState } from 'react'

function App() {
  const[openModal,setOpenModal]=useState(false);
  // const clickModal=()=>{
  //   setOpenModal(!openModal)
  // }
  return (
    <div>
      <button onClick={()=>setOpenModal(true)}>OpenModal</button>
      {openModal &&  <Modal setOpenModal={setOpenModal}/>}
     
    </div>
  )
}

export default App
