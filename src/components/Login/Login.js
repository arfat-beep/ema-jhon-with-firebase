import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Login.css";
import logo from "../../images/google-svg.svg";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  let navigate = useNavigate();
  const location = useLocation();
  let from = location?.state?.from?.pathname || "/";
  const handleSubmit = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(email, password);
  };
  user && navigate(from, { replace: true });
  return (
    <div className="form-container">
      <div>
        <div>
          <h2 className="form-title">Login</h2>
          <form action="" onSubmit={handleSubmit}>
            <div className="input-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                onBlur={(e) => setEmail(e.target.value)}
                name="email"
                id="email"
              />
            </div>
            <div className="input-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                onBlur={(e) => setPassword(e.target.value)}
                name="password"
                id="password"
              />
            </div>
            {error && (
              <p
                style={{
                  backgroundColor: "#ff4500",
                  color: "#fff",
                  padding: "10px",
                  borderRadius: "5px",
                }}
              >
                Email and password Didn't match
              </p>
            )}
            <input type="submit" value="Login" className="form-submit" />
          </form>
          <p>
            New To Ema-John?{" "}
            <Link to="/signup" className="form-link">
              Create An Account
            </Link>
          </p>
          <div className="or-container">
            <div></div>
            <span>or</span>
            <div></div>
          </div>
          <div className="google-login-container">
            <button>
              <img src={logo} alt="" width="25" height="25" />
              <span>Continue with Google</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
