import { goalExamApi } from "../../API";
import { goalExamTypes, REQUESTMETHOD } from "../types";

export const getGoalExams = ({ query, callBack }) => {
  console.log("query", query);
  return {
    type: goalExamTypes.GET_GOAL_EXAMS,
    request: {
      method: REQUESTMETHOD.GET,
      params: query,

      enableMessages: false,
      url: goalExamApi.GET_GOAL_EXAMS,
      callBack,
    },
  };
};

export const addGoalExam = ({ data, callBack }) => {
  return {
    type: goalExamTypes.ADD_GOAL_EXAM,
    request: {
      method: REQUESTMETHOD.POST,
      data: data,
      url: goalExamApi.ADD_GOAL_EXAM,

      enableMessages: true,
      successMessage: "GoalExam Added Successfully",
      failMessage: "Failed to add GoalExam",
      callBack,
    },
  };
};

export const editGoalExam = ({ data, callBack }) => {
  delete data.subGoalExams;
  return {
    type: goalExamTypes.UPDATE_GOAL_EXAM,
    request: {
      method: REQUESTMETHOD.PATCH,
      data: data,
      url: goalExamApi.UPDATE_GOAL_EXAM,

      enableMessages: true,
      successMessage: "GoalExam Updated Successfully",
      failMessage: "Failed to update GoalExam",
      callBack,
    },
  };
};

export const deleteGoalExam = ({ data, callBack }) => {
  return {
    type: goalExamTypes.DELETE_GOAL_EXAM,
    request: {
      method: REQUESTMETHOD.DELETE,
      data: data,
      url: goalExamApi.DELETE_GOAL_EXAM,
      isFormData: false,
      enableMessages: true,
      successMessage: "GoalExam deleted Successfully",
      failMessage: "Failed to delete GoalExam",
      callBack,
    },
  };
};

export const getAllGoalExams = () => {
  return {
    type: goalExamTypes.GET_ALL_GOAL_EXAMS,
    request: {
      method: REQUESTMETHOD.GET,

      enableMessages: false,
      url: goalExamApi.GET_ALL_GOAL_EXAMS,
    },
  };
};

export const getAllMyGoalExams = () => {
  return {
    type: goalExamTypes.GET_ALL_GOAL_EXAMS,
    request: {
      method: REQUESTMETHOD.GET,

      enableMessages: false,
      url: goalExamApi.GET_ALL_MY_GOAL_EXAMS,
    },
  };
};
