import { NavLink } from "react-router-dom";
import "./Registration.css";

const Registrationform = () => {
  return (
    <>
      <div className="register">
        <div className="register_maxwidth">
          <div className="register-container">
            <h2>Create Account</h2>
            <form>
              <div className="input-group">
                <label htmlFor="name">Full Name</label>
                <input
                  type="text"
                  id="name"
                  placeholder="Enter your name"
                  required
                />
              </div>
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
                <label htmlFor="phone">Phone Number</label>
                <input
                  type="number"
                  id="number"
                  placeholder="Enter your number"
                  required
                />
              </div>
              <div className="input-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  placeholder="Create a password"
                  required
                />
              </div>
              <button type="submit" className="register-btn">
                Register
              </button>
            </form>
            <div className="login-link">
              Already have an account? <NavLink to={"/login"}>Login</NavLink>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Registrationform;
