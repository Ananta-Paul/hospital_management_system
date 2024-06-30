"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import "./login.css";

const Login = ({ setLoggedIn, setUsername }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [userType, setUserType] = useState('');
  const [loginUsername, setLoginUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [signupUsername, setSignupUsername] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [aadharNumber, setAadharNumber] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const router = useRouter();

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    setLoggedIn(true);
    setUsername(loginUsername);
    router.push('/');
  };

  const handleSignupSubmit = (e) => {
    e.preventDefault();
    // Perform signup logic here (e.g., email and phone number verification)
    router.push('/login');
  };

  return (
    <div className="container">
      {isLogin ? (
        <div className="form-container form-container-current" id="login-form-container">
          <h2 id="hd">Login</h2>
          <form onSubmit={handleLoginSubmit}>
            <div className="form-group">
              <label htmlFor="login-username">Username</label>
              <input
                type="text"
                id="login-username"
                value={loginUsername}
                onChange={(e) => setLoginUsername(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="login-email">Email</label>
              <input
                type="email"
                id="login-email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="login-password">Password</label>
              <input
                type="password"
                id="login-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit">Login</button>
          </form>
          <div className="form-link-switch">
            <a href="#signup-form-container" onClick={() => setIsLogin(false)}>Don't have an account? Sign up here.</a>
          </div>
        </div>
      ) : (
        <div className="form-container form-container-current" id="signup-form-container">
          <h2 id="hd">Sign Up</h2>
          <form onSubmit={handleSignupSubmit}>
            <div className="form-group">
              <label htmlFor="signup-username">Username</label>
              <input
                type="text"
                id="signup-username"
                value={signupUsername}
                onChange={(e) => setSignupUsername(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="signup-email">Email</label>
              <input
                type="email"
                id="signup-email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="signup-phone">Phone Number</label>
              <input
                type="tel"
                id="signup-phone"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="signup-aadhar">Aadhar Number</label>
              <input
                type="text"
                id="signup-aadhar"
                value={aadharNumber}
                onChange={(e) => setAadharNumber(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="signup-password">Password</label>
              <input
                type="password"
                id="signup-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="confirm-password">Confirm Password</label>
              <input
                type="password"
                id="confirm-password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit">Sign Up</button>
          </form>
          <div className="form-link-switch">
            <a href="#login-form-container" onClick={() => setIsLogin(true)}>Already have an account? Login here.</a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;
