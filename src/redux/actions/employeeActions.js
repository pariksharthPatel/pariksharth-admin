import { employeeApi } from "../../API";
import { employeeTypes, REQUESTMETHOD } from "../types";

export const getEmployees = ({ query, callBack }) => {
  return {
    type: employeeTypes.GET_ALL_EMPLOYEES,
    request: {
      method: REQUESTMETHOD.GET,
      params: query,

      enableMessages: false,
      url: employeeApi.GET_EMPLOYEES,
      callBack,
    },
  };
};

export const addEmployee = ({ data, callBack }) => {
  return {
    type: employeeTypes.ADD_EMPLOYEE,
    request: {
      method: REQUESTMETHOD.POST,
      data: data,
      url: employeeApi.ADD_EMPLOYEE,
     
      enableMessages: true,
      successMessage: "Employee Added Successfully",
      failMessage: "Failed to add Employee",
      callBack,
    },
  };
};

export const editEmployee = ({ data, callBack }) => {
  return {
    type: employeeTypes.UPDATE_EMPLOYEE,
    request: {
      method: REQUESTMETHOD.PATCH,
      data: data,
      url: employeeApi.UPDATE_EMPLOYEE,
     

      enableMessages: true,
      successMessage: "Employee Updated Successfully",
      failMessage: "Failed to update Employee",
      callBack,
    },
  };
};

export const deleteEmployee = ({ data, callBack }) => {
  return {
    type: employeeTypes.DELETE_EMPLOYEE,
    request: {
      method: REQUESTMETHOD.DELETE,
      data: data,
      url: employeeApi.DELETE_EMPLOYEE,
      isFormData: false,
      enableMessages: true,
      successMessage: "Employee deleted Successfully",
      failMessage: "Failed to delete Employee",
      callBack,
    },
  };
};

export const getAllEmployees = () => {
  return {
    type: employeeTypes.GET_ALL_EMPLOYEES,
    request: {
      method: REQUESTMETHOD.GET,

      enableMessages: false,
      url: employeeApi.GET_ALL_EMPLOYEES,
    },
  };
};
