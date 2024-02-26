import { createReducer } from "@reduxjs/toolkit";
import { authTypes } from "../types";

const token = localStorage.getItem("token");
const initialState = {
  isLogged: Boolean(token),
  name: "",
  email: "",
  photoURL: "",
  roles: [],
  role: "",
};

export const authReducer = createReducer(initialState, (builder) =>
  builder
    .addCase(authTypes.LOGIN_USER, (state, action) => {
      localStorage.setItem("token", action.payload.data.accessToken);

      state = {
        ...initialState,
        accessToken: action.payload.data.accessToken,
        isLogged: true,
        ...action.payload.data.user,
        role: action.payload.data.user.activeRole,
        // ...(Array.isArray(action.payload.data.user.role) &&
        // action.payload.data.user.role.length === 1
        //   ? {
        //       role: action.payload.data.user.role[0],
        //     }
        //   : { role: "" }),
      };
      return state;
    })
    .addCase(authTypes.GET_USER_BY_TOKEN, (state, action) => {
      state = {
        ...initialState,
        ...action.payload.data,
        isLogged: true,
        role: action.payload.data.activeRole,
        // ...(Array.isArray(action.payload.data.role) &&
        // action.payload.data.role.length === 1
        //   ? {
        //       role: action.payload.data.role[0],
        //     }
        //   : { role: "" }),
      };
      return state;
    })
    .addCase(authTypes.LOGOUT_USER, (state, action) => {
      localStorage.removeItem("token");

      state.isLogged = false;
    })
);
