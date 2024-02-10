import { userGroupApi } from "../../API";
import { userGroupTypes, REQUESTMETHOD } from "../types";

export const getUserGroups = ({ query, callBack }) => {
  return {
    type: userGroupTypes.GET_ALL_USER_GROUPS,
    request: {
      method: REQUESTMETHOD.GET,
      params: query,

      enableMessages: false,
      url: userGroupApi.GET_USER_GROUPS,
      callBack,
    },
  };
};

export const addUserGroup = ({ data, callBack }) => {
  return {
    type: userGroupTypes.ADD_USER_GROUP,
    request: {
      method: REQUESTMETHOD.POST,
      data: data,
      url: userGroupApi.ADD_USER_GROUP,
     
      enableMessages: true,
      successMessage: "UserGroup Added Successfully",
      failMessage: "Failed to add UserGroup",
      callBack,
    },
  };
};

export const editUserGroup = ({ data, callBack }) => {
  return {
    type: userGroupTypes.UPDATE_USER_GROUP,
    request: {
      method: REQUESTMETHOD.PATCH,
      data: data,
      url: userGroupApi.UPDATE_USER_GROUP,
     

      enableMessages: true,
      successMessage: "UserGroup Updated Successfully",
      failMessage: "Failed to update UserGroup",
      callBack,
    },
  };
};

export const deleteUserGroup = ({ data, callBack }) => {
  return {
    type: userGroupTypes.DELETE_USER_GROUP,
    request: {
      method: REQUESTMETHOD.DELETE,
      data: data,
      url: userGroupApi.DELETE_USER_GROUP,
      isFormData: false,
      enableMessages: true,
      successMessage: "UserGroup deleted Successfully",
      failMessage: "Failed to delete UserGroup",
      callBack,
    },
  };
};

export const getAllCategories = () => {
  return {
    type: userGroupTypes.GET_ALL_USER_GROUPS,
    request: {
      method: REQUESTMETHOD.GET,

      enableMessages: false,
      url: userGroupApi.GET_ALL_USER_GROUPS,
    },
  };
};
