import { qualificationApi } from "../../API";
import { qualificationTypes, REQUESTMETHOD } from "../types";

export const getQualifications = ({ query, callBack }) => {
  return {
    type: qualificationTypes.GET_QUALIFICATIONS,
    request: {
      method: REQUESTMETHOD.GET,
      params: query,

      enableMessages: false,
      url: qualificationApi.GET_QUALIFICATIONS,
      callBack,
    },
  };
};

export const addQualification = ({ data, callBack }) => {
  return {
    type: qualificationTypes.ADD_QUALIFICATION,
    request: {
      method: REQUESTMETHOD.POST,
      data: data,
      url: qualificationApi.ADD_QUALIFICATION,
      enableMessages: true,
      successMessage: "Qualification Added Successfully",
      failMessage: "Failed to add Qualification",
      callBack,
    },
  };
};

export const importQualification = ({ data, callBack }) => {
  return {
    type: qualificationTypes.IMPORT_QUALIFICATION,
    request: {
      method: REQUESTMETHOD.POST,
      data: data,
      url: qualificationApi.IMPORT_QUALIFICATION,
      isFormData: false,
      enableMessages: true,
      successMessage: "Qualifications Imported Successfully",
      failMessage: "Failed to immport Qualifications",
      callBack,
    },
  };
};

export const editQualification = ({ data, callBack }) => {
  delete data.topics;
  return {
    type: qualificationTypes.UPDATE_QUALIFICATION,
    request: {
      method: REQUESTMETHOD.PATCH,
      data: data,
      url: qualificationApi.UPDATE_QUALIFICATION,

      enableMessages: true,
      successMessage: "Qualification Updated Successfully",
      failMessage: "Failed to update Qualification",
      callBack,
    },
  };
};

export const deleteQualification = ({ data, callBack }) => {
  return {
    type: qualificationTypes.DELETE_QUALIFICATION,
    request: {
      method: REQUESTMETHOD.DELETE,
      data: data,
      url: qualificationApi.DELETE_QUALIFICATION,
      isFormData: false,
      enableMessages: true,
      successMessage: "Qualification deleted Successfully",
      failMessage: "Failed to delete Qualification",
      callBack,
    },
  };
};

export const getAllQualifications = () => {
  return {
    type: qualificationTypes.GET_ALL_QUALIFICATIONS,
    request: {
      method: REQUESTMETHOD.GET,

      enableMessages: false,
      url: qualificationApi.GET_ALL_QUALIFICATIONS,
    },
  };
};
