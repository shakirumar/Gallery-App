import React from 'react';
import './Login.css';

const Login = () => {
  return (
    <div className="auth-container">
      <div className="auth-form">
        <h2>Log In</h2>
        <form>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="Enter your email" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" placeholder="Enter your password" />
          </div>
          <button type="submit" className="auth-button">Log In</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
