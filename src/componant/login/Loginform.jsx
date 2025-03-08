import { NavLink } from "react-router-dom";
import "./Loginform.css";

const Loginform = () => {
  return (
    <>
      <div className="login">
        <div className="login_maxwidth">
          <div className="login-container">
            <h2>Welcome Back</h2>
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
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  placeholder="Enter your password"
                  required
                />
              </div>
              <button type="submit" className="login-btn">
                Login
              </button>
            </form>
            <div className="forgot-password">
              <NavLink to={"/forget-password"}>Forgot Password?</NavLink>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Loginform;
