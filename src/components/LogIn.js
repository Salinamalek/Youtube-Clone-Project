import { useState } from "react";
import "./LogIn.css"
export default function LogIn(){

  const [logIn, setLogIn] = useState(false);

  const toggleLogIn = () => {
    setLogIn(!logIn);
  };

  
  if (logIn) {
    document.body.classList.add("active-login");
  } else {
    document.body.classList.remove("active-login");
  }
    return (
    <>
      <button onClick={toggleLogIn} className="btn-login">
        Log In
      </button>

      {logIn && (
        <div className="login">
          <div onClick={toggleLogIn} className="overlayLg"></div>
          <div className="login-content">
            <h2>LOG IN</h2>
            <form>
              <input placeholder="Username" />
              <br />
              <input placeholder="Password" type="password" />
            </form>
            <button className="logInSubmit" type="submit" onClick={toggleLogIn}>
              Sign In
            </button>
            <button className="close-login" onClick={toggleLogIn}>
              X
            </button>
          </div>
        </div>
      )}
    </>
  );
}