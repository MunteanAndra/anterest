import React from "react";

import './Login.css';

function Login() {
    return (
       <div className="form">
         <form>
           <div className="input-container">
             <label>Username </label>
             <input type="text" name="uname" required />
           </div>
           <div className="input-container">
             <label>Password </label>
             <input type="password" name="pass" required />
           </div>
           <div className="button-container">
             <label>Confirm </label>
             <input type="submit" />
           </div>
         </form>
       </div>
    );

 }

 export default Login;