import { userApi } from "../../API";
import { authTypes, commonTypes, REQUESTMETHOD } from "../types";

export const loginUser = ({ email, password }, callBack) => {
  return {
    type: authTypes.LOGIN_USER,
    request: {
      method: REQUESTMETHOD.POST,
      data: {
        email,
        password,
      },
      enableMessages: false,
      url: userApi.LOGIN,
      callBack,
      successMessage: "Login Successfull",
      failMessage: "Failed To Login",
    },
  };
};

export const getUserByToken = () => {
  return {
    type: authTypes.GET_USER_BY_TOKEN,
    request: {
      method: REQUESTMETHOD.GET,

      enableMessages: false,
      url: userApi.GET_USER_BY_TOKEN,
    },
  };
};
export const setActiveUserRole = ({ userId, activeRole, callBack }) => {
  return {
    type: authTypes.SET_ACTIVE_ROLE,
    request: {
      method: REQUESTMETHOD.POST,
      data: { userId, activeRole },

      enableMessages: true,
      url: userApi.SET_ACTIVE_ROLE,
      callBack,
      successMessage: "Role changed successfully",
      failMessage: "Failed To change role",
    },
  };
};

export const logOutUser = () => {
  return {
    type: authTypes.LOGOUT_USER,
  };
};
