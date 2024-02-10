import { userApi } from "../../API";
import { authTypes, REQUESTMETHOD } from "../types";

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

export const logOutUser = () => {
  return {
    type: authTypes.LOGOUT_USER,
  };
};
