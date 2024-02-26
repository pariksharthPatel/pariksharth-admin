import { examTypeApi } from "../../API";
import { examTypeTypes, REQUESTMETHOD } from "../types";

export const getExamTypes = ({ query, callBack }) => {
  return {
    type: examTypeTypes.GET_EXAM_TYPES,
    request: {
      method: REQUESTMETHOD.GET,
      params: query,

      enableMessages: false,
      url: examTypeApi.GET_EXAM_TYPES,
      callBack,
    },
  };
};

export const addExamType = ({ data, callBack }) => {
  return {
    type: examTypeTypes.ADD_EXAM_TYPE,
    request: {
      method: REQUESTMETHOD.POST,
      data: data,
      url: examTypeApi.ADD_EXAM_TYPE,

      enableMessages: true,
      successMessage: "ExamType Added Successfully",
      failMessage: "Failed to add ExamType",
      callBack,
    },
  };
};

export const editExamType = ({ data, callBack }) => {
  delete data.subExamTypes;
  return {
    type: examTypeTypes.UPDATE_EXAM_TYPE,
    request: {
      method: REQUESTMETHOD.PATCH,
      data: data,
      url: examTypeApi.UPDATE_EXAM_TYPE,

      enableMessages: true,
      successMessage: "ExamType Updated Successfully",
      failMessage: "Failed to update ExamType",
      callBack,
    },
  };
};

export const deleteExamType = ({ data, callBack }) => {
  return {
    type: examTypeTypes.DELETE_EXAM_TYPE,
    request: {
      method: REQUESTMETHOD.DELETE,
      data: data,
      url: examTypeApi.DELETE_EXAM_TYPE,
      isFormData: false,
      enableMessages: true,
      successMessage: "ExamType deleted Successfully",
      failMessage: "Failed to delete ExamType",
      callBack,
    },
  };
};

export const getAllExamTypes = () => {
  return {
    type: examTypeTypes.GET_ALL_EXAM_TYPES,
    request: {
      method: REQUESTMETHOD.GET,

      enableMessages: false,
      url: examTypeApi.GET_ALL_EXAM_TYPES,
    },
  };
};
