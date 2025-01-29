import React from "react";
import { useState } from "react";
import "./Validation.css";
const Validation = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");

  const [nameColor, setNameColor] = useState("");
  const [emailColor, setEmailColor] = useState("");
  const [passwordColor, setPasswordColor] = useState("");
  const [confirmPasswordColor, setConfirmPasswordColor] = useState("");
  const validate = (e) => {
    e.preventDefault();
    if (name.length > 8) {
      setNameColor("green");
      setNameError("");
    } else {
      setNameError("le nom doit au moins contenir 8 caractères");
      setNameColor("red");
    }
    if (email.includes("@gmail")) {
      setEmailColor("green");
      setEmailError("");
    } else {
      setEmailError("Email incorrect!!!");
      setEmailColor("red");
    }
    if (password.length > 8) {
      setPasswordColor("green");
      setPasswordError("");
    } else {
      setPasswordError("le mot de passe doit contenir au moins 8 caractères");
      setPasswordColor("red");
    }
    if (confirmPassword !== "" && confirmPassword === password) {
      setConfirmPasswordColor("green");
      setConfirmPasswordError("");
    } else {
      setConfirmPasswordError("les mots de passe ne match pas");
      setConfirmPasswordColor("red");
    }
  };
  return (
    <>
      <div className="card">
        <div className="card-image"></div>
        <form>
          <input
            type="text"
            placeholder="Name"
            style={{ borderColor: nameColor }}
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <p className="error">{nameError}</p>
          <input
            type="text"
            placeholder="email"
            style={{ borderColor: emailColor }}
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <p className="error">{emailError}</p>
          <input
            type="password"
            placeholder="password"
            style={{ borderColor: passwordColor }}
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <p className="error">{passwordError}</p>
          <input
            type="password"
            placeholder="password"
            style={{ borderColor: confirmPasswordColor }}
            value={confirmPassword}
            onChange={(e) => {
              setConfirmPassword(e.target.value);
            }}
          />
          <p className="error">{confirmPasswordError}</p>
          <button className="submit-btn" onClick={validate}>
            submit
          </button>
        </form>
      </div>
    </>
  );
};

export default Validation;
