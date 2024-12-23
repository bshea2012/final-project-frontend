import React, { useEffect, useState } from "react";
import PopupWithForm from "../PopupWithForm/PopupWithForm";
import "./SigninModal.css";

const SigninModal = ({
  isOpen,
  closeActiveModal,
  handleRegisterClick,
  isLoading,
  onSigninUser,
}) => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  function resetForm() {
    setData({
      email: "",
      password: "",
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    onSigninUser(data, resetForm);
  };

  return (
    <PopupWithForm
      title="Sign in"
      isOpen={isOpen}
      onClose={closeActiveModal}
      onSubmit={handleSubmit}
    >
      <label htmlFor="email" className="modal__label">
        Email
        <input
          type="email"
          minLength="1"
          maxLength="30"
          className="modal__input"
          id="email-signin"
          name="email"
          placeholder="Enter email"
          value={data.email}
          onChange={handleChange}
        />
      </label>
      <label htmlFor="password" className="modal__label">
        Password
        <input
          type="password"
          minLength="1"
          className="modal__input"
          id="password-signin"
          name="password"
          placeholder="Enter password"
          value={data.password}
          onChange={handleChange}
        />
      </label>
      <button className="modal__submit modal__submit_disabled" type="submit">
        {isLoading ? "Signing in..." : "Sign in"}
      </button>
      <span className="modal__option">
        or
        <button
          type="button"
          onClick={handleRegisterClick}
          className="modal__sign-up"
        >
          Sign up
        </button>
      </span>
    </PopupWithForm>
  );
};

export default SigninModal;
