import { testSeriesApi } from "../../API";
import { testSeriesTypes, REQUESTMETHOD } from "../types";

export const getTestSeriess = ({ query, callBack }) => {
  console.log("query", query);
  return {
    type: testSeriesTypes.GET_TEST_SERIESS,
    request: {
      method: REQUESTMETHOD.GET,
      params: query,

      enableMessages: false,
      url: testSeriesApi.GET_TEST_SERIESS,
      callBack,
    },
  };
};

export const addTestSeries = ({ data, callBack }) => {
  return {
    type: testSeriesTypes.ADD_TEST_SERIES,
    request: {
      method: REQUESTMETHOD.POST,
      data: data,
      url: testSeriesApi.ADD_TEST_SERIES,

      enableMessages: true,
      successMessage: "TestSeries Added Successfully",
      failMessage: "Failed to add TestSeries",
      callBack,
    },
  };
};

export const editTestSeries = ({ data, callBack }) => {
  delete data.subTestSeriess;
  return {
    type: testSeriesTypes.UPDATE_TEST_SERIES,
    request: {
      method: REQUESTMETHOD.PATCH,
      data: data,
      url: testSeriesApi.UPDATE_TEST_SERIES,

      enableMessages: true,
      successMessage: "TestSeries Updated Successfully",
      failMessage: "Failed to update TestSeries",
      callBack,
    },
  };
};

export const deleteTestSeries = ({ data, callBack }) => {
  return {
    type: testSeriesTypes.DELETE_TEST_SERIES,
    request: {
      method: REQUESTMETHOD.DELETE,
      data: data,
      url: testSeriesApi.DELETE_TEST_SERIES,
      isFormData: false,
      enableMessages: true,
      successMessage: "TestSeries deleted Successfully",
      failMessage: "Failed to delete TestSeries",
      callBack,
    },
  };
};

export const getAllTestSeriess = () => {
  return {
    type: testSeriesTypes.GET_ALL_TEST_SERIESS,
    request: {
      method: REQUESTMETHOD.GET,

      enableMessages: false,
      url: testSeriesApi.GET_ALL_TEST_SERIESS,
    },
  };
};
