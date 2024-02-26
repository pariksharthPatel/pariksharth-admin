import { degreeApi } from "../../API";
import { degreeTypes, REQUESTMETHOD } from "../types";

export const getDegrees = ({ query, callBack }) => {
  console.log("query", query);
  return {
    type: degreeTypes.GET_DEGREES,
    request: {
      method: REQUESTMETHOD.GET,
      params: query,

      enableMessages: false,
      url: degreeApi.GET_DEGREES,
      callBack,
    },
  };
};

export const addDegree = ({ data, callBack }) => {
  return {
    type: degreeTypes.ADD_DEGREE,
    request: {
      method: REQUESTMETHOD.POST,
      data: data,
      url: degreeApi.ADD_DEGREE,

      enableMessages: true,
      successMessage: "Degree Added Successfully",
      failMessage: "Failed to add Degree",
      callBack,
    },
  };
};

export const editDegree = ({ data, callBack }) => {
  delete data.subDegrees;
  return {
    type: degreeTypes.UPDATE_DEGREE,
    request: {
      method: REQUESTMETHOD.PATCH,
      data: data,
      url: degreeApi.UPDATE_DEGREE,

      enableMessages: true,
      successMessage: "Degree Updated Successfully",
      failMessage: "Failed to update Degree",
      callBack,
    },
  };
};

export const deleteDegree = ({ data, callBack }) => {
  return {
    type: degreeTypes.DELETE_DEGREE,
    request: {
      method: REQUESTMETHOD.DELETE,
      data: data,
      url: degreeApi.DELETE_DEGREE,
      isFormData: false,
      enableMessages: true,
      successMessage: "Degree deleted Successfully",
      failMessage: "Failed to delete Degree",
      callBack,
    },
  };
};

export const getAllDegrees = () => {
  return {
    type: degreeTypes.GET_ALL_DEGREES,
    request: {
      method: REQUESTMETHOD.GET,

      enableMessages: false,
      url: degreeApi.GET_ALL_DEGREES,
    },
  };
};
