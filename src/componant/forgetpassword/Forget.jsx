import { NavLink } from "react-router-dom";
import "./Forget.css";

const Forgetpassword = () => {
  return (
    <>
      <div className="login">
        <div className="login_maxwidth">
          <div className="login-container">
            <h2>Foget Password</h2>
            <form>
              <div className="input-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div className="input-group">
                <label htmlFor="password">New Password</label>
                <input
                  type="password"
                  id="password"
                  placeholder="Enter your new password"
                  required
                />
              </div>
              <button type="submit" className="login-btn">
                Reset Password
              </button>
            </form>
            <div className="forgot-password">
              <NavLink to={"/login"}>Login Now </NavLink>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Forgetpassword;
