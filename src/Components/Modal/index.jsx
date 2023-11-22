import React from "react";
import "./style.css";
function Modal({setOpenModal}) {
  return (
    <div>
      <div id="myModal" className="modal">
        <div className="modal-content">
          <span className="close" onClick={()=>setOpenModal(false)}>&times;</span>
          <p>Some text in the Modal..</p>
        </div>
      </div>
    </div>
  );
}

export default Modal;
