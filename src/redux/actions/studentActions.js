import { studentApi } from "../../API";
import { studentTypes, REQUESTMETHOD } from "../types";

export const getStudents = ({ query, callBack }) => {
  return {
    type: studentTypes.GET_STUDENTS,
    request: {
      method: REQUESTMETHOD.GET,
      params: query,

      enableMessages: false,
      url: studentApi.GET_STUDENTS,
      callBack,
    },
  };
};

export const getAllStudents = () => {
  return {
    type: studentTypes.GET_ALL_STUDENTS,
    request: {
      method: REQUESTMETHOD.GET,

      enableMessages: false,
      url: studentApi.GET_ALL_STUDENTS,
    },
  };
};

export const addStudent = ({ data, callBack }) => {
  return {
    type: studentTypes.ADD_STUDENT,
    request: {
      method: REQUESTMETHOD.POST,
      data: data,
      url: studentApi.ADD_STUDENT,

      enableMessages: true,
      successMessage: "Student Added Successfully",
      failMessage: "Failed to add Student",
      callBack,
    },
  };
};

export const editStudent = ({ data, callBack }) => {
  if (data.instituteId) {
    data.instituteId = data.instituteId._id;
  }
  return {
    type: studentTypes.UPDATE_STUDENT,
    request: {
      method: REQUESTMETHOD.PATCH,
      data: data,
      url: studentApi.UPDATE_STUDENT,

      enableMessages: true,
      successMessage: "Student Updated Successfully",
      failMessage: "Failed to update Student",
      callBack,
    },
  };
};

export const deleteStudent = ({ data, callBack }) => {
  return {
    type: studentTypes.DELETE_STUDENT,
    request: {
      method: REQUESTMETHOD.DELETE,
      data: data,
      url: studentApi.DELETE_STUDENT,
      isFormData: false,
      enableMessages: true,
      successMessage: "Student deleted Successfully",
      failMessage: "Failed to delete Student",
      callBack,
    },
  };
};
