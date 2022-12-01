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


  return (
    <>
      <button onClick={toggleModal} className="btn-modal">
        ERROR → Click Here
      </button>

      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <h2>ERROR</h2>
            <img
              className="errImg"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Error.svg/1200px-Error.svg.png"
            />
            <p>Please input a valid search.</p>
            <button className="close-modal" onClick={toggleModal}>
              X
            </button>
          </div>
        </div>
      )}
    </>
  );

  // Log in feature
  // return (
  //   <>
  //     <button onClick={toggleModal} className="btn-modal">
  //       Log In
  //     </button>

  //     {modal && (
  //       <div className="modal">
  //         <div onClick={toggleModal} className="overlay"></div>
  //         <div className="modal-content">
  //           <h2>LOG IN</h2>
  //           <form>
  //             <input placeholder="Username" />
  //             <br />
  //             <input placeholder="Password" type="password" />
  //           </form>
  //           <button className="logInSubmit" type="submit" onClick={toggleModal}>
  //             Sign In
  //           </button>
  //           <button className="close-modal" onClick={toggleModal}>
  //             X
  //           </button>
  //         </div>
  //       </div>
  //     )}
  //   </>
  // );
}
