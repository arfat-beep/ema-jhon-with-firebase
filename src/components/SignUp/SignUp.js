import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  useCreateUserWithEmailAndPassword,
  useSendEmailVerification,
} from "react-firebase-hooks/auth";
import logo from "../../images/google-svg.svg";
import auth from "../../firebase.init";

const SignUp = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const [confirmPassword, setConfirmPassword] = useState("");

  const [error, setError] = useState("");

  // email verificaiton
  const [createUserWithEmailAndPassword, user, loading] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  let setLoadingTitle;
  if (loading) {
    setLoadingTitle = "Loading Please Wait";
  }

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
  };

  if (user) {
    navigate("/");
  }

  const handleCreateUser = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError("Password didn't match");
      return;
    }
    createUserWithEmailAndPassword(email, password);
  };

  return (
    <div className="form-container">
      <div>
        <div>
          <h2 className="form-title">Sign Up</h2>
          <form action="" onSubmit={handleCreateUser}>
            <div className="input-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                onBlur={handleEmail}
                name="email"
                id="email"
                autoComplete="email"
              />
            </div>
            <div className="input-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                autoComplete="password"
                onBlur={handlePassword}
                name="password"
                id="password"
              />
            </div>
            <div className="input-group">
              <label htmlFor="confirm-password">Confirm Password</label>
              <input
                type="password"
                name="confirm-password"
                id="confirm-password"
                autoComplete="confirm-password"
                onBlur={handleConfirmPassword}
              />
              {error && (
                <p
                  style={{
                    backgroundColor: "#ff4500",
                    color: "#fff",
                    padding: "10px",
                    borderRadius: "5px",
                  }}
                >
                  {error}
                </p>
              )}
              <p>{setLoadingTitle}</p>
            </div>
            <input type="submit" value="Sign Up" className="form-submit" />
          </form>
          <p>
            Already have an account?{" "}
            <Link to="/signup" className="form-link">
              Login
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

export default SignUp;
