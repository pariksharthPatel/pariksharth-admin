import { testApi } from "../../API";
import { testTypes, REQUESTMETHOD } from "../types";

export const getTests = ({ query, callBack }) => {
  console.log("query", query);
  return {
    type: testTypes.GET_TESTS,
    request: {
      method: REQUESTMETHOD.GET,
      params: query,

      enableMessages: false,
      url: testApi.GET_TESTS,
      callBack,
    },
  };
};

export const getTestQuestions = ({ query, callBack }) => {
  return {
    type: testTypes.GET_TEST_QUESTIONS,
    request: {
      method: REQUESTMETHOD.GET,
      params: query,

      enableMessages: false,
      url: testApi.GET_TEST_QUESTIONS,
      callBack,
    },
  };
};

export const addTest = ({ data, callBack }) => {
  return {
    type: testTypes.ADD_TEST,
    request: {
      method: REQUESTMETHOD.POST,
      data: data,
      url: testApi.ADD_TEST,

      enableMessages: true,
      successMessage: "Test Added Successfully",
      failMessage: "Failed to add Test",
      callBack,
    },
  };
};

export const addTestQuestions = ({ data, callBack }) => {
  return {
    type: testTypes.ADD_TEST_QUESTIONS,
    request: {
      method: REQUESTMETHOD.POST,
      data: data,
      url: testApi.ADD_TEST_QUESTIONS,

      enableMessages: true,
      successMessage: "Test Questions Added Successfully",
      failMessage: "Failed to add Test Questions",
      callBack,
    },
  };
};

export const editTest = ({ data, callBack }) => {
  delete data.subTests;
  return {
    type: testTypes.UPDATE_TEST,
    request: {
      method: REQUESTMETHOD.PATCH,
      data: data,
      url: testApi.UPDATE_TEST,

      enableMessages: true,
      successMessage: "Test Updated Successfully",
      failMessage: "Failed to update Test",
      callBack,
    },
  };
};

export const deleteTest = ({ data, callBack }) => {
  return {
    type: testTypes.DELETE_TEST,
    request: {
      method: REQUESTMETHOD.DELETE,
      data: data,
      url: testApi.DELETE_TEST,
      isFormData: false,
      enableMessages: true,
      successMessage: "Test deleted Successfully",
      failMessage: "Failed to delete Test",
      callBack,
    },
  };
};

export const getAllTests = () => {
  return {
    type: testTypes.GET_ALL_TESTS,
    request: {
      method: REQUESTMETHOD.GET,

      enableMessages: false,
      url: testApi.GET_ALL_TESTS,
    },
  };
};

export const getAllTestQuestions = () => {
  return {
    type: testTypes.GET_ALL_TEST_QUESTIONS,
    request: {
      method: REQUESTMETHOD.GET,

      enableMessages: false,
      url: testApi.GET_ALL_TEST_QUESTIONS,
    },
  };
};
