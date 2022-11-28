import React, { useState } from "react";
import "./Modal.css";

export default function Modal() {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }

  // return (
  //   <>
  //     <button onClick={toggleModal} className="btn-modal">
  //       ERROR: Click Here for More Info
  //     </button>

  //     {modal && (
  //       <div className="modal">
  //         <div onClick={toggleModal} className="overlay"></div>
  //         <div className="modal-content">
  //           <h2>ERROR 400</h2>
  //           <p>Something went wrong! Please try again later.</p>
  //           <button className="close-modal" onClick={toggleModal}>
  //             X
  //           </button>
  //         </div>
  //       </div>
  //     )}
  //   </>
  // );

  return (
    <>
      <button onClick={toggleModal} className="btn-modal">
        Log In
      </button>

      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <h2>LOG IN</h2>
            <form>
              <input placeholder="Username" />
              <br />
              <input placeholder="Password" type="password" />
            </form>
            <button className="logInSubmit" type="submit" onClick={toggleModal}>
              Sign In
            </button>
            <button className="close-modal" onClick={toggleModal}>
              X
            </button>
          </div>
        </div>
      )}
    </>
  );
}
