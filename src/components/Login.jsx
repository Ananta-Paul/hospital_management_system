"use client";

import React, { useState } from "react";
import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { useRouter } from "next/navigation";
import Image from 'next/image';
import {
  faEnvelope,
  faUser,
  faKey,
  faEye,
  faEyeSlash,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from './login.css';

const Login = () => {
  const router = useRouter();

  const [state, setState] = useState("log in");
  const [show, setShow] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cPassword, setCPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const login = useGoogleLogin({
    onSuccess: async (user) => {
      setLoading(true);
      axios
        .get(
          `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`,
          {
            headers: {
              Authorization: `Bearer ${user.access_token}`,
              Accept: "application/json",
            },
          }
        )
        .then(async (res) => {
          const u = {
            name: res.data.name,
            email: res.data.email,
            oauth: true,
            avatar: res.data.picture,
          };

          sendData(u);
          setLoading(false);
        })
        .catch((err) => console.log(err));
    },
    onError: (error) => console.log("Login Failed:", error),
  });

  const validCheck = () => {
    setLoading(true);
    if (state === "sign up") {
      if (password !== cPassword) {
        document
          .getElementById("confirm_password")
          ?.setCustomValidity("Passwords Don't Match");
      } else {
        document.getElementById("confirm_password").setCustomValidity("");
      }
    }
    setLoading(false);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setLoading(true);
    document.getElementById("confirm_password")?.setCustomValidity("");
    const user = {
      name,
      email,
      oauth: false,
      password,
    };
    sendData(user);
    setLoading(false);
  };

  async function sendData(user) {
    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };
      let add = "/api/user";
      if (state === "log in" || user.oauth) add = "api/user/login";
      const { data } = await axios.post(add, user, config);
      localStorage.setItem("userInfo", JSON.stringify(data));
      setLoading(false);
      router.push("/chats");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className={styles.login}>
      <div className="container">
        <div className="d-flex justify-content-center">
          <div className={`card ${styles.vcenter}`}>
            <Image
              alt="logo"
              className={`center ${styles.itop}`}
              src="/logoo.png"
              width={120}
              height={120}
            />

            <div className="card-header center">
              <h3>{state === "sign up" ? "Sign Up" : "Login"}</h3>
            </div>
            <div className="card-body">
              <form onSubmit={submitHandler}>
                {state === "sign up" && (
                  <div className="input-group form-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text">
                        <FontAwesomeIcon className="fa-xl" icon={faUser} />
                      </span>
                    </div>
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      placeholder="Name"
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                  </div>
                )}
                <div className="input-group form-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                      <FontAwesomeIcon className="fa-xl" icon={faEnvelope} />
                    </span>
                  </div>
                  <input
                    type="email"
                    name="username"
                    className="form-control"
                    placeholder="email"
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="input-group form-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                      <FontAwesomeIcon className="fa-xl" icon={faKey} />
                    </span>
                  </div>
                  <input
                    type={show ? "text" : "password"}
                    name="password"
                    className="form-control"
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  <div className="input-group-append">
                    <span className="input-group-text" id="basic-addon2">
                      <FontAwesomeIcon
                        className="fa-md"
                        onClick={() => setShow(!show)}
                        icon={show ? faEye : faEyeSlash}
                      />
                    </span>
                  </div>
                </div>
                {state === "sign up" && (
                  <div className="input-group form-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text">
                        <FontAwesomeIcon className="fa-xl" icon={faKey} />
                      </span>
                    </div>
                    <input
                      type={show ? "text" : "password"}
                      name="cpassword"
                      className="form-control"
                      placeholder="Confirm Password"
                      id="confirm_password"
                      onChange={(e) => setCPassword(e.target.value)}
                      required
                    />
                    <div className="input-group-append">
                      <span className="input-group-text" id="basic-addon2">
                        <FontAwesomeIcon
                          className="fa-md"
                          onClick={() => setShow(!show)}
                          icon={show ? faEye : faEyeSlash}
                        />
                      </span>
                    </div>
                  </div>
                )}
                <div className="form-group ">
                  <button
                    type="submit"
                    onClick={validCheck}
                    className="btn mt-3 login_btn center"
                  >
                    {loading ? (
                      <div className="text-center">
                        <div className="spinner-border" role="status">
                          <span className="sr-only">Loading...</span>
                        </div>
                      </div>
                    ) : (
                      state
                    )}
                  </button>
                </div>
              </form>
            </div>
            <div className="google-btn center">
              <div onClick={() => login()}>
                <div className="google-icon-wrapper">
                  <Image
                    alt="googlebaba"
                    className="google-icon"
                    src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                    width={40}
                    height={40}
                  />
                </div>
                <p className="btn-text cursor-pointer">
                  <b>Sign in with google</b>
                </p>
              </div>
            </div>
            <div className="card-footer">
              {state === "log in" ? (
                <div className="d-flex justify-content-center link footer">
                  Don&apos;t have an account?{"   "}
                  <strong
                    className="text-primary cursor-pointer"
                    onClick={() => setState("sign up")}
                  >
                    Sign Up
                  </strong>
                </div>
              ) : (
                <div className="d-flex justify-content-center link footer">
                  Already have an account?{"   "}
                  <strong
                    className="text-primary cursor-pointer"
                    onClick={() => setState("log in")}
                  >
                    {" "}
                    Log In
                  </strong>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;
