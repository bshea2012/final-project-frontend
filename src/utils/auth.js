import { checkResponse } from "./api";

const signinUser = (email, password) => {
  // Pretend we did a fetch request that gave us back a token
  return new Promise((resolve, reject) => {
    resolve({ token: "a fake token" });
  }); //.then(checkResponse);
};

const signupUser = (email, password, username) => {
  // Pretend we did a fetch request that gave us back a token
  return new Promise((resolve, reject) => {
    resolve({ token: "a fake token" });
  }); //.then(checkResponse);
};

const getUserInfo = (token) => {
  // Pretend we did a fetch request that gave us back a user
  return new Promise((resolve, reject) => {
    resolve({
      data: { name: "fake user", email: "fake@example,com", id: "fake-id" },
    });
  });
};

export { signinUser, signupUser, getUserInfo };
