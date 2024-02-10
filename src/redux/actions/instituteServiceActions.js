import { instituteServiceApi } from "../../API";
import { instituteServiceTypes, REQUESTMETHOD } from "../types";

export const getSalonServices = ({ query, callBack }) => {
  return {
    type: instituteServiceTypes.GET_ALL_INSTITUTE_SERVICES,
    request: {
      method: REQUESTMETHOD.GET,
      params: query,

      enableMessages: false,
      url: instituteServiceApi.GET_INSTITUTE_SERVICES,
      callBack,
    },
  };
};

export const addSalonService = ({ data, callBack }) => {
  return {
    type: instituteServiceTypes.ADD_INSTITUTE_SERVICE,
    request: {
      method: REQUESTMETHOD.POST,
      data: data,
      url: instituteServiceApi.ADD_INSTITUTE_SERVICE,
      isFormData: true,
      enableMessages: true,
      successMessage: "Service Added Successfully",
      failMessage: "Failed to add Service",
      callBack,
    },
  };
};

export const editSalonService = ({ data, callBack }) => {
  return {
    type: instituteServiceTypes.UPDATE_INSTITUTE_SERVICE,
    request: {
      method: REQUESTMETHOD.PATCH,
      data: data,
      url: instituteServiceApi.UPDATE_INSTITUTE_SERVICE,
      isFormData: true,

      enableMessages: true,
      successMessage: "Service Updated Successfully",
      failMessage: "Failed to update Service",
      callBack,
    },
  };
};

export const deleteSalonService = ({ data, callBack }) => {
  return {
    type: instituteServiceTypes.DELETE_INSTITUTE_SERVICE,
    request: {
      method: REQUESTMETHOD.DELETE,
      data: data,
      url: instituteServiceApi.DELETE_INSTITUTE_SERVICE,
      isFormData: false,
      enableMessages: true,
      successMessage: "Service deleted Successfully",
      failMessage: "Failed to delete Service",
      callBack,
    },
  };
};

export const getAllCategories = () => {
  return {
    type: instituteServiceTypes.GET_ALL_INSTITUTE_SERVICES,
    request: {
      method: REQUESTMETHOD.GET,

      enableMessages: false,
      url: instituteServiceApi.GET_ALL_INSTITUTE_SERVICES,
    },
  };
};
