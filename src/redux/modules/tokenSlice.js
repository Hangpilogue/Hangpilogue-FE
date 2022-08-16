import {createSlice} from "@reduxjs/toolkit";



let x, USER_TOKEN;
const getCookie = (cookie_name) => {
  let cookie = document.cookie.split(';');

  for (let i = 0; i < cookie.length; i++) {
    x = cookie[i].substr(0, cookie[i].indexOf('='));
    USER_TOKEN = cookie[i].substr(cookie[i].indexOf('=') + 1);
    x = x.replace(/^\s+|\s+$/g, '');
    if (x === cookie_name) {
      return USER_TOKEN
    }
  }
}
const deleteCookie = (cookie_name) => {
  document.cookie = cookie_name + '=; expires=Thu, 01 Jan 1999 00:00:10 GMT;';
}

getCookie("token")
const initialState= {
  isLogin:false,
  token:USER_TOKEN
}

// reducer counterSlice
export const tokenSlice = createSlice({
  name: "token",
  initialState,
  reducers: {
    logOut:(state,action) => {
      deleteCookie("token")
      state.isLogin = false
      state.token = ""
    },
    logIn:(state,action) => {
      getCookie("token")
      state.isLogin = true
      state.token = USER_TOKEN
    }
  },
});

export const {logOut, logIn} = tokenSlice.actions;
export default tokenSlice.reducer;