import { userApi } from "../../API";
import { userTypes, REQUESTMETHOD } from "../types";

export const getUsers = ({ query, callBack }) => {
  return {
    type: userTypes.GET_USERS,
    request: {
      method: REQUESTMETHOD.GET,
      params: query,

      enableMessages: false,
      url: userApi.GET_USERS,
      callBack,
    },
  };
};

export const getAllUsers = () => {
  return {
    type: userTypes.GET_ALL_USERS,
    request: {
      method: REQUESTMETHOD.GET,

      enableMessages: false,
      url: userApi.GET_ALL_USERS,
    },
  };
};

export const addUser = ({ data, callBack }) => {
  return {
    type: userTypes.ADD_USER,
    request: {
      method: REQUESTMETHOD.POST,
      data: data,
      url: userApi.ADD_USER,
      
      enableMessages: true,
      successMessage: "User Added Successfully",
      failMessage: "Failed to add User",
      callBack,
    },
  };
};

export const editUser = ({ data, callBack }) => {
  return {
    type: userTypes.UPDATE_USER,
    request: {
      method: REQUESTMETHOD.PATCH,
      data: data,
      url: userApi.UPDATE_USER,
      
      enableMessages: true,
      successMessage: "User Updated Successfully",
      failMessage: "Failed to update User",
      callBack,
    },
  };
};

export const deleteUser = ({ data, callBack }) => {
  return {
    type: userTypes.DELETE_USER,
    request: {
      method: REQUESTMETHOD.DELETE,
      data: data,
      url: userApi.DELETE_USER,
      isFormData: false,
      enableMessages: true,
      successMessage: "User deleted Successfully",
      failMessage: "Failed to delete User",
      callBack,
    },
  };
};
