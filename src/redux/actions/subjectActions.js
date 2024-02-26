import { subjectApi } from "../../API";
import { subjectTypes, REQUESTMETHOD } from "../types";

export const getSubjects = ({ query, callBack }) => {
  return {
    type: subjectTypes.GET_SUBJECTS,
    request: {
      method: REQUESTMETHOD.GET,
      params: query,

      enableMessages: false,
      url: subjectApi.GET_SUBJECTS,
      callBack,
    },
  };
};

export const addSubject = ({ data, callBack }) => {
  return {
    type: subjectTypes.ADD_SUBJECT,
    request: {
      method: REQUESTMETHOD.POST,
      data: data,
      url: subjectApi.ADD_SUBJECT,
      isFormData: true,
      enableMessages: true,
      successMessage: "Subject Added Successfully",
      failMessage: "Failed to add Subject",
      callBack,
    },
  };
};

export const importSubject = ({ data, callBack }) => {
  return {
    type: subjectTypes.IMPORT_SUBJECT,
    request: {
      method: REQUESTMETHOD.POST,
      data: data,
      url: subjectApi.IMPORT_SUBJECT,
      isFormData: false,
      enableMessages: true,
      successMessage: "Subjects Imported Successfully",
      failMessage: "Failed to immport Subjects",
      callBack,
    },
  };
};

export const editSubject = ({ data, callBack }) => {
  delete data.topics;
  return {
    type: subjectTypes.UPDATE_SUBJECT,
    request: {
      method: REQUESTMETHOD.PATCH,
      data: data,
      url: subjectApi.UPDATE_SUBJECT,
      isFormData: true,

      enableMessages: true,
      successMessage: "Subject Updated Successfully",
      failMessage: "Failed to update Subject",
      callBack,
    },
  };
};

export const deleteSubject = ({ data, callBack }) => {
  return {
    type: subjectTypes.DELETE_SUBJECT,
    request: {
      method: REQUESTMETHOD.DELETE,
      data: data,
      url: subjectApi.DELETE_SUBJECT,
      isFormData: false,
      enableMessages: true,
      successMessage: "Subject deleted Successfully",
      failMessage: "Failed to delete Subject",
      callBack,
    },
  };
};

export const getAllSubjects = () => {
  return {
    type: subjectTypes.GET_ALL_SUBJECTS,
    request: {
      method: REQUESTMETHOD.GET,

      enableMessages: false,
      url: subjectApi.GET_ALL_SUBJECTS,
    },
  };
};
export const getAllMySubjects = () => {
  return {
    type: subjectTypes.GET_ALL_SUBJECTS,
    request: {
      method: REQUESTMETHOD.GET,

      enableMessages: false,
      url: subjectApi.GET_ALL_MY_SUBJECTS,
    },
  };
};
