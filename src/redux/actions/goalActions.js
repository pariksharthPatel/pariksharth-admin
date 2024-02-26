import { goalApi } from "../../API";
import { goalTypes, REQUESTMETHOD } from "../types";

export const getGoals = ({ query, callBack }) => {
  return {
    type: goalTypes.GET_GOALS,
    request: {
      method: REQUESTMETHOD.GET,
      params: query,

      enableMessages: false,
      url: goalApi.GET_GOALS,
      callBack,
    },
  };
};

export const addGoal = ({ data, callBack }) => {
  return {
    type: goalTypes.ADD_GOAL,
    request: {
      method: REQUESTMETHOD.POST,
      data: data,
      url: goalApi.ADD_GOAL,
      enableMessages: true,
      isFormData: true,
      successMessage: "Goal Added Successfully",
      failMessage: "Failed to add Goal",
      callBack,
    },
  };
};

export const importGoal = ({ data, callBack }) => {
  return {
    type: goalTypes.IMPORT_GOAL,
    request: {
      method: REQUESTMETHOD.POST,
      data: data,
      url: goalApi.IMPORT_GOAL,
      isFormData: false,
      enableMessages: true,
      successMessage: "Goals Imported Successfully",
      failMessage: "Failed to immport Goals",
      callBack,
    },
  };
};

export const editGoal = ({ data, callBack }) => {
  delete data.topics;
  return {
    type: goalTypes.UPDATE_GOAL,
    request: {
      method: REQUESTMETHOD.PATCH,
      data: data,
      url: goalApi.UPDATE_GOAL,
      isFormData: true,

      enableMessages: true,
      successMessage: "Goal Updated Successfully",
      failMessage: "Failed to update Goal",
      callBack,
    },
  };
};

export const deleteGoal = ({ data, callBack }) => {
  return {
    type: goalTypes.DELETE_GOAL,
    request: {
      method: REQUESTMETHOD.DELETE,
      data: data,
      url: goalApi.DELETE_GOAL,
      isFormData: false,
      enableMessages: true,
      successMessage: "Goal deleted Successfully",
      failMessage: "Failed to delete Goal",
      callBack,
    },
  };
};

export const getAllGoals = () => {
  return {
    type: goalTypes.GET_ALL_GOALS,
    request: {
      method: REQUESTMETHOD.GET,

      enableMessages: false,
      url: goalApi.GET_ALL_GOALS,
    },
  };
};

export const getAllMyGoals = () => {
  return {
    type: goalTypes.GET_ALL_GOALS,
    request: {
      method: REQUESTMETHOD.GET,

      enableMessages: false,
      url: goalApi.GET_ALL_MY_GOALS,
    },
  };
};
