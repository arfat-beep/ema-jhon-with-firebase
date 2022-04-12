import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const Shipping = () => {
  const [user] = useAuthState(auth);
  const [name, setName] = useState("");
  const [email, setEmail] = useState(user?.email);
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");

  const handleName = (e) => {
    setEmail(e.target.value);
  };

  const handleAddress = (e) => {
    setAddress(e.target.value);
  };
  const handleCreateUser = (e) => {
    e.preventDefault();
  };
  const handlephone = (e) => {
    setPhone(e.target.value);
    const shipping = { name, email, phone, address };
  };
  return (
    <div className="form-container">
      <div>
        <h2 className="form-title">Shipping Information</h2>
        <form action="" onSubmit={handleCreateUser}>
          <div className="input-group">
            <label htmlFor="name">name</label>
            <input
              type="name"
              onBlur={handleName}
              name="name"
              id="name"
              autoComplete="name"
            />
          </div>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              value={user?.email}
              readOnly
              name="email"
              id="email"
              autoComplete="email"
            />
          </div>
          <div className="input-group">
            <label htmlFor="address">Password</label>
            <input
              type="text"
              autoComplete="address"
              onBlur={handleAddress}
              name="address"
              id="address"
            />
          </div>
          <div className="input-group">
            <label htmlFor="phone-number">Phone Number</label>
            <input
              type="text"
              name="phone-number"
              id="phone-number"
              autoComplete="phone-number"
              onBlur={handlephone}
            />
          </div>
          <input type="submit" value="Add Shipping" className="form-submit" />
        </form>
      </div>
    </div>
  );
};

export default Shipping;
