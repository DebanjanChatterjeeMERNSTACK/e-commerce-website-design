import React from "react";

import "./Reset.css";
import { NavLink } from "react-router-dom";

const Reset = () => {
  

 

  return (
    <div className="reset-container">
      <div className="reset-box">
        <h2>Reset Password</h2>
        <form >
          <div className="input-group">
            <label htmlFor="password">New Password</label>
            <input
              type="password"
              id="password"
              placeholder="Enter new password"
             
            />
          </div>
          <div className="input-group">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              placeholder="Confirm new password"
             
            />
          </div>
          <button type="submit" className="reset-btn">Reset Password</button>
        </form>
         <div className="forgot-password">
              <NavLink to={"/login"}>Login Now </NavLink>
            </div>
      </div>
    </div>
  );
};

export default Reset;
