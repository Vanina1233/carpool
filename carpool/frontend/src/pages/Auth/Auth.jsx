import React, { useState } from "react";
import "./auth.css";
import { UilFacebookF } from "@iconscout/react-unicons";
import { UilTwitterAlt } from "@iconscout/react-unicons";
import { UilInstagram } from "@iconscout/react-unicons";

import { UilUser } from "@iconscout/react-unicons";
import { UilEnvelopeAlt } from "@iconscout/react-unicons";
import { UilLockAlt } from "@iconscout/react-unicons";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Auth = () => {
  const [login, setLogin] = useState(false);
  const [type, setType] = useState("passenger");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [matricule, setMatricule] = useState("");
  const [license, setLicense] = useState("");

  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0];
      setLicense(img);
    }
  };

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (login === false) {
      console.log("in");
      await axios
        .post(
          "http://localhost:5000/api/user",
          {
            name,
            email,
            password,
            immatriculation: matricule,
            license,
          },
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        )
        .then(function (response) {
          const res = response.data;
          if (response.status === 200) {
            navigate("/");
          }
          console.log(res);
          // return res;
        })
        .catch(function (error) {
          console.log(error);
        });
    } else if (login === true) {
      await axios
        .post(
          "http://localhost:5000/api/user/login",
          {
            email,
            password,
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
        .then(function (response) {
          const res = response.data;
          if (response.status === 200) {
            navigate("/");
          }
          console.log(res);
          // return res;
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  };

  return (
    <div className="auth">
      <div className="auth-content">
        <form onSubmit={(e) => handleSubmit(e)} encType="multipart/form-data">
          <div className="left">
            <h3>Carpool</h3>
            <h3>{login ? "Welcome back !!!" : "Welcome"}</h3>
            <p>
              {login
                ? "Login to your account"
                : "To keep connected with us please signUp"}
            </p>
            <button type="submit">{login ? "Login" : "SignUP"}</button>
            <a href="#" onClick={() => setLogin(!login)}>
              {login ? "Don't have an account?" : "Already have an account ?"}
              <span>{login ? "signUp" : "login"}</span>
            </a>
          </div>
          <div
            style={{ justifyContent: login ? "center" : "" }}
            className="right"
          >
            <h3 style={{ display: login ? "none" : "block" }}>
              Create Account
            </h3>
            <div className="account-icons">
              <div>
                <UilFacebookF />
              </div>
              <div>
                <UilTwitterAlt />
              </div>
              <div>
                <UilInstagram />
              </div>
            </div>

            <p style={{ display: login ? "none" : "block" }}>
              Or use your email for registration
            </p>
            <div style={{ display: login ? "none" : "flex" }} className="input">
              <button>
                <UilUser />
              </button>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Your name"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="input">
              <button>
                <UilEnvelopeAlt />
              </button>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Your email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="input">
              <button>
                <UilLockAlt />
              </button>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Your password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div
              style={{ display: login ? "none" : "block" }}
              className="input"
            >
              <select
                value={type}
                onChange={(e) => setType(e.target.value)}
                name="type"
                id="type"
              >
                <option value="driver">Driver</option>
                <option value="passenger">Passenger</option>
              </select>
            </div>
            <div
              style={{ display: type === "driver" ? "flex" : "none" }}
              className="input"
            >
              <button>
                <UilLockAlt />
              </button>
              <input
                type="text"
                name="immatriculation"
                id="immatriculation"
                placeholder="Your immatriculation"
                onChange={(e) => setMatricule(e.target.value)}
              />
            </div>
            <div
              className="license"
              style={{ display: type === "driver" ? "block" : "none" }}
            >
              <input
                type="file"
                name="license"
                id="license"
                placeholder="Your license picture"
                onChange={onImageChange}
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Auth;
