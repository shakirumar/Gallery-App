import React from 'react';
import './Signup.css';

const Signup = () => {
  return (
    <div className="auth-container">
      <div className="auth-form">
        <h2>Sign Up</h2>
        <form>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" placeholder="Enter your name" />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="Enter your email" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" placeholder="Enter your password" />
          </div>
          <button type="submit" className="auth-button">Sign Up</button>
        </form>
      </div>
    </div>
  );
};

export default Signup;