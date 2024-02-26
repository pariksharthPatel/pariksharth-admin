import { questionApi } from "../../API";
import { questionTypes, REQUESTMETHOD } from "../types";

export const getQuestions = ({ query, callBack }) => {
  return {
    type: questionTypes.GET_QUESTIONS,
    request: {
      method: REQUESTMETHOD.GET,
      params: query,

      enableMessages: false,
      url: questionApi.GET_QUESTIONS,
      callBack,
    },
  };
};

export const addQuestion = ({ data, callBack }) => {
  return {
    type: questionTypes.ADD_QUESTION,
    request: {
      method: REQUESTMETHOD.POST,
      data: data,
      url: questionApi.ADD_QUESTION,
      isFormData: true,
      enableMessages: true,
      successMessage: "Question Added Successfully",
      failMessage: "Failed to add Question",
      callBack,
    },
  };
};

export const editQuestion = ({ data, callBack }) => {
  delete data.subQuestions;
  return {
    type: questionTypes.UPDATE_QUESTION,
    request: {
      method: REQUESTMETHOD.PATCH,
      data: data,
      url: questionApi.UPDATE_QUESTION,
      isFormData: true,

      enableMessages: true,
      successMessage: "Question Updated Successfully",
      failMessage: "Failed to update Question",
      callBack,
    },
  };
};

export const deleteQuestion = ({ data, callBack }) => {
  return {
    type: questionTypes.DELETE_QUESTION,
    request: {
      method: REQUESTMETHOD.DELETE,
      data: data,
      url: questionApi.DELETE_QUESTION,
      isFormData: false,
      enableMessages: true,
      successMessage: "Question deleted Successfully",
      failMessage: "Failed to delete Question",
      callBack,
    },
  };
};

export const getAllCategories = () => {
  return {
    type: questionTypes.GET_ALL_QUESTIONS,
    request: {
      method: REQUESTMETHOD.GET,

      enableMessages: false,
      url: questionApi.GET_ALL_QUESTIONS,
    },
  };
};
