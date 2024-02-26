import { branchApi } from "../../API";
import { branchTypes, REQUESTMETHOD } from "../types";

export const getAllBranchs = () => {
  return {
    type: branchTypes.GET_ALL_BRANCHS,
    request: {
      method: REQUESTMETHOD.GET,

      enableMessages: false,
      url: branchApi.GET_ALL_BRANCHS,
    },
  };
};

export const getBranchs = ({ query, callBack }) => {
  return {
    type: branchTypes.GET_BRANCHS,
    request: {
      method: REQUESTMETHOD.GET,
      params: query,

      enableMessages: false,
      url: branchApi.GET_BRANCHS,
      callBack,
    },
  };
};

export const addBranch = ({ data, callBack }) => {
  return {
    type: branchTypes.ADD_BRANCH,
    request: {
      method: REQUESTMETHOD.POST,
      data: data,
      url: branchApi.ADD_BRANCH,
      isFormData: false,
      enableMessages: true,
      successMessage: "Branch Added Successfully",
      failMessage: "Failed to add Branch",
      callBack,
    },
  };
};

export const editBranch = ({ data, callBack }) => {
  return {
    type: branchTypes.UPDATE_BRANCH,
    request: {
      method: REQUESTMETHOD.PATCH,
      data: data,
      url: branchApi.UPDATE_BRANCH,
      isFormData: false,

      enableMessages: true,
      successMessage: "Branch Updated Successfully",
      failMessage: "Failed to update Branch",
      callBack,
    },
  };
};

export const deleteBranch = ({ data, callBack }) => {
  return {
    type: branchTypes.DELETE_BRANCH,
    request: {
      method: REQUESTMETHOD.DELETE,
      data: data,
      url: branchApi.DELETE_BRANCH,
      isFormData: false,
      enableMessages: true,
      successMessage: "Branch deleted Successfully",
      failMessage: "Failed to delete Branch",
      callBack,
    },
  };
};
