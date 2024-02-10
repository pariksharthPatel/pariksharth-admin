import { instituteApi } from "../../API";
import { instituteTypes, REQUESTMETHOD } from "../types";

export const getInstitutes = ({ query, callBack }) => {
  return {
    type: instituteTypes.GET_INSTITUTES,
    request: {
      method: REQUESTMETHOD.GET,
      params: query,

      enableMessages: false,
      url: instituteApi.GET_INSTITUTES,
      callBack,
    },
  };
};

export const getAllInstitutes = ({ query, callBack }) => {
  return {
    type: instituteTypes.GET_ALL_INSTITUTES,
    request: {
      method: REQUESTMETHOD.GET,
      params: query,

      enableMessages: false,
      url: instituteApi.GET_ALL_INSTITUTES,
      callBack,
    },
  };
};

export const getInstituteById = ({ instituteId, callBack }) => {
  return {
    type: instituteTypes.GET_INSTITUTE_BY_ID,
    request: {
      method: REQUESTMETHOD.GET,

      enableMessages: false,
      url: instituteApi.GET_INSTITUTES + "/" + instituteId,
      callBack,
    },
  };
};

export const addInstitute = ({ data, callBack }) => {
  return {
    type: instituteTypes.ADD_INSTITUTE,
    request: {
      method: REQUESTMETHOD.POST,
      data: data,
      url: instituteApi.ADD_INSTITUTE,
      isFormData: true,
      enableMessages: true,
      successMessage: "Institute Added Successfully",
      failMessage: "Failed to add Institute",
      callBack,
    },
  };
};

export const editInstitute = ({ data, callBack }) => {
  return {
    type: instituteTypes.UPDATE_INSTITUTE,
    request: {
      method: REQUESTMETHOD.PATCH,
      data: data,
      url: instituteApi.UPDATE_INSTITUTE,
      isFormData: true,
      enableMessages: true,
      successMessage: "Institute Updated Successfully",
      failMessage: "Failed to update Institute",
      callBack,
    },
  };
};

export const deleteInstitute = ({ data, callBack }) => {
  return {
    type: instituteTypes.DELETE_INSTITUTE,
    request: {
      method: REQUESTMETHOD.DELETE,
      data: data,
      url: instituteApi.DELETE_INSTITUTE,
      isFormData: false,
      enableMessages: true,
      successMessage: "Institute deleted Successfully",
      failMessage: "Failed to delete Institute",
      callBack,
    },
  };
};
