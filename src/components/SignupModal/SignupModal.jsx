import React, { useEffect, useState } from "react";
import PopupWithForm from "../PopupWithForm/PopupWithForm";
import "./SignupModal.css";

const SignupModal = ({
  isOpen,
  onAddUser,
  closeActiveModal,
  handleSigninClick,
  isLoading,
  onSignupUser,
}) => {
  const [data, setData] = useState({
    email: "",
    password: "",
    username: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   onSignupUser();
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    // debugger;
    console.log(data);
    onAddUser(data);
  };

  return (
    <PopupWithForm
      title="Sign up"
      isOpen={isOpen}
      onSubmit={handleSubmit}
      onClose={closeActiveModal}
    >
      <label htmlFor="email-signup" className="modal__label">
        Email
        <input
          type="email"
          minLength="1"
          maxLength="30"
          className="modal__input"
          id="email-signup"
          name="email"
          placeholder="Enter email"
          value={data.email}
          onChange={handleChange}
        />
      </label>
      <label htmlFor="password-signup" className="modal__label">
        Password
        <input
          type="password"
          minLength="1"
          className="modal__input"
          id="password-signup"
          name="password"
          placeholder="Enter password"
          value={data.password}
          onChange={handleChange}
        />
      </label>
      <label htmlFor="username" className="modal__label">
        Username
        <input
          type="text"
          minLength="2"
          className="modal__input"
          id="username"
          name="username"
          placeholder="Enter your username"
          value={data.username}
          onChange={handleChange}
        />
      </label>

      <button className="modal__submit modal__submit_disabled" type="submit">
        {isLoading ? "Signing up..." : "Sign up"}
      </button>
      <span className="modal__option">
        or
        <button
          type="button"
          onClick={handleSigninClick}
          className="modal__sign-up"
        >
          Sign in
        </button>
      </span>
    </PopupWithForm>
  );
};

export default SignupModal;
